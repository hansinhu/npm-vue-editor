import template from './dashboard.html'
import Command from '../../range/command'

export default {
    template,
    data(){
        return {
          dialogImageUrl: '',
          dialogVisible: false,
          isFirst: true,
          list: [],
          btnState: true
        }
    },
    methods: {
        change (file, fileList) {
          this.list = fileList
        },
        handleRemove (file, fileList) {
          this.list = fileList
        },
        handlePictureCardPreview (file) {
          this.dialogImageUrl = file.url
          this.dialogVisible = true
        },
        progress () {
          this.btnState = true
        },
        uploadSuccess (res, file, fileList) {
          this.$nextTick(() => {
            this.btnState = false
          })
          if (!res.code) {
            this.btnState = false
            file.url = res.data.urlWhole
            this.list = fileList
          }
        },
        // getIndex (item, arr) {
        //   return arr.indexOf(item)
        // },
        beforeUpload (file) {
          if (!(file.type === 'image/jpeg' || file.type === 'image/jpg' || file.type === 'image/gif' || file.type === 'image/png')) {
            this.$parent.$emit('errmessage', '上传文件只能是图片格式')
            return false
          }
          if (!(file.size / 1024 / 1024 < 2)) {
            this.$parent.$emit('errmessage', '上传图片大小不能超过 2MB!')
            return false
          }
        },
        confirmUpload () {
          let str = ''
          for (let i in this.list) {
            str += `<img src="${this.list[i].url}" alt=""/>`
          }
          if (this.list.length > 10) {
            this.$parent.$emit('errmessage', '单次上传最多十张图片')
            return
          } else {
            this.$parent.execCommand(Command.INSERT_HTML, str)
            this.$parent.$emit('sucmessage', '图片插入成功')
            this.list = []
            this.$refs.upload.clearFiles()
            this.btnState = true
          }
        },
        clear () {
          this.btnState = true
          this.list = []
          this.$refs.upload.clearFiles()
          return
        }
    }
}
