/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
  name: 'align-left',
  icon: 'fa fa-align-left',
  i18n: 'left justify',
  handler(editor) {
    editor.execCommand('justifyLeft')
  }
}