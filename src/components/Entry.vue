<template>
  <div class="entry">
    <div class="entry-item">
      <div class="entry-title">
        {{ title }}
      </div>
      <div class="entry-date">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entry",
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  },
};
</script>

<style scoped>
.entry-item {
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid #DFE3E8;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.25s ease;
}
.entry-item:hover {
    transform: scale(1.1, 1.1);
}
.entry-title{
    font-weight: bold;
    font-size: 24px;
}

</style>