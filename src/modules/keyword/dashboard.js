import template from './dashboard.html'

export default {
    template,
    data(){
        return {
          keyWords: [ '$First Name$', '$Last Name$' ]
        }
    },
    methods: {
        insertKeyWord: function (item) {
          //  $parent is editor component instance
          this.$parent.execCommand('insertHTML', item)
        }
    }
}
