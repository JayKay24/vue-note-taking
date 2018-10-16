const inputComponent = {
  template: `
    <input :placeholder="placeholder" 
      v-model="input" @keyup.enter="monitorEnterKey" class="input is-small" type="text" />
    `,
  props: ['placeholder'],
  data() {
    return { input: '' }
  },
  methods: {
    monitorEnterKey() {
      this.$emit('add-note', {
        note: this.input,
        timeStamp: new Date().toLocaleString()
      })
      this.input = ''
    }
  }
}

new Vue({
  el: '#app',
  components: {
    'input-component': inputComponent
  },
  data: {
    notes: [],
    timestamps: [],
    placeholder: 'Enter a note'
  }
})
