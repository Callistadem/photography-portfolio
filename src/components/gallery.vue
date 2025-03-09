<template>
    <div id="image-portfolio">
      <p>Take a look at my {{ photoType }} photos.</p>
      <div class="gallery">
      </div>  
    </div>
</template>

<style scoped>
  #image-portfolio {
    text-align: center;
  }
  p {
    padding: 3rem;
  }
</style>

<script scoped>

export default {
    props: {
        photoType: {
            type: String,
            required: true
        }
    }
}
</script>

