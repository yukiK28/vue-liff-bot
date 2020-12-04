<template>
  <div id="app">
    <div class="liff-data">
      <table>
        <tr>
          <th>OS</th>
          <td>{{ os }}</td>
        </tr>
        <tr>
          <th>Language</th>
          <td>{{ language }}</td>
        </tr>
        <tr>
          <th>LIFF SDK Version</th>
          <td>{{ sdkVersion }}</td>
        </tr>
        <tr>
          <th>LINE Version</th>
          <td>{{ lineVersion }}</td>
        </tr>
        <tr>
          <th>isInClient</th>
          <td>{{ isInClient }}</td>
        </tr>
        <tr>
          <th>isLoggedIn</th>
          <td>{{ isLoggedIn }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
// inputFormをComponentとして設定
// import InputForm from '@/components/InputForm.vue'
// import { liff } from '@/utils/liff';
import liff from '@line/liff';

export default {
  name: 'app',
  components: {
    // InputForm
  },
  data() {
    return {
    }
  },
  created() {
    this.initLiff()
  },
  computed: {
    os() {
      return liff.getOS()
    },
    language() {
      return liff.getLanguage()
    },
    lineVersion() {
      return liff.getLineVersion()
    },
    sdkVersion() {
      return liff.getVersion()
    },
    isInClient() {
      return liff.isInClient()
    },
    isLoggedIn() {
      return liff.isLoggedIn()
    }
  },
  methods: {
    async initLiff(){
      await liff.init({
        liffId: '1655189215-9ejqWwgd'
      }).then(() => {
        this.loggedIn = liff.isLoggedIn();
      }).catch((err) => {
        // 失敗したときの処理
      });
    }
  }
}
</script>

<style>
#app {
  color: #2c3e50;
}
</style>
