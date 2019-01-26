import axios from 'axios'

export default {
  search (q = { }) {
    return axios.get('http://pocmsgapi:3000/pomsg/all?item=' + q.itemcode + '&warehouse=' + q.warehouse)
  }
}
