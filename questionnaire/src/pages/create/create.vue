<template>
  <div>
      <common-header>
          <common-back></common-back>
      </common-header>
      <common-sidecolumn></common-sidecolumn>
      <create-questionnaire></create-questionnaire>
  </div>
</template>

<script>
import CommonHeader from '../common/header.vue'
import CommonSidecolumn from '../common/sidecolumn.vue'
import CommonBack from '../common/back.vue'
import CreateQuestionnaire from './component/questionnaire'
export default {
    name:'Create',
    components:{
        CommonHeader,
        CommonSidecolumn,
        CommonBack,
        CreateQuestionnaire
    },
}
</script>

<style scoped>

</style>