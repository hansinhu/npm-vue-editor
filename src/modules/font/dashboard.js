import template from './dashboard.html'
import Command from '../../range/command'
/**
 * Created by peak on 2017/2/10.
 */
export default {
    template,
    data(){
        return {
            nameList: [
                'Microsoft YaHei',
                '宋体, SimSun',
                '楷体, SimKai',
                '隶书, SimLi',
                '黑体, SimHei',
                'Microsoft JhengHei',
                'PingFang SC Regular',
                'Impact, chicago',
                'Times New Roman',
                'comic sans ms'
            ],
            lineHeightList: [
                '1.0', '1.2', '1.5', '1.8', '2.0', '2.5', '3.0'
            ],
            fontSizeList: [
                '12px', '14px', '16px', '18px', '20px', '22px', '24px'
            ]
        }
    },
    methods: {
        setFontName(e){
            this.$parent.execCommand('fontName', e.target.value)
        },
        setFontSize(e){
            this.$parent.execCommand('fontSize', e.target.value)
        },
        setHeading(e){
            this.$parent.execCommand('formatBlock', `h${e.target.value}`)
        },
        setLineHeight(e){
            this.$parent.execCommand(Command.LINE_HEIGHT, e.target.value)
        }
    },
    created(){
        const config = this.$options.module.config
        // font name
        if (!config) {
            return
        }
        if (Array.isArray(config.fontNames)) {
            this.nameList = config.fontNames
        }
    }
}
