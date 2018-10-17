/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'list-ul',
    icon: 'fa fa-list-ul',
    i18n: 'unordered list',
    handler(editor) {
      editor.execCommand('insertUnorderedList')
    }
}
