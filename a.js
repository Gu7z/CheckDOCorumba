var axios = require("axios")

axios.post("http://do.corumba.ms.gov.br//busca/busca/buscar/alixandre/0/?1=1&subtheme=corumba").then(
	data => console.log(data.data.hits.total)
)
