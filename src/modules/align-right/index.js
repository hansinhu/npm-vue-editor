/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
  name: 'align-right',
  icon: 'fa fa-align-right',
  i18n: 'right justify',
  handler(editor) {
    editor.execCommand('justifyRight')
  }
}