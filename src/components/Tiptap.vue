<script setup>
import { reactive, provide, shallowRef } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import TiptapMenus from './TiptapMenus.vue'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Link from '@tiptap/extension-link'
import Strike from '@tiptap/extension-strike'
import Underline from '@tiptap/extension-underline'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import { Color } from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'

const keywords = shallowRef(['bold', 'italic', 'strike', 'underline', 'color', 'text-align', 'link', 'image', 'video'])

const editor = reactive(useEditor({
  content: '',
  autofocus: true,
  extensions: [
    Document,
    Paragraph,
    Text,
    Bold,
    Link.configure({
      openOnClick: false,
      defaultProtocol: 'http',
    }),
    Italic,
    Strike,
    Underline,
    Image,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Placeholder.configure({
      placeholder: '请输入内容......',
    }),
    TextStyle,
    Color.configure({
      types: ['textStyle'],
    }),
  ]
}))

provide('editor', editor)
</script>

<template>
  <div v-if="editor" class="tip-tap-container">
    <tiptap-menus :keywords="keywords" />
    <editor-content class="editor-field" :editor="editor" />
  </div>
</template>

<style scoped>
@import url('@/assets/tiptap-editor.css');
</style>

<style>
@import url('@/assets/tiptap-content.css');
@import url('@/assets/tiptap-color.css');
</style>
