/**
 * Created by Lorilla on 23/07/2017.
 */
export default{
    data: {
        STATE_VIEW: true,
        dataFetch: [],
        editData: {}
    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.dataFetch = response.data)
    }
}
