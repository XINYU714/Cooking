const failGame= {
    key:'failGame',
 preload:function ()
{
    this.load.image('q1fail','src/q1fail.webp');
    this.load.image('restartbtn','src/restartbtn.webp');
    
},

 create: function ()
{
 
    q1fail=this.add.image(vw/2,vh/2,'q1fail');
    let restartbtn=this.add.image(vw/2,650,'restartbtn');
   restartbtn.setInteractive();
   restartbtn.on('pointerdown',() =>  this.scene.start('gameStart'))
},

 update: function()
{

}
}