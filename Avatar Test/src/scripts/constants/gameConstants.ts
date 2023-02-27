export class GameConstants {
    // symbol mapping
    public static readonly SYM_1 = 0;
    public static readonly SYM_2 = 1;
    public static readonly SYM_3 = 2;
    public static readonly SYM_4 = 3;
    public static readonly SYM_5 = 4;
    public static readonly SYM_6 = 5;
    public static readonly SYM_7 = 6;
    public static readonly SYM_8 = 7;
    public static readonly SYM_9 = 8;
    public static readonly SYM_10 = 9;
    public static readonly SYM_11 = 10;
    public static readonly SYM_12 = 11;
    public static readonly SYM_13 = 12;
    public static readonly SYM_14 = 13;
    public static readonly SYM_15 = 14;
    public static readonly SYM_16 = 15;
    public static readonly SYM_17 = 16;
    public static readonly SYM_18 = 17;
    public static readonly SYM_19 = 18;

    // length of symbols in each reel 
    public static readonly REEL_SYM_LENGTH = [15, 18, 21, 24, 27];
    public static readonly REEL_GAP = 15;
    public static readonly SYM_WIDTH = 200;
    public static readonly SYM_HEIGHT = 200;
    public static readonly REEL_X = 520;
    public static readonly REEL_Y = 300;

    public static readonly SPIN_BTN_X = 1700;
    public static readonly SPIN_BTN_Y = 550;


    // represents win line patterns in form of symbol row position; this won't be needed when winning data will be coming from backend
    public static readonly WIN_LINE_DATA = [[1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2]];


}
export class GameVariables {
    // calculating full house wins of random symbols and storing the data here
    public static WINS: { lineID: number, symID: number, win: number }[] = [];
}