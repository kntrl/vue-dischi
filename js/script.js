var app = new Vue({
	el: "#app",
	data: {
		filteredGenre: "all",
		albums: [],
		genres: "",
	},
	methods: {
		//FUNCTION getFilter(objArray,propAsCategory)
		// objArray -> an array of objects
		// propAsCategory -> which obj prop to be considered a category
		// returns : a string array where each string is a UNIQUE category
		getFilter: function getFilter(objArray, propAsCategory) {
			const categoriesArray = [];
			objArray.forEach((element) => {
				if (!categoriesArray.includes(element[propAsCategory])) {
					categoriesArray.push(element[propAsCategory]);
				}
			});
			return categoriesArray;
		},
		sortDesc : function() {
			this.albums.sort((a,b) => parseInt(b.year) -  parseInt(a.year));
		},
		sortAsc : function() {
			this.albums.sort((a,b) => parseInt(a.year) -  parseInt(b.year));
		},
	},
	mounted() {
		//requesting API the albums array
		axios
			.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then((response) => {
				const result = response.data;
				this.albums = [...result.response];
				console.log(this.albums);
				//creating genre array for select filter
				this.genres = this.getFilter(this.albums, "genre");
			});
	},
});
