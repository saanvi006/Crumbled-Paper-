




boxleftSprite = createSprite(boxPosition,boxY,20,100)
boxleftSprite.shapeColor = color(255,0,0);

boxrightSprite = createSprite(boxPosition,boxY,20,100)
boxrightSprite.shapeColor = color(255,0,0);

boxleftBody = Bodies.rectangle(boxPosition + 20, boxY , 20, 100, {isStatic:true});
World.add(world, boxLeftBody);

boxBase = createSprite(boxPosition + 100, boxY + 40, 200,20)
boxBase.shapeColor = color(255,0,0);

boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY + 45 -20, 200,20 {isStatic : true});
World.add(world, boxBottomBody); 