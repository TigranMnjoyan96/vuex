<template>
    <div>
        <button class="btn btn-success" @click="inc(1)">Inc</button>
        <button class="btn btn-danger" @click="inc(-1)">Dec</button>
    </div>
</template>


<script>
export default {
  methods: {
    inc(val) {
      // this.$store.state.count += val;
      // this.$store.commit('changeCounter', val);
      this.$store.dispatch('asyncCountHandler', {
        value: val,
        delay: 500,
      });
    },
  },
};
</script>
