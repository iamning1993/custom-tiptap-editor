<script setup>
import { ref, computed, toRaw } from 'vue'
import { 
  ElDialog,
  ElInput,
  ElButton
} from 'element-plus'
import { Link } from '@/components/icons/index.js'

const emits = defineEmits(['cancel', 'confirm'])
const dialogVisible = defineModel(false)
const { original } = defineProps({
  original: {
    type: String,
    default: ''
  }
})

const link = ref(original ? original : '')
const confirmDisabled = computed(() => !link.value)

const handleConfirm = () => {
  emits('confirm', toRaw(link.value))
}
</script>

<template>
  <el-dialog
    v-model="dialogVisible"
    title="插入链接" 
    width="400" 
    destroy-on-close
    center
  >
      <el-input 
        class="dialog-input" 
        v-model="link" 
        placeholder="请输入链接地址" 
        clearable  
      >
        <template #prepend>
          <Link color="#909399"></Link>
        </template>
      </el-input>
    <template #footer>
      <div class="dialog-footer">
        <el-button class="dialog-button" v-if="original" @click="emits('cancel')">取消链接</el-button>
        <el-button class="dialog-button" v-else type="primary" :disabled="confirmDisabled" @click="handleConfirm">
          插入链接
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
.dialog-input {
  margin-bottom: 10px;
}

.dialog-footer {
  display: flex;
}

.dialog-button {
  width: 100%;
}
</style>