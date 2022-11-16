const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    confirmInput() {
      this.confirmedName = this.name
    },
    submitForm() {
      alert('Submitted!')
    },
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      if(this.counter <= 0) {
        this.counter = 0
      } else {
        this.counter -= num
      }
    },
    setName(event) {
      this.name = event.target.value
    }
  },
});

app.mount('#events');
