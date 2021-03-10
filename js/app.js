var Card = /** @class */ (function () {
    function Card(name, score, roll, appieOne, appieTwo, appieThree, dessert) {
        if (score === void 0) { score = 0; }
        if (roll === void 0) { roll = 0; }
        if (appieOne === void 0) { appieOne = 0; }
        if (appieTwo === void 0) { appieTwo = 0; }
        if (appieThree === void 0) { appieThree = 0; }
        if (dessert === void 0) { dessert = 0; }
        this.name = name;
        this.score = score;
        this.roll = roll;
        this.appieOne = appieOne;
        this.appieTwo = appieTwo;
        this.appieThree = appieThree;
        this.dessert = dessert;
    }
    Object.defineProperty(Card.prototype, "imageName", {
        get: function () {
            var s = this.name;
            return s + '.png';
        },
        enumerable: false,
        configurable: true
    });
    return Card;
}());
var Player = /** @class */ (function () {
    function Player() {
        this.PlayerTempura = 0;
        this.PlayerNigiri = 0;
        this.PlayerSashimi = 0;
        this.PlayerDumpling = 0;
        this.PlayerPudding = 0;
        this.PlayerWasabi = 0;
        this.PlayerChopstick = 0;
        this.PlayerMaki = 0;
        // this.PlayerTempura();
        // this.PlayerNigiri();
        // this.PlayerSashimi();
        // this.PlayerDumpling();
        // this.PlayerPudding();
        // this.PlayerWasabi();
        // this.PlayerChopstick();
        // this.PlayerMaki();
    }
    return Player;
}());
var SushigoDeck = /** @class */ (function () {
    function SushigoDeck() {
        this.cards = [];
        this.Tempura();
        this.Nigiri();
        this.Sashimi();
        this.Dumpling();
        this.Pudding();
        this.Wasabi();
        this.Chopstick();
        this.Maki();
    }
    SushigoDeck.prototype.shuffle = function () {
        var temp = 0;
        var currentIndex = this.cards.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = this.cards[currentIndex];
            this.cards[currentIndex] = this.cards[randomIndex];
            this.cards[randomIndex] = temporaryValue;
            if (this.cards[currentIndex].name == "EggNigiri") {
                temp = currentIndex;
            }
        }
        this.cards[temp] = this.cards[currentIndex];
    };
    SushigoDeck.prototype.draw = function () {
        return this.cards.shift();
    };
    SushigoDeck.prototype.Nigiri = function () {
        for (var x_1 = 0; x_1 < 21; x_1++) {
            if (x_1 < 6) {
                this.cards.push(new Card("EggNigiri", 1));
            }
            else if (x_1 > 5 && x_1 < 16) {
                this.cards.push(new Card("SalmonNigiri", 2));
            }
            else {
                this.cards.push(new Card("SquidNigiri", 3));
            }
        }
    };
    SushigoDeck.prototype.Tempura = function () {
        var i = 1;
        var j = 0;
        var k = 0;
        for (var x_2 = 0; x_2 < 14; x_2++) {
            this.cards.push(new Card("Tempura", 0, 0, i, j, k));
        }
    };
    SushigoDeck.prototype.Sashimi = function () {
        var i = 0;
        var j = 1;
        var k = 0;
        for (var x_3 = 0; x_3 < 14; x_3++) {
            this.cards.push(new Card("Sashimi", 0, 0, i, j, k));
        }
    };
    SushigoDeck.prototype.Dumpling = function () {
        var i = 0;
        var j = 0;
        var k = 1;
        for (var x_4 = 0; x_4 < 14; x_4++) {
            this.cards.push(new Card("Dumpling", 0, 0, i, j, k));
        }
    };
    SushigoDeck.prototype.Pudding = function () {
        for (var x_5 = 0; x_5 < 10; x_5++) {
            this.cards.push(new Card("Pudding", 0, 0, 0, 0, 0, 1));
        }
    };
    SushigoDeck.prototype.Wasabi = function () {
        for (var x_6 = 0; x_6 < 6; x_6++) {
            this.cards.push(new Card("Wasabi"));
        }
    };
    SushigoDeck.prototype.Chopstick = function () {
        for (var x_7 = 0; x_7 < 4; x_7++) {
            this.cards.push(new Card("Chopstick"));
        }
    };
    SushigoDeck.prototype.Maki = function () {
        for (var x_8 = 0; x_8 < 26; x_8++) {
            if (x_8 < 6) {
                this.cards.push(new Card("MakiOne", 0, 1));
            }
            else if (x_8 > 5 && x_8 < 18) {
                this.cards.push(new Card("MakiTwo", 0, 2));
            }
            else {
                this.cards.push(new Card("MakiThree", 0, 3));
            }
        }
    };
    return SushigoDeck;
}());
var UICard = /** @class */ (function () {
    function UICard(card) {
        this.element = document.createElement('div');
        this.img = document.createElement('img');
        this.card = card;
        this.element.classList.add("card");
        this.element.appendChild(this.img);
        this.img.src = 'img/' + this.card.imageName;
    }
    return UICard;
}());
var x = new SushigoDeck();
var y = new SushigoDeck();
x.shuffle();
//console.log(x.cards);
var p = new Player();
console.log(p);
console.log(x.cards[0].imageName);
//# sourceMappingURL=app.js.map