import { defineStore } from "pinia";
import axios from "axios";
import BaseUrl from "../components/baseUrl";

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
        this.router.push({ name: "home" });
      } catch (error) {
        console.log(error);
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
        this.router.push({ name: "login" });
      } catch (error) {
        console.log(error);
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
        console.log(data);
      } catch (error) {
        console.log(error);
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
        this.fetchOrder();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
