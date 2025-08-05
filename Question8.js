function RightAngledTriangleCalculator(adjacent, opposite){

    const hypotenues = Math.sqrt((Math.pow(adjacent, 2) + Math.pow(opposite, 2)));

    console.log(hypotenues);
}

RightAngledTriangleCalculator(10, 10);