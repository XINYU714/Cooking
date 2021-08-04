const keyFrame = (self) => {
    self.anims.create({
        key: 'run',
        frames: self.anims.generateFrameNumbers('player', { start: 0, end: 1}),
        frameRate:4,
        repeat: -1
    })
}