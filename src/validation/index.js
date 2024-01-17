import { Rule } from "postcss";
import { Value } from "sass";

const validationsMessages = {
    required : "این فیلد اجباری میباشد" ,
    min : "این فیلد نمیتواند کمتر از $minکاراکترباشد " ,
    max: "این فیلد نمیتواند بیشتر از $max کاراکتر باشد" ,
    email : "ایمیل نامعتبر میباشد"  ,
    mobile : "لطفا موبایل را صورت صحیح وارد نمایید (09120000000)"
}

export const RulesType = 'required'| 'mobile' | 'sameAs'  ; 

export const Rules = () => {
    require()
    return {
        require : true ,
        message:'این فیلد اجباری میباشد'
    }
}

function min (value , min) {
    if(!value) return Promise.resolve();
    else if(value && value.length >= min) return Promise.resolve() ;
    else return Promise.reject(validationsMessages.min)
}

function max (value , max ) {
    if(!value) return Promise.resolve();
    else if(value && value.length <= max) return Promise.resolve();
    else return Promise.reject(validationsMessages.max)
}

function email (value) {
    if(value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return Promise.resolve() ;
    else return Promise.reject(validationsMessages.email)
}

 function mobile (value) {
    console.log('into!!!!!!!') 
    if(value && /\b09\d{9}\b/.test(value)) return Promise.resolve() ;
    else return Promise.reject(validationsMessages.mobile)
}

function sameAs ({getFieldValue}) {
    const validator = (_ , value) => {
        console.log("_val" , value)
        if(!value || getFieldValue("password") === value ) {
            return Promise.resolve();
        }
        return Promise.reject(new Error('The new password that you entered do not match !'))
    }
    return validator ;
}


export const applyRules = (arrayRules) => {
    if(!arrayRules || arrayRules.length <= 0) {
        return [] ;
    }
    var _rules = [];
    arrayRules.forEach(r => {
        if(r === 'required') _rules.push(Rules.required) ;
        else if (r === 'mobile') _rules.push({validator:(_ , value) => Rules.mobile(value)});
        else if (r === 'emile') _rules.push ({validator:(_ , value ) => Rules.email(value)}) ;
        else if (r === 'sameAs') _rules.push ({validator : (_ , value) => Rules.sameAs(value)});
        else if (r.split(':')[0]) _rules.push({validator : (_ , value ) => Rules[r.split(':')[1]]});
        
    });
    return _rules ;
}


