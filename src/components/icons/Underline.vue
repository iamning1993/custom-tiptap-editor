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
    <path d="M8 44H40" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M37 6.09717C37 12.7638 37 15.3335 37 22.0002C37 29.1799 31.1797 35.0002 24 35.0002C16.8203 35.0002 11 29.1799 11 22.0002C11 15.3335 11 12.7638 11 6.09717" :stroke="color" stroke-width="3" stroke-linecap="butt"/>
  </svg>
</template>