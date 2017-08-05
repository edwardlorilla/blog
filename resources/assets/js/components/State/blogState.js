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
        nextPost: null,
        previousPost: null
    },
    selectedPost(index){
        var vm = this.data
        var id = index.id;
        var next = ((id) + 1) ? ((id) + 1) : null
        var previous = ((id) - 1) ? ((id) - 1) : null
        vm.SELECTED = true
        vm.selectData = index
        vm.nextPost = next
        vm.previousPost = previous
        setTimeout(() => {
            vm.READY = true
        }, 600)
    },
    nextPost(){
        var vm = this.data;
        var found = _.find(vm.dataFetch, ['id', vm.nextPost])
        if (!(_.isEmpty(found))) {
            var id = found.id ? found.id : null;
            var next = ((id) + 1) ? ((id) + 1) : null
            var previous = ((id) - 1) ? ((id) - 1) : null
            vm.selectData = found
            vm.nextPost = next
            vm.previousPost = previous
            setTimeout(() => {
                vm.READY = true
            }, 600)
        }
    },
    previousPost(){
        var vm = this.data;
        var found = _.find(vm.dataFetch, ['id', vm.previousPost])
        if (!(_.isEmpty(found))) {
            var id = found.id;
            var next = ((id) + 1) ? ((id) + 1) : null
            var previous = ((id) - 1) ? ((id) - 1) : null
            vm.selectData = found
            vm.nextPost = next
            vm.previousPost = previous
            setTimeout(() => {
                vm.READY = true
            }, 600)
        }
    },
    fetch(urlFetch)
    {
        axios.get(urlFetch).then(response => this.data.dataFetch = response.data)
    }
    ,
    unSelected()
    {
        var vm = this.data;
        vm.SELECTED = false
        vm.selectData = {}
    }
    ,


}
