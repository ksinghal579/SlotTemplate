import { GameVariables, GameConstants } from "../constants/gameConstants";
import MainScene from "../scenes/mainScene";

// namespace MyGame.WinPresentation {
export class WinAnimation {
    private _game: Phaser.Game;
    private _lineIDX: number;
    private _onFinCallback: Function;
    private _gameState: MainScene;
    public text: Phaser.GameObjects.Text;
    private _timer: Phaser.Time.TimerEvent;
    private tweenArray: any[] = [];
    private symAnims: any[] = [];

    // represnting one single phase of evaluating the line wins;
    constructor(gameState: MainScene) {
        this._gameState = gameState;
        this.text = this.createTextFeild();
    }
    private createTextFeild(): Phaser.GameObjects.Text {
        var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };
        return this._gameState.add.text(720, 820, '', style);
    }
    public start(onFinished: Function): void {
        this.tweenArray = [];
        this.symAnims = [];
        this._onFinCallback = onFinished;
        this._lineIDX = 0;
        this.animateLine();

    }
    private animateLine(): void {
        if (this._lineIDX < GameVariables.WINS.length) {
            this.setSymAnim();
            this.text.text = 'LINE : ' + (GameVariables.WINS[this._lineIDX].lineID + 1) + ' Symbol : ' + GameVariables.WINS[this._lineIDX].symID + ' WIN : ' + GameVariables.WINS[this._lineIDX].win;
            this._timer = this._gameState.time.addEvent({
                delay: 2000,
                callback: this.onLineAnimationFinished,
                callbackScope: this,
                loop: false
            });
        } else {
            this.text.text = '';
            this._onFinCallback();
        }
    }
    private onLineAnimationFinished(): void {
        this._timer.remove(false);
        this.stopAnim();
        this._lineIDX++;
        this.animateLine();
    }
    private setSymAnim(): void {
        for (let x = 0; x < GameConstants.WIN_LINE_DATA[GameVariables.WINS[this._lineIDX].lineID].length; x++) {
            let y = GameConstants.WIN_LINE_DATA[GameVariables.WINS[this._lineIDX].lineID][x];
            let sym = this._gameState.reelContainer.getReel(x).getSymatRow(y);
            let anim = this._gameState.add.sprite((GameConstants.REEL_X + ((sym.width + GameConstants.REEL_GAP) * x)), GameConstants.REEL_Y + (sym.height * y), "anim" + sym.name);
            this.symAnims.push(anim);
            this.tweenArray.push(this._gameState.tweens.add({
                targets: anim,
                alpha: 0,
                duration: 500,
                ease: 'Power2',
                yoyo: true,
                repeat: -1
            }));
        }
    }
    private stopAnim(): void {
        // this._gameState.tweens.destroy();
        for (let sym of this.tweenArray) {
            sym.stop();
        }
        for (let anim of this.symAnims) {
            anim.visible = false;
        }
    }
}
