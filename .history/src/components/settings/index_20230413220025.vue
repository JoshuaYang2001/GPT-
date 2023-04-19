<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="props.dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { defineProps } from "vue";
import { ElDialog } from "element-plus";
const props = defineProps({
  dialogVisible: {
    type: Boolean,
    required: true,
  },
});
</script>

<style lang="less" scoped>
.index {
}
</style>
