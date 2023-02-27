import CanvasManager from "../CanvasManager";
import { ReelContainer } from "../reel/reelContainer";
import { Reel } from "../reel/reel";
import { GameConstants } from "../constants/gameConstants";
import { GameSymbol } from "../symbols/gameSymbol";
import { ReelData } from "../data/reelData";
import { WinAnimation } from "../winPresentations/winAnimations";

export default class MainScene extends Phaser.Scene {
  public startBtn: Phaser.GameObjects.Image;
  public reelContainer: ReelContainer;
  public winAnimation: WinAnimation;

  constructor() {
    super({ key: "MainScene" });
  }

  create() {
    const bg = this.add.image(0, 0, "basegamebg").setOrigin(0);
    this.reelContainer = this.createReelContainer();
    this.winAnimation = new WinAnimation(this);
    let symbols = this.createSymbols();
    this.reelContainer.setSymbols(symbols);
    this.reelContainer.setInitReels(ReelData.generateReelData(false));
    this.startBtn = this.createBtn();
    this.enableStartBtn();
  }

  private startReels() {
    this.disableStartBtn();
    let isWin = ReelData.getRandomInt(1) ? true : false;
    let reelData = ReelData.generateReelData(isWin);
    this.reelContainer.setReels(reelData);
    this.reelContainer.startReels(this.onReelSpinFinish.bind(this));
  }
  createBtn(): Phaser.GameObjects.Image {
    let btn = this.add.image(950, 999, "btn").setInteractive().setScale(0.3);
    return btn;
  }

  createSymbols(): GameSymbol[] {
    let _symbols: GameSymbol[] = [];
    for (let i = 0; i < 19; i++) {
      _symbols.push(new GameSymbol(this, (i + 1), "sym" + (i + 1)));
    }
    return _symbols;
  }
  private createReelContainer(): ReelContainer {
    let rc = new ReelContainer(this, GameConstants.REEL_X, GameConstants.REEL_Y, 5 * (GameConstants.SYM_WIDTH + GameConstants.REEL_GAP), 3 * GameConstants.SYM_HEIGHT);
    for (let i = 0; i < 5; i++) {
      rc.addReels(new Reel(this, i, i * (GameConstants.SYM_WIDTH + GameConstants.REEL_GAP), 0, 3, GameConstants.SYM_WIDTH, GameConstants.SYM_HEIGHT));
    }
    return rc;
  }
  private onReelSpinFinish(): void {
    this.startWinPresentation();
  }
  private startWinPresentation(): void {
    this.winAnimation.start(() => {
      this.enableStartBtn();
    });
  }
  private enableStartBtn(): void {
    this.startBtn.alpha = 1;
    this.startBtn.once("pointerup", this.startReels, this);
  }
  private disableStartBtn(): void {
    this.startBtn.alpha = 0.5;
  }
}
