/**
 * Created by Lorilla on 23/07/2017.
 */
export default{
    data: {
        SELECTED: false,
        STATE_VIEW: true,
        READY: false,
        dataFetch: [],
        selectData: {}
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
    }
}
