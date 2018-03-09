import template from './dashboard.html'

export default {
    template,
    data(){
        return {url: null}
    },
    methods: {
        createLink(){
            if (!this.url) {
                return
            }
            if (!/^(http|https)?:\/\//.test(this.url)) {
              this.$parent.$emit('errmessage', '请输入以http://或https://开头的链接')
              return
            }
            this.$parent.execCommand('createLink', this.url)
            let stext = window.getSelection()
            let aTag = stext.anchorNode.parentNode
            this.$nextTick(() => {
                aTag.setAttribute('target', '_blank')
                this.$parent.$emit('change', this.$parent.$refs.content.innerHTML)
            })
            this.url = null
        }
    }
}
