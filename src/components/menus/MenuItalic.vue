<script setup>
import { ElSpace } from 'element-plus'
import { Italic } from '@/components/icons/index.js'
import TiptapMenu from '@/composables/menus/TiptapMenu.js'

defineOptions({
  name: 'menu-italic'
})

const { 
  label,
  isActive,
  disabled,
  iconColor,
  handleClick 
} = TiptapMenu('italic', '斜体')
</script>

<template>
  <div 
    class="custom-menu"
    :class="{ 'is-active': isActive }" 
    :disabled="disabled" 
    @click="handleClick"
  >
    <el-space direction="vertical">
      <Italic :color="iconColor"></Italic>
      <span class="desc-text">{{ label }}</span>
    </el-space>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>