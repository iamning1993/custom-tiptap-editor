<script setup>
import { ref, inject } from 'vue'
import { ElSpace } from 'element-plus'
import { Image } from '@/components/icons/index.js'

defineOptions({
  name: 'menu-image'
})

const editor = inject('editor')

const settingImage = () => {
  
}

</script>

<template>
  <div 
    class="custom-menu"
    @click="settingImage"
  >
    <el-space direction="vertical">
      <Image color="#606266"></Image>
      <span class="desc-text">图片</span>
    </el-space>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>