const path = {
	values: [{ x: 0 }, { x: window.innerWidth * 1.1 }],
};

const humanPath = {
	curviness: 1.5,
	autoRotate: true,
	values: [
		{ x: 0, y: 0 },
		{ x: 100, y: -350 },
		{ x: 200, y: -150 },
		{ x: 200, y: -200 },
		{ x: window.innerWidth * 1.1, y: window.innerHeight * 1.1 },
	],
};
const tween = new TimelineLite();

tween.add(
	TweenLite.to('.chair', 3, {
		bezier: path,
	}),
);

const tl = new TimelineLite();

tl.to(
	'.human',
	3,
	{
		bezier: humanPath,
	},
	'+=0.9',
);

const tl2 = new TimelineLite();

tl2.to(
	'.animation',
	3,
	{
		backgroundColor: 'red'
	},
	'-=.2',
);
