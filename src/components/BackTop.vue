<script setup></script>

<template>
  <div>
    <el-backtop :bottom="100">
      <el-backtop :right="48" :bottom="150" style="height: 25px; width: 25px" />
      <div
        style="
          height: 100%;
          width: 100%;
          border-radius: 15px;
          background-color: var(--el-bg-color-overlay);
          box-shadow: var(--el-box-shadow-lighter);
          text-align: center;
        "
      >
        <img src="/images/返回顶部.png" alt="" />
      </div>
    </el-backtop>
  </div>
</template>

<style scoped></style>
