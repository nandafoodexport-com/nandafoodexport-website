"use strict";

/* ==========================================
   FILE      : contact.js
   MODULE    : Contact Form
   PROJECT   : Nanda Food Export
   VERSION   : 1.0.0
   DESCRIPTION
   Handles Business Inquiry form, validation,
   UI state management and Web3Forms submission.
========================================== */

/* ==========================================
   CONFIGURATION
========================================== */

const CONFIG=Object.freeze({

    API_URL:"https://api.web3forms.com/submit",

    REQUEST_TIMEOUT:15000,

    SUCCESS_DELAY:2500,

    RESET_DELAY:500,

    STATUS_CLASS:"form-status",

    DEBUG:false

});

/* ==========================================
   DOM SELECTORS
========================================== */

const DOM={};

/* ==========================================
   MESSAGES
========================================== */

const MESSAGES=Object.freeze({

    /* VALIDATION */

    REQUIRED:"This field is required.",
    NAME:"Please enter your full name.",
    EMAIL:"Please enter a valid business email.",
    COUNTRY:"Please enter your country.",
    PRODUCT:"Please select a product interest.",
    MESSAGE:"Please describe your business requirements.",

    /* SUBMISSION */

    SUCCESS:"Your inquiry has been sent successfully.",
    ERROR:"Unable to send your inquiry. Please try again.",
    NETWORK:"Network connection lost. Please check your internet connection.",
    TIMEOUT:"Request timed out. Please try again."

});

/* ==========================================
   STATE
========================================== */

const STATE={

    initialized:false,

    submitting:false,

    controller:null,

    response:null

};



/* ==========================================
   UTILITIES
========================================== */

const $=(selector,scope=document)=>scope.querySelector(selector);

const $$=(selector,scope=document)=>[...scope.querySelectorAll(selector)];

const trim=value=>String(value??"").trim();

const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));

const isFunction=value=>typeof value==="function";

const isElement=value=>value instanceof HTMLElement;

const debug=(...args)=>{
    if(!CONFIG.DEBUG) return;
    console.log("[CONTACT]",...args);
};

/* ==========================================
   DOM INITIALIZER
========================================== */

function cacheDOM(){

    DOM.form=$("[data-form='contact']");

    if(!DOM.form){
        STATE.initialized=false;
        debug("Contact form not found.");
        return false;
    }

    /* FORM */

    DOM.fields=$$("[data-field]",DOM.form);
    DOM.errors=$$("[data-error]",DOM.form);

    /* HIDDEN */

    DOM.accessKey=$("[name='access_key']",DOM.form);
    DOM.fromName=$("[name='from_name']",DOM.form);
    DOM.botcheck=$("[name='botcheck']",DOM.form);
    DOM.turnstile=$("[data-turnstile]",DOM.form);

    /* BUTTON */

    DOM.submitButton=$("[data-submit]",DOM.form);
    DOM.buttonText=$("[data-button-text]",DOM.form);
    DOM.spinner=$("[data-spinner]",DOM.form);

    /* STATUS */

    DOM.status=$("[data-status]",DOM.form);

    debug("DOM cached.");

    return true;

}

/* ==========================================
   DOM HELPERS
========================================== */

function getField(name){
    return $(`[data-field="${name}"]`,DOM.form);
}

function getError(name){
    return $(`[data-error="${name}"]`,DOM.form);
}

function getValue(name){
    const field=getField(name);
    return field?trim(field.value):"";
}

function setValue(name,value=""){
    const field=getField(name);
    if(field) field.value=value;
}

function focusField(name){
    const field=getField(name);
    if(field) field.focus({preventScroll:true});
}

function hasField(name){
    return !!getField(name);
}

function hasError(name){
    return !!getError(name);
}


/* ==========================================
   UI HELPERS
========================================== */

function show(element){
    if(element) element.hidden=false;
}

function hide(element){
    if(element) element.hidden=true;
}

function setText(element,text=""){
    if(element) element.textContent=text;
}

function clearText(element){
    setText(element);
}

function toggleDisabled(element,state=true){
    if(element) element.disabled=state;
}

function clearStatus(){

    if(!DOM.status) return;

    hide(DOM.status);

    clearText(DOM.status);

    DOM.status.className=CONFIG.STATUS_CLASS;

}

function setStatus(message,type="success"){

    if(!DOM.status) return;

    DOM.status.className=`${CONFIG.STATUS_CLASS} ${type}`;

    setText(DOM.status,message);

    show(DOM.status);

}

function setLoading(state){

    toggleDisabled(DOM.submitButton,state);

    if(state){

        hide(DOM.buttonText);

        show(DOM.spinner);

        return;

    }

    show(DOM.buttonText);

    hide(DOM.spinner);

}

function clearForm(){

    if(!DOM.form) return;

    DOM.form.reset();

    clearErrors();

    clearStatus();

    setLoading(false);

}

/* ==========================================
   FIELD UI
========================================== */

function showError(name,message){

    const field=getField(name);
    const error=getError(name);

    if(!field||!error) return;

    field.setAttribute("aria-invalid","true");

    setText(error,message);

    show(error);

}

function clearError(name){

    const field=getField(name);
    const error=getError(name);

    if(field){
        field.removeAttribute("aria-invalid");
    }

    if(error){

        clearText(error);

        hide(error);

    }

}

function clearErrors(){

    DOM.fields.forEach(field=>{
        clearError(field.dataset.field);
    });

}


/* ==========================================
   VALIDATION
========================================== */

function isEmpty(value){
    return trim(value)==="";
}

function isEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trim(value));
}

function validateField(name){

    const value=getValue(name);

    switch(name){

        case "name":

            if(isEmpty(value)){
                showError(name,MESSAGES.NAME);
                return false;
            }

            break;

        case "country":

            if(isEmpty(value)){
                showError(name,MESSAGES.COUNTRY);
                return false;
            }

            break;

        case "email":

            if(isEmpty(value)){
                showError(name,MESSAGES.REQUIRED);
                return false;
            }

            if(!isEmail(value)){
                showError(name,MESSAGES.EMAIL);
                return false;
            }

            break;

        case "product":

            if(isEmpty(value)){
                showError(name,MESSAGES.PRODUCT);
                return false;
            }

            break;

        case "message":

            if(isEmpty(value)){
                showError(name,MESSAGES.MESSAGE);
                return false;
            }

            break;

    }

    clearError(name);

    return true;

}

function validateForm(){

    clearErrors();

    let firstInvalid=null;

    for(const field of DOM.fields){

        const {field:name}=field.dataset;

        if(validateField(name)) continue;

        if(!firstInvalid){
            firstInvalid=name;
        }

    }

    if(firstInvalid){
        focusField(firstInvalid);
        return false;
    }

    return true;

}


/* ==========================================
   FORM DATA
========================================== */

function getFormData(){

    const formData=new FormData(DOM.form);

    DOM.fields.forEach(field=>{
        formData.set(field.name,trim(field.value));
    });

    return formData;

}

function getFormValues(){

    const values={};

    DOM.fields.forEach(field=>{
        values[field.name]=trim(field.value);
    });

    return values;

}

/* ==========================================
   WEB3FORMS
========================================== */

async function submitForm(){

    STATE.controller=new AbortController();

    const timeout=setTimeout(()=>{
        STATE.controller.abort();
    },CONFIG.REQUEST_TIMEOUT);

    try{

        const response=await fetch(CONFIG.API_URL,{
            method:"POST",
            body:getFormData(),
            signal:STATE.controller.signal
        });

        const result=await response.json();

        STATE.response=result;

        if(!response.ok||!result.success){
            throw new Error(result.message||MESSAGES.ERROR);
        }

        return result;

    }catch(error){

        if(error.name==="AbortError"){
            throw new Error(MESSAGES.TIMEOUT);
        }

        if(error instanceof TypeError){
            throw new Error(MESSAGES.NETWORK);
        }

        throw error;

    }finally{

        clearTimeout(timeout);

        STATE.controller=null;

    }

}

/* ==========================================
   SUCCESS
========================================== */

async function handleSuccess(){

    setStatus(MESSAGES.SUCCESS,"success");

    await delay(CONFIG.SUCCESS_DELAY);

    resetForm();

}

/* ==========================================
   ERROR
========================================== */

function handleError(error){

    const message=error instanceof Error
        ?error.message
        :MESSAGES.ERROR;

    setStatus(message,"error");

    debug(error);

}


/* ==========================================
   RESET
========================================== */

async function resetForm(){

    STATE.response=null;

    if(STATE.controller){
        STATE.controller.abort();
        STATE.controller=null;
    }

    clearForm();

    await delay(CONFIG.RESET_DELAY);

}


/* ==========================================
   INITIALIZE
========================================== */

async function handleSubmit(event){

    event.preventDefault();

    if(STATE.submitting) return;

    if(!validateForm()) return;

    STATE.submitting=true;

    setLoading(true);

    clearStatus();

    try{

        await submitForm();

        await handleSuccess();

    }catch(error){

        handleError(error);

    }finally{

        STATE.submitting=false;

        setLoading(false);

    }

}

function initialize(){

    if(STATE.initialized) return;

    if(!cacheDOM()) return;

    DOM.form.addEventListener("submit",handleSubmit);

    STATE.initialized=true;

    debug("Contact form initialized.");

}

document.addEventListener("DOMContentLoaded",initialize);