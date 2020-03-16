<template>
    <div class="pt-3">
    <h2>Count: {{count}}</h2>
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
