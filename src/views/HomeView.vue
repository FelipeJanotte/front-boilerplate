<template>
  <div class="home">
    <h1>Type any brazillian zip code</h1>
    <v-text-field
      v-model="zipCode"
      @change="searchZipCode"
      label="00000000"
      type="number"
      min="0"
      max="99999999"
    />
    <p>
      reponse:
      {{ response }}
    </p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      zipCode: '',
      response: null
    }
  },
  methods: {
    searchZipCode() {
      if (this.zipCode.length === 8) {
        this.$api.ViaCepController.getCep({ cep: this.zipCode, dataType: null })
          .then((response) => {
            this.response = response.data
          })
          .catch((err) => {
            this.response = err
          })
      }
    }
  }
})
</script>
