import { inject, computed } from 'vue'

export default (keyword, label) => {
  const editor = inject('editor')

  const toggleKeyword = `toggle${ keyword.replace(keyword[0], keyword[0].toLocaleUpperCase()) }`
  const isActive = computed(() => editor.value.isActive(keyword))
  const disabled = computed(() => !editor.value.can().chain().focus()[toggleKeyword]().run())
  const iconColor = computed(() => editor.value.isActive(keyword) ? '#409EFF' : '#606266')
  const handleClick = () => editor.value.chain().focus()[toggleKeyword]().run()

  return {
    label,
    isActive,
    disabled,
    iconColor,
    editor,
    handleClick
  }
}