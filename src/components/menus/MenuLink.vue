<script setup>
import { ref } from 'vue'
import { ElSpace } from 'element-plus'
import LinkDialog from './components/LinkDialog.vue'
import { Link } from '@/components/icons/index.js'
import TiptapMenu from '@/composables/menus/TiptapMenu.js'

defineOptions({
  name: 'menu-link'
})

const { 
  label,
  isActive,
  disabled,
  iconColor,
  editor
} = TiptapMenu('link', '链接')

const linkDialogVisible = ref(false)

const original = ref('')
const settingLink = () => {
  const linkHref = editor.value.getAttributes('link').href
  original.value = linkHref ? linkHref : ''
  linkDialogVisible.value = true
}

const linkDialogConfirm = (link) => {
  editor.value
    .chain()
    .focus()
    .extendMarkRange('link')
    .setLink({ href: link })
    .run()
  linkDialogVisible.value = false
}

const linkDialogCancel = () => {
  editor.value
    .chain()
    .focus()
    .unsetLink()
    .run()
  linkDialogVisible.value = false
}
</script>

<template>
  <div 
    class="custom-menu"
    :class="{ 'is-active': isActive }" 
    :disabled="disabled" 
    @click="settingLink"
  >
    <el-space direction="vertical">
      <Link :color="iconColor"></Link>
      <span class="desc-text">{{ label }}</span>
    </el-space>
  </div>
  <template v-if="linkDialogVisible">
    <link-dialog 
      v-model="linkDialogVisible" 
      :original="original" 
      @confirm="linkDialogConfirm" 
      @cancel="linkDialogCancel"
    />
  </template>
</template>

<style scoped>
@import url('@/assets/tiptap-menu.css');
</style>