<script setup>
import { ElSpace } from 'element-plus'
import { AlignTextCenter } from '@/components/icons/index.js'
import TiptapTextAlign from '@/composables/menus/TiptapTextAlign.js'

defineOptions({
  name: 'menu-text-align-justify'
})

const { 
  label,
  isActive,
  iconColor,
  handleClick 
} = TiptapTextAlign('justify', '对齐')
</script>

<template>
  <div 
    class="custom-menu"
    :class="{ 'is-active': isActive }" 
    @click="handleClick"
  >
    <el-space direction="vertical">
      <AlignTextCenter :color="iconColor"></AlignTextCenter>
      <span class="desc-text">{{ label }}</span>
    </el-space>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>