<script setup>
defineProps({
  color: {
    type: String,
    default: '#000000'
  }
})
</script>

<template>
  <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M42 9H6" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M42 19H14" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M42 29H6" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M42 39H14" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
  </svg>
</template>