/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'align-center',
    icon: 'fa fa-align-center',
    i18n: 'center justify',
    handler(editor) {
      editor.execCommand('justifyCenter')
    }
}
