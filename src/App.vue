<template lang="html">
  <div class="hello">

    <vue-sunduan-select-test
      :data="listOne"
      @change="getSelectItem"
    />

    <!-- <vue-sunduan-select-test
      :data="listTwo"
      @change="getSelectItem"
    /> -->

  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      hello: 'hello vue-sunduan-select, my name is james q>_<p!! _>o<_ ',
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
      listTwo: [
        {
          name: 'one1',
          id: 11,
        },
        {
          name: 'two2',
          id: 22,
        },
        {
          name: 'three3',
          id: 33,
        },
        {
          name: 'four4',
          id: 44,
        },
        {
          name: 'five5',
          id: 55,
        },
        {
          name: 'six6',
          id: 66,
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

<style lang="css">
.hello {
  font-size: 24px;
  color: #333;
  background: #eee;
}
</style>
