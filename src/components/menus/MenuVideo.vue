<script setup>
import { ref, inject } from 'vue'
import { ElSpace } from 'element-plus'
import { Video } from '@/components/icons/index.js'

defineOptions({
  name: 'menu-video'
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
      <Video color="#606266"></Video>
      <span class="desc-text">视频</span>
    </el-space>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>