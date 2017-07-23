/**
 * Created by Lorilla on 23/07/2017.
 */
export const STATE_VIEW = true;
export default{
    data: {
        dataFetch: [],
        editData: {}
    },
    fetch(urlFetch){
        axios.get(urlFetch).then(response => this.data.dataFetch = response.data)
    }
}
