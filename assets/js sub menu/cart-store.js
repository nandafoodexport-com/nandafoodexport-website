/*
============================================================
NANDA FOOD EXPORT — PROPRIETARY SOURCE CODE
Copyright © 2026 PT. Nanda Food And Agriculture.
All Rights Reserved.

Unauthorized copying, modification, distribution, publication,
or reuse of this proprietary source code, in whole or in substantial
part, is prohibited without prior written permission from
PT. Nanda Food And Agriculture.

Third-party materials remain subject to their respective licenses.
============================================================
*/

/*!
 * ==========================================================
 * NANDA FOOD EXPORT
 * Cart Store Core v1.5 Stable
 * Single Source of Truth
 * ==========================================================
 */
(() => {
    "use strict";

    const VERSION="1.5.0";
    const STORAGE_KEY="nandafoodCart";
    const EVENT_NAME="cart:updated";

    let state=[];
    let initialized=false;

    const listeners=new Set();

    const clone=value=>structuredClone(value);

    const emit=()=>{
        const snapshot=clone(state);

        listeners.forEach(listener=>{
            try{
                listener(snapshot);
            }catch(error){
                console.error("[CartStore] Listener Error:",error);
            }
        });

        document.dispatchEvent(
            new CustomEvent(EVENT_NAME,{
                detail:snapshot
            })
        );
    };

    const normalizeItem=item=>({
        id:String(item.id??""),
        name:String(item.name??""),
        image:String(item.image??""),
        price:Number(item.price??0),
        currency:String(item.currency??""),
        qty:Math.max(1,Number(item.qty??1))
    });

    const validateItem=item=>
        !!item &&
        typeof item==="object" &&
        item.id &&
        item.name &&
        item.image &&
        Number.isFinite(Number(item.price)) &&
        item.currency &&
        Number(item.qty)>0;

    const load=()=>{
        try{

            const raw=localStorage.getItem(STORAGE_KEY);

            if(!raw){
                state=[];
                return clone(state);
            }

            const parsed=JSON.parse(raw);

            state=Array.isArray(parsed)
                ?parsed.map(normalizeItem).filter(validateItem)
                :[];

        }catch(error){

            console.error("[CartStore] Load Error:",error);

            state=[];

        }

        return clone(state);
    };

    const save=()=>{

        try{

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(state)
            );

            emit();

        }catch(error){

            console.error("[CartStore] Save Error:",error);

        }

        return clone(state);

    };
	
	    const getCart=()=>clone(state);

    const getItem=id=>
        clone(
            state.find(
                item=>item.id===String(id)
            )||null
        );

    const hasItem=id=>
        state.some(
            item=>item.id===String(id)
        );

    const addItem=product=>{

        if(!validateItem(product)){
            console.warn("[CartStore] Invalid Product:",product);
            return getCart();
        }

        const existing=state.find(
            item=>item.id===String(product.id)
        );

        if(existing){

            existing.qty+=Math.max(
                1,
                Number(product.qty??1)
            );

        }else{

            state.push(
                normalizeItem(product)
            );

        }

        return save();

    };

    const removeItem=id=>{

        state=state.filter(
            item=>item.id!==String(id)
        );

        return save();

    };

    const updateQty=(id,qty)=>{

        qty=Math.max(
            1,
            Number(qty)
        );

        const item=state.find(
            item=>item.id===String(id)
        );

        if(!item) return getCart();

        item.qty=qty;

        return save();

    };

    const increaseQty=id=>{

        const item=state.find(
            item=>item.id===String(id)
        );

        if(!item) return getCart();

        item.qty++;

        return save();

    };

    const decreaseQty=id=>{

        const item=state.find(
            item=>item.id===String(id)
        );

        if(!item) return getCart();

        if(item.qty>1){

            item.qty--;

        }else{

            state=state.filter(
                p=>p.id!==String(id)
            );

        }

        return save();

    };

    const clearCart=()=>{

        state=[];

        return save();

    };

    const getItemCount=()=>

        state.reduce(
            (total,item)=>total+item.qty,
            0
        );

    const getTotal=()=>

        state.reduce(
            (total,item)=>
                total+(item.price*item.qty),
            0
        );

    const isEmpty=()=>
        state.length===0;

    const size=()=>
        state.length;

    const reload=()=>{

        load();

        emit();

        return getCart();

    };

    const isReady=()=>
        initialized===true;
		
		
		    const subscribe=callback=>{

        if(typeof callback!=="function") return ()=>{};

        listeners.add(callback);

        callback(clone(state));

        return ()=>listeners.delete(callback);

    };

    const unsubscribe=callback=>{

        listeners.delete(callback);

    };

    const syncStorage=event=>{

        if(event.key!==STORAGE_KEY) return;

        load();

        emit();

    };

    const destroy=()=>{

        listeners.clear();

        window.removeEventListener(
            "storage",
            syncStorage
        );

        initialized=false;

        return true;

    };

    const init=()=>{

        if(initialized) return;

        load();

        emit();

        window.addEventListener(
            "storage",
            syncStorage
        );

        initialized=true;

    };

    init();

    window.CartStore=Object.freeze({

        VERSION,
        STORAGE_KEY,
        EVENT_NAME,

        getCart,
        getItem,
        hasItem,

        addItem,
        removeItem,
        updateQty,
        increaseQty,
        decreaseQty,
        clearCart,

        getItemCount,
        getTotal,

        isEmpty,
        size,

        reload,
        isReady,

        subscribe,
        unsubscribe,

        destroy

    });

})();
