/**
 * header
 * Created by hansin on 16/8/20.
 */
export default {
    name: 'keyword',
    icon: 'fa fa-meh-o',
    i18n: 'keyword',
    handler(editor) {
      // editor.execCommand('heading')
    },
    execType: 'insertHTML',
    itemWdith: '120px',
    selectList: [{
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
    },
    {
      label: '公司名称',
      value: '$Company Name$'
    }]
}
