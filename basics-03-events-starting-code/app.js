const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastName: '',
      // fullname: ''
    };
  },
  watch: {
    counter(value) {
      if(value > 50) {
        setTimeout(() => {
          this.counter = 0
        }, 2000)
      }
    }
    // name(value) {
    //   if(value === '') {
    //     this.fullname = ''
    //   }
    //   this.fullname = value + ' ' + this.lastName
    // },
    // lastName(value) {
    //   if(value === '') {
    //     this.fullname = ''
    //   }
    //   this.fullname = this.name + ' ' + value
    // }
  },
  computed: {
    fullname() {
      console.log('Running again...');
      if (this.name === '' || this.lastName === '') {
        return '';
      }
      return this.name + ' ' + this.lastName
    },
  },
  methods: {
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
    },
    resetInput() {
      this.name = ''
      this.lastName = ''
    }
  },
});

app.mount('#events');
