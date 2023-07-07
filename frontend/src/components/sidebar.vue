<template>
  <div id="app" v-if="access_token">
    <!-- Sidebar with Dimmer -->
    <div :class="[open ? 'fixed inset-0 flex z-40' : 'inset-0 flex z-40']">
      <!-- Sidebar -->
      <div
        class="absolute flex top-0 h-screen z-20"
        :class="[right ? 'right-0 flex-row' : 'left-0 flex-row-reverse']"
      >
        <!--Drawer -->
        <button
          @click.prevent="toggle()"
          class="w-12 h-48 p-1 my-auto rounded text-white bg-gray-600 text-center focus:outline-none hover:bg-gray-500 transition-color duration-300"
        >
          <span
            :class="[right ? '-rotate-90' : 'rotate-90']"
            class="block transform origin-center font-bold"
          >
            Menu
          </span>
        </button>

        <!-- Sidebar Content -->
        <div
          ref="content"
          class="transition-all duration-700 bg-sky-600 overflow-hidden flex justify-center"
          :class="[open ? 'max-w-lg' : 'max-w-0']"
        >
          <div class="pr-9">
            <ul class="mt-4">
              <li class="py-2 px-4 text-xl text-white">Order List</li>
              <li class="py-2 px-4">
                <i
                  class="fa-sharp fa-solid fa-right-from-bracket pr-2"
                  style="color: #ffffff"
                ></i>
                <router-link
                  to="/login"
                  class="nav-link text-white"
                  @click="logOut()"
                  >Log Out</router-link
                >
              </li>
            </ul>
          </div>
          <slot></slot>
        </div>
      </div>

      <transition name="fade">
        <!-- Dimmer -->
        <div
          v-if="dimmer && open"
          @click="toggle()"
          class="flex-1 bg-gray-400 bg-opacity-75 active:outline-none z-10"
        />
      </transition>
    </div>
  </div>
</template>

<script>
import { useOrderStore } from "../stores/order";
import { mapActions, mapState } from "pinia";

export default {
  data() {
    return {
      open: false,
      dimmer: true,
      right: false,
    };
  },
  computed: {
    ...mapState(useOrderStore, ["access_token"]),
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    ...mapActions(useOrderStore, ["logOut"]),
  },
};
</script>

<style scoped>
html {
  background: #efefef;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
