<template lang="html">
  <div class="select">
    select
    <sd-select-test
      :data="listOne"
      @change="getSelectItem"
    />
  </div>
</template>

<script>
export default {
  name: 'sd-select',
  data() {
    return {
      listOne: [
        {
          name: 'one',
          id: 1,
        },
        {
          name: 'two',
          id: 2,
        },
        {
          name: 'three',
          id: 3,
        },
        {
          name: 'four',
          id: 4,
        },
        {
          name: 'five',
          id: 5,
        },
        {
          name: 'six',
          id: 6,
        },
      ],
    };
  },
  methods: {
    getSelectItem(options) {
      const {name, id} = options;
      console.log(name, id);
    },
  },
};
</script>

<style lang="scss">
body {
  background-color: rgba(128, 128, 128, 1);
  .select {
    display: inline-block;
    width: 10%;
  }
}
</style>
