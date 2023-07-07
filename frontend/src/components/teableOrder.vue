<script>
export default {
  props: ["order", "index"],
};
</script>

<template>
  <tr>
    <td class="px-4 py-3 text-ms font-semibold border">{{ index + 1 }}</td>
    <td class="px-4 py-3 text-ms font-semibold border">{{ order.title }}</td>
    <td class="px-4 py-3 text-ms font-semibold border">{{ order.quantity }}</td>
    <td class="px-4 py-3 text-ms font-semibold border">
      Rp.{{ order.price }},00
    </td>
  </tr>
</template>
