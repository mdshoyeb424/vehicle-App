import { showToast } from "../../utils/toasters";
import emailjs from 'emailjs-com';
import { sendTamplate } from "./Templates";

const message="Thank you for reaching out to AA1 Scrap Center. Our team will get back to you soon."

const serviceId = "service_qemhbg9";
const pubKey = "LZ8tgYf-DRx8lXkiz";
const templateId = "template_8imyitp";

export const sellService = async (data) => {
  try {
    data.type='Sell'
    if(!data.contact){
      showToast("error","Phone Number is required");
      return;
    }
    const templateParams = {
      type:"Sell",
      name: data?.name, 
      email: data?.email, 
      custom_html: sendTamplate(data)
    };
   const res= await emailjs.send(serviceId, templateId, templateParams, pubKey);
   if(res.text==='OK'){
    showToast("success",message)
   }
return res;
  } catch (error) {
    console.error("Error sending email:", error);
    showToast("error", error?.message || "Error sending message");
  }
};

export const getBestPriceService = async (data) => {
  try {
    if(!data.contact){
      showToast("error","Phone Number is required");
      return;
    }
     data.type='Sell'
    const templateParams = {
      type:"Sell",
      name: data?.name, 
      email: data?.email, 
      custom_html: sendTamplate(data)
    };
    const res= await emailjs.send(serviceId, templateId, templateParams, pubKey);
    if(res.text==='OK'){
      showToast("success",message)
    }
    return res;
  } catch (error) {
    console.error("Error sending email:", error);
    showToast("error", error?.message || "Something went wrong please try again ");
  }
};

export const joinUsService = async (data) => {
  try {
    if(!data.contact){
      showToast("error","Phone Number is required");
      return;
    }
     data.type='Joining'
    const templateParams = {
      type:"Joining",
      name: data?.name, 
      email: data?.email, 
      custom_html: sendTamplate(data)
    };
    console.log(data)
    const res= await emailjs.send(serviceId, templateId, templateParams, pubKey);
    if(res.text==='OK'){
      showToast("success",message)
    }
    return res;
  } catch (error) {
    showToast("error", error?.message || "Something went wrong please try again ");
  }
};

export const contactusService = async (data) => {
  try {
    if(!data.contact){
      showToast("error","Phone Number is required");
      return;
    }
     data.type='Query'
    const templateParams = {
      type:"Query",
      name: data?.name, 
      email: data?.email, 
      custom_html: sendTamplate(data)
    };
    const res= await emailjs.send(serviceId, templateId, templateParams, pubKey);
    if(res.text==='OK'){
      showToast("success",message)
    }
    return res;
  } catch (error) {
    showToast("error", error?.message || "Something went wrong please try again ");
  }
};

export const callBackService = async (data) => {
  try {
    if(!data.contact){
      showToast("error","Phone Number is required");
      return;
    }
     data.type='Call Back'
    const templateParams = {
      type:"Call Back",
      name: data?.name, 
      email: data?.email, 
      custom_html: sendTamplate(data)
    };
    const res= await emailjs.send(serviceId, templateId, templateParams, pubKey);
    if(res.text==='OK'){
      showToast("success",message)
    }
    return res;
  } catch (error) {

    showToast("error", error?.message || "Something went wrong please try again ");
  }
};
