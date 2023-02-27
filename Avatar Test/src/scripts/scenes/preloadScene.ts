export default class PreloadScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PreloadScene' })
  }

  preload() {
    this.preloadDesktop();
  }



  create() {
    this.scene.start('MainScene');
  }

  protected preloadDesktop(): void {
    this.load.image('sym1', 'assets/symbols/9.png');
    this.load.image('sym2', 'assets/symbols/10.png');
    this.load.image('sym3', 'assets/symbols/A.png');
    this.load.image('sym4', 'assets/symbols/BONUS.png');
    this.load.image('sym5', 'assets/symbols/H1.png');
    this.load.image('sym6', 'assets/symbols/H2.png');
    this.load.image('sym7', 'assets/symbols/H3.png');
    this.load.image('sym8', 'assets/symbols/H4.png');
    this.load.image('sym9', 'assets/symbols/H5.png');
    this.load.image('sym10', 'assets/symbols/H6.png');
    this.load.image('sym11', 'assets/symbols/J.png');
    this.load.image('sym12', 'assets/symbols/K.png');
    this.load.image('sym13', 'assets/symbols/M1.png');
    this.load.image('sym14', 'assets/symbols/M2.png');
    this.load.image('sym15', 'assets/symbols/M3.png');
    this.load.image('sym16', 'assets/symbols/M4.png');
    this.load.image('sym17', 'assets/symbols/M5.png');
    this.load.image('sym18', 'assets/symbols/M6.png');
    this.load.image('sym19', 'assets/symbols/Q.png');

    this.load.image('anim1', 'assets/symbols/9_connect.png');
    this.load.image('anim2', 'assets/symbols/10_connect.png');
    this.load.image('anim3', 'assets/symbols/A_connect.png');
    this.load.image('anim4', 'assets/symbols/BONUS.png');
    this.load.image('anim5', 'assets/symbols/H1_connect.png');
    this.load.image('anim6', 'assets/symbols/H2_connect.png');
    this.load.image('anim7', 'assets/symbols/H3_connect.png');
    this.load.image('anim8', 'assets/symbols/H4_connect.png');
    this.load.image('anim9', 'assets/symbols/H5_connect.png');
    this.load.image('anim10', 'assets/symbols/H6_connect.png');
    this.load.image('anim11', 'assets/symbols/J_connect.png');
    this.load.image('anim12', 'assets/symbols/K_connect.png');
    this.load.image('anim13', 'assets/symbols/M1_connect.png');
    this.load.image('anim14', 'assets/symbols/M2_connect.png');
    this.load.image('anim15', 'assets/symbols/M3_connect.png');
    this.load.image('anim16', 'assets/symbols/M4_connect.png');
    this.load.image('anim17', 'assets/symbols/M5_connect.png');
    this.load.image('anim18', 'assets/symbols/M6_connect.png');
    this.load.image('anim19', 'assets/symbols/Q_connect.png');

    this.load.image('btn', 'assets/btn/btn.png');
    this.load.image('basegamebg', 'assets/symbols/basegame_bg.jpg');

  }
}


