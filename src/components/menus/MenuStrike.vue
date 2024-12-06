<script setup>
import { ElSpace } from 'element-plus'
import { Strike } from '@/components/icons/index.js'
import TiptapMenu from '@/composables/menus/TiptapMenu.js'

defineOptions({
  name: 'menu-strike'
})

const { 
  label,
  isActive,
  disabled,
  iconColor,
  handleClick 
} = TiptapMenu('strike', '删除线')
</script>

<template>
  <div 
    class="custom-menu"
    :class="{ 'is-active': isActive }" 
    :disabled="disabled" 
    @click="handleClick"
  >
    <el-space direction="vertical">
      <Strike :color="iconColor"></Strike>
      <span class="desc-text">{{ label }}</span>
    </el-space>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>