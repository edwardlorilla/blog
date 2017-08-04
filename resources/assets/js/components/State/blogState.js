/**
 * Created by Lorilla on 23/07/2017.
 */
import LoadingComponent  from './../Loading/Placeholder.vue';

const ErrorComponent = {
    name: 'error-component',
    template: '<div>error!</div>'
}

export const defaultComponent = () => ({
    component: new Promise((resolve, reject) => {
        setTimeout(() => {
            require(['./../Blog/grid.vue'], resolve)
        }, 1000)
    }),
    loading: LoadingComponent,
    error: ErrorComponent,
    delay: 1
})

export default{
    
    data: {
        SELECTED: false,
        STATE_VIEW: true,
        READY: false,
        dataFetch: [],
        selectData: {},
    },
    selectedPost(index){
        var vm = this.data
        vm.SELECTED = true
        vm.selectData = index
        setTimeout(() => {
            vm.READY = true
        }, 600)
    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.dataFetch = response.data)
    },
    unSelected(){
        var vm = this.data;
        vm.SELECTED = false
        vm.selectData = {}
    },
    

}
