import { showToast } from "../../utils/toasters";

export const sellService = async (data) => {
  try {
    console.log("sell data",data);
  } catch (error) {
    showToast("error", error?.data?.message);
  }
};

export const getBestPriceService = async (data) => {
  try {
    console.log("get best price",data);
  } catch (error) {
    showToast("error", error?.data?.message);
  }
};

export const joinUsService = async (data) => {
  try {
    console.log("join us data",data);
  } catch (error) {
    showToast("error", error?.data?.message);
  }
};

export const contactusService = async (data) => {
  try {
    console.log("contact data",data);
  } catch (error) {
    showToast("error", error?.data?.message);
  }
};

export const callBackService=async(data)=>{
  try {
    console.log("contact data",data);
  } catch (error) {
    showToast("error", error?.data?.message);
  }
}
