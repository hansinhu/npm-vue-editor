/**
 * hr
 * Created by peak on 16/8/20.
 */
export default {
    name: 'text-strikethrough',
    icon: 'fa fa-strikethrough',
    i18n: 'strike through',
    handler(editor) {
      editor.execCommand('strikeThrough')
    }
}
