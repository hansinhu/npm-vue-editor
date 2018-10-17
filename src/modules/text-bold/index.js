/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'text-bold',
    icon: 'fa fa-bold',
    i18n: 'bold',
    handler(editor) {
      editor.execCommand('bold')
    }
}
