<script setup>
import { ElSpace } from 'element-plus'
import { Underline } from '@/components/icons/index.js'
import TiptapMenu from '@/composables/menus/TiptapMenu.js'

defineOptions({
  name: 'menu-underline'
})

const { 
  label,
  isActive,
  disabled,
  iconColor,
  handleClick 
} = TiptapMenu('underline', '下划线')
</script>

<template>
  <div 
    class="custom-menu"
    :class="{ 'is-active': isActive }" 
    :disabled="disabled" 
    @click="handleClick"
  >
    <el-space direction="vertical">
      <Underline :color="iconColor"></Underline>
      <span class="desc-text">{{ label }}</span>
    </el-space>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>