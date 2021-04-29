Component({
  data: {

  },
  properties: {
    item: {
      type: Object,
      default: {}
    }
  },
  lifetimes: {
    attached: function(){
      // console.log(this.data.item)
    }
  },
  methods: {

  }
})