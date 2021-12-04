function generate(width, height) {
	let result = new Array(height);
	for (let i = 0; i < height; i++) {
		result[i] = new Array(width);
		result[i].fill(0);
	}
	return result;
}

app = Vue.createApp({
	data() {
		return {
			board: generate(7, 6),
			first: true
		};
	},
	methods: {
		drop(j) {
			let i = this.board.length - 1;
			while (i >= 0 && this.board[i][j] != 0) {
				i--;
			}
			if (i >= 0) {
				this.board[i][j] = this.first ? 1 : 2;
				if (!this.board[this.board.length - 1].includes(0)) {
					for (let x = this.board.length - 1; x > 0; x--) {
						this.board[x] = this.board[x - 1];
					}
					this.board[0] = new Array(this.board[0].length);
					this.board[0].fill(0);
				}
				this.first = !this.first;
			}
		},
		reset(w, h) {
			this.board = generate(w, h);
			this.first = true;
		}
	}
}).mount("#app");
