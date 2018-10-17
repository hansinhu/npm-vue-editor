/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'text-underline',
    icon: 'fa fa-underline',
    i18n: 'underline',
    handler(editor) {
      editor.execCommand('underline')
    }
}
