class Skeleton {
    constructor({ width, height }) {
        this.width = width;
        this.height = height;

        this.skeletonContainer = document.createElement('div');
        this.skeletonContainer.className = 'skeleton-header';
        this.skeletonContainer.style.width = this.width;
        this.skeletonContainer.style.height = this.height;
    }


    render(){
        return this.skeletonContainer;
    }
}

export default Skeleton;