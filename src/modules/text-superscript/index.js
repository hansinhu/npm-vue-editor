/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'text-superscript',
    icon: 'fa fa-superscript',
    i18n: 'superscript',
    handler(editor) {
      editor.execCommand('superscript')
    }
}
