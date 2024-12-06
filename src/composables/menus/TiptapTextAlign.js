import { inject, computed } from 'vue'

export default (keyword, label) => {
  const editor = inject('editor')
  const isActive = computed(() => editor.value.isActive({ textAlign: keyword }))
  const iconColor = computed(() => editor.value.isActive({ textAlign: keyword }) ? '#409EFF' : '#606266')
  const handleClick = () => editor.value.chain().focus().setTextAlign(keyword).run()

  return {
    label,
    isActive,
    iconColor,
    editor,
    handleClick
  }
}