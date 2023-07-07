import { defineStore } from "pinia";
import { toast } from "vue3-toastify";
import axios from "axios";
import BaseUrl from "../components/baseUrl";
import "vue3-toastify/dist/index.css";

export const useOrderStore = defineStore("order", {
  state: () => ({
    baseUrl: BaseUrl,
    access_token: localStorage.access_token,
    orders: [],
  }),
  getters: {},
  actions: {
    logOut() {
      localStorage.clear();
      this.access_token = null;
    },
    async login(inputLogin) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/user/login",
          method: "POST",
          data: inputLogin,
        });
        (inputLogin.email = ""), (inputLogin.password = "");
        localStorage.setItem("access_token", data.access_token);
        this.access_token = data.access_token;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Succes Login",
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.push({ name: "home" });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
    async register(inputRegister) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/user/register",
          method: "POST",
          data: inputRegister,
        });
        (inputRegister.email = ""), (inputRegister.password = "");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Succes Register",
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.push({ name: "login" });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
    async fetchOrder() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/order",
          method: "GET",
          headers: {
            access_token: this.access_token,
          },
        });
        this.orders = data;
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
    async createOrder(inputOrder) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/order",
          method: "POST",
          data: inputOrder,
          headers: {
            access_token: this.access_token,
          },
        });
        (inputOrder.title = ""),
          (inputOrder.quantity = ""),
          (inputOrder.price = "");
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Succes Register",
          showConfirmButton: false,
          timer: 1500,
        });
        this.fetchOrder();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.response.data.message}`,
        });
      }
    },
  },
});
