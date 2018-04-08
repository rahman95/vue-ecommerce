<template>
  	<div class='container'>
      <product-form @save-product="addProduct" :model="model">
      </product-form>
    </div>
</template>

<script>
  import ProductFrom from '@/components/forms/Product.vue'

  export default {
    name: 'Create',
    data () {
      return {
        model: {},
      }
    },
    methods: {
      addProduct (model) {
        console.log('model', model)
      }
    },
    components: {
      'product-form': ProductFrom
    }
  }
</script>
