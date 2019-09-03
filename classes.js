
//edit

class shape {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	move() {}
}

class rectangle extends shape {
	constructor(x, y, height, widht) {
		super(x, y);
		this.width = width;
		this.height = height;
	}
}
