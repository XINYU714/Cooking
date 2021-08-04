const pass = {
    key:'pass',
 preload:function ()
{
    this.load.image('q1good','src/q1good.webp');
    this.load.image('restartbtn','src/restartbtn.webp');
},

 create: function ()
{
 
    q1good=this.add.image(vw/2,vh/2,'q1good');
    let restartbtn=this.add.image(vw/2,650,'restartbtn');
   restartbtn.setInteractive();
   restartbtn.on('pointerdown',() =>  this.scene.start('gameStart'))
},

 update: function()
{

}
}