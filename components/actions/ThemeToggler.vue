<template>
<button class="flex" >
  <span v-if="dark" class="mr-[10px] text-[#808191]">Tun</span>
  <span v-else class="mr-[10px] text-[#808191]">Kun</span>
  <input type="checkbox" class="checkbox" id="checkbox">
  <label for="checkbox" class="checkbox-label bg-[#E5E5EA] dark:bg-[#6C5DD3]" :class="dark ? 'dark' : 'light'"  @click="toggleDarkMode" >
    <!-- TODO:ball -->
    <span class="ball"></span>
    <!-- :class="dark ? 'absolute left-50' : 'absolute right-50' "  -->
  </label>
</button>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex';

export default {
  computed: {
    ...mapGetters(['dark'])
  },

  methods: {
    ...mapMutations(['SET_DARK']),

    toggleDarkMode() {
      this.SET_DARK(!this.dark);
      // localStorage.theme = this.dark ? 'dark' : 'light';
    }
  },
  // mounted() {
    // if (localStorage.theme === undefined) {
    //   if (
    //     window.matchMedia &&
    //     window.matchMedia('(prefers-color-scheme: dark)')
    //     .matches
    //   ) {
    //     localStorage.theme = 'dark';
    //     this.SET_DARK(true);
    //   } else {
    //     localStorage.theme = 'light';
    //   }
    // } else {
    //   this.SET_DARK(localStorage.theme === 'dark');
    // }
  // },
};
</script>

<style lang="scss">
.checkbox {
  opacity: 0;
  position: absolute;
}

.checkbox-label {
  background-color: #E5E5EA;
  width: 52px;
  height: 24px;
  border-radius: 50px;
  position: relative;
  padding: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.checkbox-label .ball {
  background-color: #fff;
  width: 17px;
  height: 17px;
  position: absolute;
  left: 3.5px;
  top: 3.5px;
  border-radius: 50%;
  transition: transform 0.2s linear;
}

.checkbox:checked+.checkbox-label .ball {
  transform: translateX(26px);
}

/*  Support me if you like it */
.support {
  position: absolute;
  right: 20px;
  bottom: 20px;
}

.support a {
  color: #292c35;
  font-size: 32px;
  backface-visibility: hidden;
  display: inline-block;
  transition: transform 0.2s ease;
}

.support a:hover {
  transform: scale(1.1);
}
</style>
