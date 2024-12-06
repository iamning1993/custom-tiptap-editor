<script setup>
import MenuTextAlignLeft from './components/MenuTextAlignLeft.vue'
import MenuTextAlignCenter from './components/MenuTextAlignCenter.vue'
import MenuTextAlignRight from './components/MenuTextAlignRight.vue'
import MenuTextAlignJustify from './components/MenuTextAlignJustify.vue'

defineOptions({
  name: 'menu-text-align'
})

</script>

<template>
  <menu-text-align-left></menu-text-align-left>
  <menu-text-align-center></menu-text-align-center>
  <menu-text-align-right></menu-text-align-right>
  <menu-text-align-justify></menu-text-align-justify>
</template>