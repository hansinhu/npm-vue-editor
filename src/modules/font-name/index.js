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
      label: '微软雅黑',
      value: 'Microsoft YaHei' // 2 对应 h2标签
    }, {
      label: '宋体',
      value: 'simsun, serif'
    }, {
      label: '新宋体',
      value: 'nsimsun, monospace'
    }, {
      label: '黑体',
      value: 'simhei, sans-serif'
    }, {
      label: 'Sans Serif',
      value: 'arial, helvetica, sans-serif'
    }, {
      label: 'Serif',
      value: 'times new roman, serif'
    }, {
      label: '固定宽度',
      value: 'monospace, monospace'
    }, {
      label: '宽字体',
      value: 'arial black, sans-serif'
    }, {
      label: '窄字体',
      value: 'arial narrow, sans-serif'
    }, {
      label: 'Comic Sans MS',
      value: 'comic sans ms, sans-serif'
    },{
      label: 'Garamond',
      value: 'garamond, serif'
    },{
      label: 'Georgia',
      value: 'georgia, serif'
    },{
      label: 'Tahoma',
      value: 'tahoma, sans-serif'
    },{
      label: 'Trebuchet MS',
      value: 'trebuchet ms, sans-serif'
    }, {
      label: 'Verdana',
      value: 'verdana, sans-serif'
    }]
}
