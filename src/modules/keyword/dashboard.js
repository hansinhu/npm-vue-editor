import template from './dashboard.html'

export default {
    template,
    data(){
        return {
          keyWords: [
            {
              label: '昵称',
              value: '$Name$'
            },
            {
              label: 'First Name',
              value: '$First Name$'
            },
            {
              label: 'Last Name',
              value: '$Last Name$'
            }
          ]
        }
    },
    methods: {
        insertKeyWord: function (value) {
          this.$parent.execCommand('insertHTML', value)
        }
    }
}
