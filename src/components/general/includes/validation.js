import {Form as VeeForm, Field as VeeField, defineRule, ErrorMessage, configure} from "vee-validate";
import {
    required, 
    min, max, 
    alpha_spaces as alphaSpaces, 
    email, 
    min_value as minVal,
    max_value as maxVal,
    confirmed,
    is_not,

} from '@vee-validate/rules';

export default{
    install(app){
        app.component("VeeForm", VeeForm);
        app.component("VeeField", VeeField);
        app.component("ErrorMessage", ErrorMessage);

        defineRule('required',required);
        defineRule('tos',required);
        defineRule('min',min);
        defineRule('max',max);
        defineRule('alpha_spaces',alphaSpaces);
        defineRule('email',email);
        defineRule('min_value',minVal);
        defineRule('max_value', maxVal);
        defineRule('passwords_mismatch', confirmed);
        defineRule('excluded', is_not); 
        defineRule('country_excluded',is_not)

        configure({generateMessage:(context)=>{
             const messages={
                required:`The field ${context.field} is required!`,
                min:`The field ${context.field} must be bigger!`,
                max:`The field ${context.field} is too big!`,
                alpha_spaces:`The field ${context.field} must contain only alphanumeric characters.`,
                email:`The field ${context.field} must be a valid email!`,
                min_value:`The field ${context.field} is too low!`,
                max_value:`The field ${context.field} is too high`,
                excluded:`You are not alowed to use this value for the field ${context.field}`,
                country_excluded:`Due to sanctions we don't accept user from this location`,
                passwords_mismatch:`The password don't match.`,
                tos:`You must accept the Term of Service.`,
             };
             const message=messages[context.rule.name]? messages[context.rule.name]:`The field ${context.field} is invalid.`;
             return message;
        },validateOnBlur:true,validateOnChange:true,validateOnInput:false, validateOnModelUpdate:true} )
    },
};