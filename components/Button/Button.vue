<template>
  <div>
    <div>
      Example complex component
    </div>
    <v-btn :color="color">
      Complex component Button
    </v-btn>
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
