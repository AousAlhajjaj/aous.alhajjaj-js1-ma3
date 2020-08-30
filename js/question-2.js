const api_url = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating'
const container = document.querySelector(".results");

async function getData(){
  const response = await fetch(api_url);
		const results = await response.json();

		const myData = results.results;

		container.innerHTML = "";

		for (let i = 0; i < myData.length; i++) {
			if (i === 8) {
			}

			container.innerHTML += `<div class="result">
		  <p> Name: ${myData[i].name} </p>
			<p> Rating: ${myData[i].rating} </p>
			<p> Number of tags: ${myData[i].tags.length} </p>
			</div>`;
		}
	}


    getData();