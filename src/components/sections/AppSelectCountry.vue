<template>
  <v-dialog
    height="5000"
    max-width="600"
    v-model="dialog"
    :fullscreen="$vuetify.breakpoint.xsOnly"
  >
    <v-card>
      <v-card-title> Selecione um pais </v-card-title>
      <v-card-text>
        <v-btn @click="tt()" color="success">text</v-btn>
        <v-text-field v-model="search" :loading="loading"></v-text-field>
        <!-- <v-autocomplete
          v-model="country"
          :loading="loading"
          :items="items"
          @change="setCode"
          :search-input.sync="search"
          hide-no-data
          dense
          autofocus
          :hide-spin-buttons="true"
          hide-details
          return-object
          :item-text="getText"
        /> -->

        <v-list dense>
          <v-list-item-group v-model="country" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <span :class="item.isoCode.toLowerCase()" class="vti__flag" />
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ item }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <!-- -->

        <!-- <v-autocomplete
          v-model="country"
          @input="setCode"
          :items="countries"
          outlined
          dense
          flat
          return-object
          item-text="country"
        /> -->
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import PhoneCodesList from "@/enums/PhoneCodesList";
import { searchCountry } from "@/utils/ComponentFunctions";
export default {
  data() {
    return {
      countries: PhoneCodesList,
      country: { country: "Brasil ", isoCode: "BR", ddiCode: "55" },
      dialog: false,
      loading: false,
      items: [],
      search: null,
    };
  },
  watch: {
    search(val) {
      val && val !== this.country && this.querySelections(val);
    },
  },
  methods: {
    tt() {
      // console.log("teste");
      // teste();
    },

    getText(item) {
      return `(+${item.ddiCode}) ${item.country}`;
    },
    querySelections(v) {
      searchCountry(v).then((response) => {
        this.items = response;
      });
    },
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
<style src="../../assets/flags.css"></style>

<style></style>
