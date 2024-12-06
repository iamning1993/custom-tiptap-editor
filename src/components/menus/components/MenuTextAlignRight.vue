<script setup>
import { ElSpace } from 'element-plus'
import { AlignTextRight } from '@/components/icons/index.js'
import TiptapTextAlign from '@/composables/menus/TiptapTextAlign.js'

defineOptions({
  name: 'menu-text-align-right'
})

const { 
  label,
  isActive,
  iconColor,
  handleClick 
} = TiptapTextAlign('right', '居右')
</script>

<template>
  <div 
    class="custom-menu"
    :class="{ 'is-active': isActive }" 
    @click="handleClick"
  >
    <el-space direction="vertical">
      <AlignTextRight :color="iconColor"></AlignTextRight>
      <span class="desc-text">{{ label }}</span>
    </el-space>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>