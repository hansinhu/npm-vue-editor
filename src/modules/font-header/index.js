/**
 * header
 * Created by hansin on 16/8/20.
 */
export default {
    name: 'font-header',
    icon: 'fa fa-header',
    i18n: 'heading',
    handler(editor) {
      // editor.execCommand('heading')
    },
    execType: 'formatBlock',
    selectList: [{
      label: '标题1',
      value: 'h2' // 2 对应 h2标签
    }, {
      label: '标题2',
      value: 'h3'
    }, {
      label: '标题3',
      value: 'h4'
    }, {
      label: '正文',
      value: 'p'
    }]
}
