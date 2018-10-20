import template from './dashboard.html'
import './style.css'
/**
 * Created by peak on 2017/2/10.
 */
export default {
    template,
    data(){
        return {
            // foreColor,backColor，
            selectColor: '#409EFF',
            command: 'foreColor',
            colors: [ 
                '#ff4500',
                '#ff8c00',
                '#ffd700',
                '#90ee90',
                '#00ced1',
                '#1e90ff',
                '#c71585',
                '#000000'
            ]
        }
    },
    methods: {
        changeColor(color){
          this.$parent.execCommand(this.command, color)
        }
    }
}
