class SushigoDeck{
    public cards: Card[];

    public constructor(){
        this.cards=[];
        
        this.Tempura();
        this.Nigiri();
        this.Sashimi();
        this.Dumpling();
        this.Pudding();
        this.Wasabi();
        this.Chopstick();
        this.Maki();
    }

    public shuffle (): void{
        var temp:number = 0;
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = this.cards[currentIndex];
        this.cards[currentIndex] = this.cards[randomIndex];
        this.cards[randomIndex] = temporaryValue;
        if(this.cards[currentIndex].name == "Egg")
        {
            temp = currentIndex;
        }
        }
        this.cards[temp]= this.cards[currentIndex];
    }

    public draw (): Card{
        return <Card> this.cards.shift();
    }

    private Nigiri(): void{
        for (let x = 0; x<21;x++){
            if(x<6)
            {
                this.cards.push(new Card("Egg",1));
            }
            else if(x>5&&x<16)
            {
                this.cards.push(new Card("Salmon",2));
            }
            else{
                this.cards.push(new Card("Squid",3));
            }
        }
    }

    private Tempura():void{
        var i :number =1;
        var j :number =0;
        var k :number =0;
        for (let x = 0;x<14;x++)
        {
            this.cards.push(new Card("Tempura",0,0,i,j,k))
        }
    }
    private Sashimi():void{
        var i :number =0;
        var j :number =1;
        var k :number =0;
        for (let x = 0;x<14;x++)
        {
            this.cards.push(new Card("Sashimi",0,0,i,j,k))
        }
    }

    private Dumpling():void{
        var i :number =0;
        var j :number =0;
        var k :number =1;
        for (let x = 0;x<14;x++)
        {
            this.cards.push(new Card("Dumpling",0,0,i,j,k))
        }
    }

    private Pudding():void{
        for (let x = 0;x<10;x++)
        {
            this.cards.push(new Card("Pudding",0,0,0,0,0,1))
        }
    }

    private Wasabi():void{
        for (let x =0;x<6;x++)
        {
            this.cards.push(new Card("Wasabi"))
        }
    }

    private Chopstick():void{
        for (let x =0;x<4;x++)
        {
            this.cards.push(new Card("Chopstick"))
        }
    }

    private Maki():void{
        for (let x = 0; x<26;x++){
            if(x<6)
            {
                this.cards.push(new Card("Maki",0,1));
            }
            else if(x>5&&x<18)
            {
                this.cards.push(new Card("Maki",0,2));
            }
            else{
                this.cards.push(new Card("Maki",0,3));
            }
        }
    }
}
