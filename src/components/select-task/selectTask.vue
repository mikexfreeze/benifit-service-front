<template>
  <div class="select-layout">
    <ul>
      <template v-for="task in taskList">
        <li @click="handleSelectTask(task)">{{task.name}}</li>
      </template>
    </ul>
  </div>
</template>

<script src="./selectTask.js"></script>
<style scoped lang="scss" src="./selectTask.scss"></style>
