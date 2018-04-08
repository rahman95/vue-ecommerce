<template>
  <form @submit.prevent="saveProduct" class='form-horizontal'>
		<div class='form-group'>
			<label for='name'>Name</label>
      <input type="text" placeholder="Name" v-model="model.name" v-validate="'required'" name="name" :class="{'form-control': true, 'error': errors.has('name') }" />
      <span class="small text-danger" v-show="errors.has('name')">Name is required</span>
		</div>
    <div class='form-group'>
      <label for='name'>Description</label>
      <textarea placeholder="Description" rows="10" v-model="model.description" v-validate="'required'" name="description" :class="{'form-control': true, 'error': errors.has('description') }" />
      <span class="small text-danger" v-show="errors.has('description')">Description is required</span>
    </div>
    <div class='form-group'>
      <label for='name'>Price</label>
      <input type="text" placeholder="Price" v-model="model.price" v-validate="'required|decimal'" name="price" :class="{'form-control': true, 'error': errors.has('price') }" />
      <span class="small text-danger" v-show="errors.has('price')">Price is required and must be numeric</span>
    </div>
    <div class='form-group'>
      <label for='name'>Image</label>
      <input type="text" placeholder="Image" v-model="model.image" v-validate="'required|url'" name="image" :class="{'form-control': true, 'error': errors.has('image') }" />
      <span class="small text-danger" v-show="errors.has('image')">Image is required and must be a valid URL</span>
    </div>
    <div class="form-group new-button">
      <button class="btn btn-success">
        <i class="fa fa-pencil"></i>
        <span v-if="isEditing">Update Product</span>
        <span v-else>Add Product</span>
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    props: ['model', 'isEditing'],
    methods: {
      saveProduct () {
        this.$emit('save-product', this.model)
      }
    }
  }
</script>
