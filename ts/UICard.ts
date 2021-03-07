class UICard {

    public readonly card: Card;
    public readonly element: Element = document.createElement('div');
    public readonly img: HTMLImageElement = document.createElement('img');
    public constructor(card:Card){
        this.card = card;
        this.element.classList.add("card");
        this.element.appendChild(this.img);
        this.img.src = 'img/' + this.card.imageName;

    }
}