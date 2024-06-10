import { LightningElement, track } from 'lwc';

export default class Todo extends LightningElement {
    @track input = '';
    inputBox;
    button;
    ol;
    items = [];
    nextId = 0;

    // renderedCallback(){
    //     this.inputBox = this.template.querySelector("lightning-input");
    //     this.button = this.template.querySelector("lightning-button");
    //     this.ol = this.template.querySelector('ol');
    // }

    handlechange(event){
        this.input = event.target.value;
        console.log(this.input);
    }

    handleClick(){
        if(this.input.length > 0){
            this.items = [...this.items, {id: this.nextId++, value: this.input}];//this.items.push(this.input);
            this.input = '';
            console.log(this.items);
        }
    }

    handleRemove(event){
         const indexToRemove = event.target.closest('li').getAttribute('key');
        this.items = this.items.filter(item => item.index != indexToRemove);

    }
}