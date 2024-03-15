enchant();
Player=Class.create(Sprite,{
	initialize: function(x,y){
		Sprite.call(this,32,32);
		this.image=game.assets['./img/player.png'];

});
window.onload=function(){
game=new Game(320,320);
game.fps=100;
game.preload('./img/player.png');
game.onload=function(){
	player=new sprite( , );
	player.image=game.assets['./img/player.png'];
	player.x=160;
	player.y=300;
	player.scaleX=1;
	player.scaleY=1;
	
	player.onenterframe = function(){
	if(game.input.right){
		this.x += 3;
		this.scaleX = 1;
	}
	if(game.input.down){
		this.y += 3;
		this.scaleX = -1;	
	}
	if(game.input.left){
		this.x -= 3;
		this.scaleX = -1;	
	}
	if(game.input.up){
		this.y -= 3;
		this.scaleX = 1;
	}
}
	
	game.rootScene.backgroundColor='\fff';
	game.rootScene.addChild(player);
}
game.start();
}