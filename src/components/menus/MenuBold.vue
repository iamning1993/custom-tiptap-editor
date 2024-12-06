<script setup>
import { ElSpace } from 'element-plus'
import { Bold } from '@/components/icons/index.js'
import TiptapMenu from '@/composables/menus/TiptapMenu.js'

defineOptions({
  name: 'menu-bold'
})

const { 
  label,
  isActive,
  disabled,
  iconColor,
  handleClick 
} = TiptapMenu('bold', '加粗')
</script>

<template>
  <div 
    class="custom-menu"
    :class="{ 'is-active': isActive }" 
    :disabled="disabled" 
    @click="handleClick"
  >
    <el-space direction="vertical">
      <Bold :color="iconColor"></Bold>
      <span class="desc-text">{{ label }}</span>
    </el-space>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>