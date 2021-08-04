const gameStart = {
    key:'gameStart',
 preload:function ()
{
    this.load.image('mainBg','src/main_bg.webp');
    this.load.image('mainBtn','src/main_btn.webp');
},

 create: function ()
{
    this.mainBg=this.add.tileSprite(vw/2,vh/2,vw,vh,'mainBg');
    let mainBtn = this.add.image(vw / 2, vh / 2, 'mainBtn');
        
        mainBtn.setInteractive();
        mainBtn.on('pointerdown', () => this.scene.start('gamePlay'))  
},
 update: function()
{
}
}