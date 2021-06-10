<template>
  <div>
    Test
    <v-btn :color="color">Test button</v-btn>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary',
    }
  }
}
</script>
