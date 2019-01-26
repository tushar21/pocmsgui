<template>
  <b-container class="home">
    <h1>{{ msg }}</h1>   

    <b-row>
      <b-form inline>
        <label class="sr-only" for="inlineFormInputName2">Name</label>
        <b-input class="mb-2 mr-sm-2 mb-sm-0" id="inlineFormInputName2" placeholder="Item Code" v-model="itemcode" />
        <label class="sr-only" for="inlineFormInputGroupUsername2">Item Code</label>
        <b-input-group left="@" class="mb-2 mr-sm-2 mb-sm-0">
          <b-input id="inlineFormInputGroupUsername2" placeholder="Warehouse" v-model="warehouse" />
        </b-input-group>
        <b-button variant="primary" v-on:click="searchData">Search</b-button>
      </b-form>
    </b-row>

    <b-row v-if="(itemcode || warehouse) && pomsgs.length" class="row" >
      <b-col v-for="pomsg in pomsgs" :key="pomsg.poid" cols="3">
      <b-card>
        <p class="card-text">        
          <b-row> <b-col><b>Warehouse </b></b-col> <b-col> : {{pomsg.warehouse}}</b-col></b-row>
          <b-row> <b-col><b>Item</b></b-col> <b-col>: {{pomsg.item}}</b-col></b-row>
          <b-row> <b-col><b>Date</b> </b-col> <b-col>: {{pomsg.podate}}</b-col></b-row>
          <b-row> <b-col><b>Eq</b> </b-col> <b-col>: {{pomsg.pomsgeq}}</b-col></b-row>
          <b-row> <b-col><b>Message</b> </b-col> <b-col>: {{pomsg.pomsg}}</b-col></b-row>
        </p>
      </b-card>
      </b-col>
    </b-row>

    <b-row v-else-if="(itemcode || warehouse)">
      No message found matching your criteria !!
    </b-row>

  </b-container>
</template>

<script>
import DataService from '../services/data'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Search Messages',
      itemcode: '',
      warehouse: '',
      pomsgs: []
    }
  },
  methods: {
    searchData: function () {
      DataService.search({itemcode: this.itemcode, warehouse: this.warehouse}).then((msgResponse) => {
        this.pomsgs = msgResponse.data.pocmsgs
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
