/**
 * create material
 */

export default {
    name: 'material',
    icon: 'fa fa-file-image-o',
    i18n: 'material',
    handler(editor) {
      editor.$emit('showmaterial', true)
    }
}
