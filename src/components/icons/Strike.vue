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
    <path d="M5 24H43" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M24 24C40 30 34 44 24 44C13.9999 44 12 36 12 36" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M35.9999 12C35.9999 12 33 4 23.9999 4C14.9999 4 11.4359 11.5995 15.6096 18" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M12 36C12 36 15.9999 44 24 44C32 44 36.564 36.4005 32.3903 30" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
  </svg>
</template>