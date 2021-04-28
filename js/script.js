var app = new Vue({
	el: "#app",
	data: {
		albums: [],
	},
	method: {},
	mounted() {
		//requesting API the albums array
		axios
			.get("https://flynn.boolean.careers/exercises/api/array/music")
			.then((response) => {
				const result = response.data;
				this.albums = [...result.response];
				console.log(this.albums);
			});
	},
});
