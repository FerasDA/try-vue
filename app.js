new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    hover: 'You loaded this page on ' + new Date().toLocaleString(),
    seen: true,
    hideshow: 'Hide',
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  },
  methods: {
    hideunhide: function() {
      this.seen = this.seen ? false : true;
      this.hideshow = this.seen ? 'Hide' : 'Show';
    },
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
