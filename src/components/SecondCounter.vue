<template>
    <div>
    <h2>SecondCount: {{count}}</h2>
    </div>
</template>

<script>
export default {
  computed: {
    count() {
      return this.$store.getters.counterHandler;
    },
  },
};
</script>
