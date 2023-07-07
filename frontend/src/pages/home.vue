<script>
import TableOrder from "../components/teableOrder.vue";
import { mapActions, mapState } from "pinia";
import { useOrderStore } from "../stores/order";
import FormOrder from "../components/formOrder.vue";
export default {
  components: {
    TableOrder,
    FormOrder,
  },
  computed: {
    ...mapState(useOrderStore, ["orders"]),
  },
  methods: {
    ...mapActions(useOrderStore, ["fetchOrder"]),
  },
  created() {
    this.fetchOrder();
  },
};
</script>
<template>
  <section class="container mx-auto p-6 font-mono">
    <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div class="w-full overflow-x-auto">
        <FormOrder />
        <table class="w-full">
          <thead>
            <tr
              class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600"
            >
              <th class="px-4 py-3">No</th>
              <th class="px-4 py-3">Title</th>
              <th class="px-4 py-3">Quantity</th>
              <th class="px-4 py-3">Price</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <TableOrder
              v-for="(order, index) in orders"
              :key="order.id"
              :order="order"
              :index="index"
            />
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
