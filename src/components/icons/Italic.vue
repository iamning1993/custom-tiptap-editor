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
    <path d="M20 6H36" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M12 42H28" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
    <path d="M29 5.95215L19 41.9998" :stroke="color" stroke-width="3" stroke-linecap="butt" stroke-linejoin="miter"/>
  </svg>
</template>