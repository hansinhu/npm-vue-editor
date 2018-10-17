import RangeHandler from './range/handler'
import './style.css'
import template from './editor.html'
/**
 * Created by peak on 2017/2/9.
 */
export default {
    template,
    props: {
        content: {
            type: String,
            required: true,
            default: ''
        },
        height: {
            type: Number,
            default: 300,
            validator(val){
                return val >= 100
            }
        },
        zIndex: {
            type: Number,
            default: 1000
        },
        autoHeight: {
            type: Boolean,
            default: true
        },
        imgList: {
            type: Array
        },
        showModuleName: {}
    },
    data(){
        return {
            activeModuleName: '',
            fullScreen: false,
            dashboard: null,
            rwidth: 0,
            rheight: 0,
            fwidth: 0,
            fheight: 0,
            showResize: false,
            target: null,
            rtop: 0,
            rleft: 0,
            scale: 1,
            // 图片比例
            saveScale: true,
            flag: 1,
            mwidth: 0,
            mheight: 0,
            rPosition: '',
            rX: 0,
            rY: 0,
            mX: 0,
            cScrollY: 0,
            cScrollX: 0
        }
    },
    watch: {
        content(val) {
            const content = this.$refs.content.innerHTML
            if (val !== content) {
                this.$refs.content.innerHTML = val
            }
        },
        fullScreen(val){
            const component = this
            if (val) {
                component.parentEl = component.$el.parentNode
                component.nextEl = component.$el.nextSibling
                document.body.appendChild(component.$el)
                return
            }
            if (component.nextEl) {
                component.parentEl.insertBefore(component.$el, component.nextEl)
                return
            }
            component.parentEl.appendChild(component.$el)
        },
        imgList(val){
            if (val.length!==0) {
                let str = ''
                for (let i in val) {
                  str += `<img class="test" src="${val[i].url}" alt=""/>`
                }
                if (val.length > 10) {
                  this.$emit('errmessage', '单次上传最多十张图片')
                  return
                } else {
                  this.execCommand('insertHTML', str)
                  this.$emit('change', this.$refs.content.innerHTML)
                  this.$nextTick(() => {
                    this.$emit('sucmessage', '图片插入成功')
                  })
                }
            }
        },
        fwidth(val){
            if (this.flag === 2 || !this.saveScale) {
                return
            }
            this.fheight = val / this.scale
        },
        mwidth (val) {
          this.mheight = val / this.scale
        }
    },
    computed: {
        outContentStyle(){
            const style = {}
            let paddingTopVal = 0
            let checkAry = ['dashboard-text', 'dashboard-font', 'dashboard-align', 'dashboard-list', 'dashboard-align', 'dashboard-link', 'dashboard-tabulation']
            if (this.dashboard === 'dashboard-color') {
              paddingTopVal = 110
            } else if (checkAry.includes(this.dashboard)) {
              paddingTopVal = 57
            }
            style['padding-top'] = `${paddingTopVal}px`
            if (this.fullScreen) {
                style.height = `${window.innerHeight - this.$refs.toolbar.clientHeight - 1}px`
                return style
            }
            if (!this.autoHeight) {
                style.height = `${this.height}px`
                return style
            }
            style['min-height'] = `${this.height}px`
            return style
        },
        contentStyle(){
            const style = {}
            if (!this.autoHeight) {
                style.height = `${this.height}px`
                return style
            }
            style['min-height'] = `${this.height}px`
            return style
        },
        tipWidth(){
            const str = this.scale * this.rheight
            return str
        },
        tipHeight(){
            const str = this.rwidth / this.scale
            return str
        }
    },
    methods: {
        toggleFullScreen(){
            this.fullScreen = !this.fullScreen
        },
        enableFullScreen(){
            this.fullScreen = true
        },
        exitFullScreen(){
            this.fullScreen = false
        },
        focus(){
            this.$refs.content.focus()
        },
        toggleDashboard(dashboard){
            this.dashboard = this.dashboard === dashboard ? null : dashboard
        },
        resizeImg(event, dashboard){
          this.activeModuleName = ''
          if (event.target.localName === 'img') {
              this.dashboard = false
              this.$nextTick(() => {
                this.target = event.target
                this.showResize = true
                let cpos = this.$refs.content.getBoundingClientRect()
                let tpos = event.target.getBoundingClientRect()
                this.rtop = tpos.top - cpos.top
                this.rleft = tpos.left - cpos.left
                this.rwidth = event.target.offsetWidth
                this.rheight = event.target.offsetHeight
                this.fwidth = event.target.offsetWidth
                this.fheight = event.target.offsetHeight
                this.scale = this.rwidth / this.rheight
                this.mwidth = event.target.offsetWidth
                this.cScrollY = this.$refs.content.scrollTop
                this.cScrollX = this.$refs.content.scrollLeft
              })
          } else {
            this.showResize = false
            this.toggleDashboard(dashboard)
          }
        },
        confirmResize(show){
            this.target.style.width = `${this.fwidth}px`
            this.target.style.height = `${this.fheight}px`
            if (show === true) {
              this.showResize = true
            } else {
              this.showResize = false
            }
            this.$emit('change', this.$refs.content.innerHTML)
        },
        contetnScroll () {
          this.cScrollY = this.$refs.content.scrollTop
          this.cScrollX = this.$refs.content.scrollLeft
        },
        removeImg () {
          this.showResize = false
          this.target.parentNode.removeChild(this.target)
        },
        resizeStart (e, position) {
          this.rPosition = position
          this.rX = e.clientX
          this.rY = e.clientY
          window.addEventListener('mousemove', this.resizeMove)
          window.addEventListener('mouseup', () => {
            if (this.rPosition) {
              this.fwidth = this.fwidth + this.mX
              this.fheight = this.fwidth / this.scale
              this.mwidth = this.fwidth
              this.confirmResize()
            }
            this.rPosition = ''
            this.mX = 0
            this.rX = 0
            this.rY = 0
            window.removeEventListener('mousemove', this.resizeMove)
          })
        },
        resizeMove (e) {
          if (this.rPosition === 'r-b' || this.rPosition === 'r-t') {
            this.mX = e.clientX - this.rX
          } else if (this.rPosition === 'l-b' || this.rPosition === 'l-t') {
            this.mX = this.rX - e.clientX
          }
          this.mwidth = this.fwidth + this.mX
          // let mY = this.rY - e.clientY
          // console.log(Math.abs(mX / mY))
        },
        resizeEnd (e) {
          window.removeEventListener('mousemove', this.resizeMove)
        },
        dropSave(){
            this.$emit('change', this.$refs.content.innerHTML)
            console.log('drop')
        },
        execCommand(command, arg){
            this.restoreSelection()
            if (this.range) {
                new RangeHandler(this.range).execCommand(command, arg)
            }
            this.toggleDashboard(null)
            this.$emit('change', this.$refs.content.innerHTML)
        },
        getCurrentRange(){
            return this.range
        },
        saveCurrentRange(){
            const selection = window.getSelection ? window.getSelection() : document.getSelection()
            if (!selection.rangeCount) {
                return
            }
            const content = this.$refs.content
            for (let i = 0; i < selection.rangeCount; i++) {
                const range = selection.getRangeAt(0)
                let start = range.startContainer
                let end = range.endContainer
                // for IE11 : node.contains(textNode) always return false
                start = start.nodeType === Node.TEXT_NODE ? start.parentNode : start
                end = end.nodeType === Node.TEXT_NODE ? end.parentNode : end
                if (content.contains(start) && content.contains(end)) {
                    this.range = range
                    break
                }
            }
        },
        restoreSelection(){
            const selection = window.getSelection ? window.getSelection() : document.getSelection()
            selection.removeAllRanges()
            if (this.range) {
                selection.addRange(this.range)
            } else {
                const content = this.$refs.content
                const div = document.createElement('div')
                const range = document.createRange()
                content.appendChild(div)
                range.setStart(div, 0)
                range.setEnd(div, 0)
                selection.addRange(range)
                this.range = range
            }
        },
        activeModule(module){
            this.showResize = false
            this.restoreSelection()
            this.activeModuleName = this.activeModuleName === module.name ? '' : module.name
            if (typeof module.handler === 'function') {
                module.handler(this)
                return
            } else {
                this.toggleDashboard(`dashboard-${module.name}`)
                return
            }
        },
        moduleItemSelect (module, value) {
          this.execCommand(module.execType, value)
          this.activeModuleName = ''
        }
    },
    created(){
        this.modules.forEach((module) => {
            if (typeof module.init === 'function') {
                module.init(this)
            }
        })
    },
    mounted(){
      window.addEventListener('keyup', (e) => {
        if (e.keyCode === 37 || e.keyCode === 39) {
          this.showResize = false
        }
      })
      const content = this.$refs.content
      content.innerHTML = this.content
      content.addEventListener('mouseup', this.saveCurrentRange, false)
      content.addEventListener('keyup', (e) => {
          if (e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 8) {
            this.showResize = false
          }
          this.$emit('change', content.innerHTML)
          this.saveCurrentRange()
      }, false)
      content.addEventListener('mouseout', (e) => {
          if (e.target === content) {
              this.saveCurrentRange()
          }
      }, false)
      this.touchHandler = (e) => {
          if (content.contains(e.target)) {
              this.saveCurrentRange()
          }
      }

      window.addEventListener('touchend', this.touchHandler, false)
      window.addEventListener('click', () => {
        this.activeModuleName = ''
        this.dashboard = null
      }, false)
    },
    updated(){
        // update dashboard style
        if (this.$refs.dashboard){
            this.$refs.dashboard.style.maxHeight = `${this.$refs.content.clientHeight}px`
        }
    },
    beforeDestroy(){
        window.removeEventListener('touchend', this.touchHandler)
        this.modules.forEach((module) => {
            if (typeof module.destroyed === 'function') {
                module.destroyed(this)
            }
        })
    }
}
