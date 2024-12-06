<script setup>
import { computed } from 'vue'
const menuModules = import.meta.glob('./menus/*.vue', { eager: true })
const { keywords } = defineProps({
  keywords: {
    type: Array,
    default: () => []
  }
})

const resultKeywords = computed(() => keywords.map(v => `menu-${ v }`))

const getMenuComponents = (menuModules) => {
  let components = []
  for (const key in menuModules) {
    const menuModule = menuModules[key]
    components.push({
      name: menuModule.default.name,
      component: menuModule.default
    })
  }
  return components
}
const menuComponents = getMenuComponents(menuModules)
const findComponentByKeyword = (keyword) => menuComponents.find(v => v.name === keyword)
</script>

<template>
  <div class="control-group">
    <div class="button-group">
       <template v-for="keyword in resultKeywords">
        <template v-if="findComponentByKeyword(keyword)">
          <component :is="findComponentByKeyword(keyword).component"></component>
        </template>
       </template>
    </div>
  </div>
</template>

<style scoped>
.control-group {
  border-bottom: 1px solid var(--el-color-base-border);
}
</style>