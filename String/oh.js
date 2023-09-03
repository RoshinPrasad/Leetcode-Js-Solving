class ForwardBackward {
    constructor() {
      this.backwardStack = [];
      this.forwardStack = [];
      this.currentPage = null;
    }
  
    visitPage(page) {
      this.forwardStack = [];
      if (this.currentPage) {
        this.backwardStack.push(this.currentPage);
      }
      this.currentPage = page;
    }
  
    goBack() {
      if (this.backwardStack.length > 0) {
        this.forwardStack.push(this.currentPage);
        this.currentPage = this.backwardStack.pop();
      }
    }
  
    goForward() {
      if (this.forwardStack.length > 0) {
        this.backwardStack.push(this.currentPage);
        this.currentPage = this.forwardStack.pop();
      }
    }
  
    getCurrentPage() {
      return this.currentPage;
    }
  }
  