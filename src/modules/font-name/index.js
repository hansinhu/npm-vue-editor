/**
 * header
 * Created by hansin on 16/8/20.
 */
export default {
    name: 'font-name',
    icon: 'fa fa-font',
    i18n: 'heading',
    handler(editor) {
      // editor.execCommand('heading')
    },
    execType: 'fontName',
    itemWdith: '160px',
    selectList: [{
      label: 'Microsoft YaHei',
      value: 'Microsoft YaHei' // 2 对应 h2标签
    }, {
      label: '宋体, SimSun',
      value: '宋体, SimSun'
    }, {
      label: '楷体, SimKai',
      value: '楷体, SimKai'
    }, {
      label: '黑体, SimHei',
      value: '黑体, SimHei'
    }, {
      label: 'Sailec Light',
      value: 'sailec light'
    }, {
      label: 'Roboto Slab',
      value: 'roboto slab'
    }, {
      label: 'Microsoft JhengHei',
      value: 'Microsoft JhengHei'
    }, {
      label: 'PingFang SC Regular',
      value: 'PingFang SC Regular'
    }, {
      label: 'Impact, chicago',
      value: 'Impact, chicago'
    }, {
      label: 'Times New Roman',
      value: 'Times New Roman'
    }, {
      label: 'comic sans ms',
      value: 'comic sans ms'
    }]
}
