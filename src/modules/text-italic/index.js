/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'text-italic',
    icon: 'fa fa-italic',
    i18n: 'italic',
    handler(editor) {
      editor.execCommand('italic')
    }
}
