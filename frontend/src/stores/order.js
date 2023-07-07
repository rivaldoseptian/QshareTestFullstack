import { defineStore } from "pinia";
import axios from "axios";
import BaseUrl from "../components/baseUrl";

export const useOrderStore = defineStore("order", {
  state: () => ({
    baseUrl: BaseUrl,
    orders: [],
  }),
  getters: {},
  actions: {
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
        this.fetchOrder();
      } catch (error) {
        console.log(error);
      }
    },
  },
});
