/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'list-ol',
    icon: 'fa fa-list-ol',
    i18n: 'ordered list',
    handler(editor) {
      editor.execCommand('insertOrderedList')
    }
}
