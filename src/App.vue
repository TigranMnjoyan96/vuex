<template>
  <div>
    <div class="container">
      <div>
        <h2>{{title}}</h2>
        <app-counter></app-counter>
        <hr>
        <app-second-counter></app-second-counter>
        <app-actions></app-actions>
      </div>
    </div>
  </div>
</template>


<script>
import Counter from './components/Counter.vue';
import Actions from './components/Actions.vue';
import SecondCounter from './components/SecondCounter.vue';


export default {

  components: {
    appActions: Actions,
    appCounter: Counter,
    appSecondCounter: SecondCounter,
  },
  computed: {
    title() {
      return this.$store.getters.changeTitle;
    },
  },
};
</script>
