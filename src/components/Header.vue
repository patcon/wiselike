<template lang="pug">
  .header
    //- el-menu
      //- el-menu-item(index='1')
    el-row.row-bg(type='flex', justify='space-between')
      el-col.left(:span='6')
        //- el-input(icon='search', v-model="myKey", :on-icon-click='search')
        h1 Wiselike
        Search(:users="users")
      el-col(:span='6')
      el-col(:span='6')
        .btn-group
          el-button Create My Profile
          span(v-if="username === ''")
            el-button(@click.native="login") Login
          span(v-else)
            el-button {{username}}

</template>

<script>
  import Search from './Search.vue'

  export default {
    name: 'header',
    props: ['users'],
    components: {
      Search
    },
    data () {
      return {
        myKey: '',
        username: ''
      }
    },
    methods: {
      login: function (event) {
        window.open('http://139.162.109.88:9000/login') // FIXME
      }
    },
    mounted: function () {
      window.addEventListener('message', (event) => {
        if (event.origin !== 'http://139.162.109.88:9000') { // FIXME
          console.log('Incorrect origin')
          return
        }
        this.username = event.data.username
      }, false)
    }
  }
</script>

<style lang="scss" scoped>
  .header {
    position: absolute;
    padding: 1em 5ch;
    box-sizing: border-box;
    width: 100%;
    .left {
      display: flex;
      h1 {
        color: white;
      }
    }
  }
  .btn-group{
    text-align: right;
  }
  h1{
    margin-top: 0px;
    text-align: center
  }
</style>
