import axios from 'axios'

export default {
  search (q = { }) {
    for (var k in q) {
      if (!q[k]) { delete q[k] }
    }

    return axios.get('http://localhost:3000/pomsg/all', {
      params: q
    })
  }
}
