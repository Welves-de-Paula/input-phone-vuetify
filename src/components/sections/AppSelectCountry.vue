<template>
  <v-dialog
    height="5000"
    max-width="600"
    v-model="dialog"
    :fullscreen="$vuetify.breakpoint.xsOnly"
  >
    <v-card>
      <v-card-title>
        Selecione um pais
      </v-card-title>
      <v-card-text>
        <v-autocomplete
          v-model="country"
          @input="setCode"
          :items="countries"
          outlined
          dense
          flat
          return-object
          item-text="country"
        />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import PhoneCodesList from "@/enums/PhoneCodesList";
export default {
  data() {
    return {
      countries: PhoneCodesList,
      country: { country: "Brasil ", isoCode: "BR", ddiCode: "55" },
      dialog: false,
    };
  },

  methods: {
    open() {
      this.dialog = true;
    },
    setCode(country) {
      this.$emit("input", country);
      this.dialog = false;
    },
  },
};
</script>

<style></style>
