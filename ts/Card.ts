class Card{

    public readonly score: number
    public readonly name:string
    public readonly roll:number
    public readonly appieOne:number
    public readonly appieTwo:number
    public readonly appieThree:number
    public readonly dessert:number
    
    public constructor ( name:string,score: number=0,roll:number=0,appieOne:number = 0,appieTwo:number = 0,appieThree:number = 0,dessert:number=0){
        this.name = name;
        this.score = score;
        this.roll = roll;
        this.appieOne = appieOne;
        this.appieTwo = appieTwo;
        this.appieThree = appieThree;
        this.dessert = dessert;
    }

    public get imageName (): string {
        let s: string, r: string;

        if (this.rank === 1 || this.rank > 10) {
            r = this.rankName.charAt(0);
        } else {
            r = this.rank + '';
        }

        s = this.suitName.charAt(0);

        return r + s + '.svg';
    }
}

