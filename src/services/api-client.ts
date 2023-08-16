import axios from "axios";

export default axios.create({
	baseURL: "https://api.rawg.io/api",
	params: {
		key: "bb5c45af8f974eee885dc197e6caca3f",
	},
});
