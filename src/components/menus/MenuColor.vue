<script setup>
import { ref, inject, computed } from 'vue'
import { ElSpace } from 'element-plus'
import { Pencil } from '@/components/icons/index.js'

defineOptions({
  name: 'menu-color'
})

const editor = inject('editor')
const colorInputRef = ref(null)

const settingColor = () => {
  colorInputRef.value.click()
}
</script>

<template>
  <div 
    type="color" 
    class="custom-menu custom-menu-color"
    @click="settingColor" 
  >
    <el-space direction="vertical">
      <Pencil color="#606266"></Pencil>
      <span class="desc-text">色值</span>
    </el-space>
    <input 
      ref="colorInputRef" 
      class="color-input" 
      type="color" 
      @input="editor.chain().focus().setColor($event.target.value).run()" 
      :value="editor.getAttributes('textStyle').color" 
    >
    </input>
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');

.custom-menu-color {
  position: relative;
}

.color-input {
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  height: 1px;
  visibility: hidden;
}
</style>