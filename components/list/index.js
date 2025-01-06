class List {
    constructor() {
        this.listItem = ['item 1', 'item 2', 'item 3', 'item 4'];
    }

    render(){
        const ulList = document.createElement('ul');
        this.listItem.map(item => {
            const liItem = document.createElement('li');
            liItem.innerHTML = item;
            ulList.appendChild(liItem);
        });
        return ulList;
    }
}

export default List;