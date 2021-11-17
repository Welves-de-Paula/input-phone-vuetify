<template>
  <div>
    <v-text-field
      v-model="number"
      v-bind="$attrs"
      :prefix="`+${country.ddiCode}`"
      @input="handleInput()"
      prepend-icon="mdi-earth"
      @click:prepend="changeCountry"
    >
    </v-text-field>
    {{ country }}

    <hr />
    {{ teste }}
    <!--  -->
    <AppSelectCountry v-model="country" ref="AppSelectCountry" />
  </div>
</template>

<script>
import PhoneNumber from "awesome-phonenumber";

import AppSelectCountry from "@/components/sections/AppSelectCountry";
export default {
  props: {
    label: {},
    value: {},
  },
  components: {
    AppSelectCountry,
  },
  data: () => ({
    // country: "55",
    number: null,
    phone: "",
    country: { country: "Brasil ", isoCode: "BR", ddiCode: "55" },
  }),

  computed: {
    teste() {
      return PhoneNumber(this.phone.toString()).getRegionCode();
    },
  },

  watch: {
    data(newValue, oldValue) {},
  },
  methods: {
    handleInput() {
      this.phone = PhoneNumber(
        this.number.toString(),
        this.country.isoCode.toString()
      ).getNumber("international");

      this.$emit("input", this.phone);
    },
    changeCountry() {
      this.$refs.AppSelectCountry.open();
    },
  },
};
</script>
