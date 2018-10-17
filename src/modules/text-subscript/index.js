/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'text-subscript',
    icon: 'fa fa-subscript',
    i18n: 'subscript',
    handler(editor) {
      editor.execCommand('subscript')
    }
}
