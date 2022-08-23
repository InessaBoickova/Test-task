class Collapse {
    constructor() {
        this.btn = document.querySelector('.collapsible__button'),
        this.content = document.querySelector('.collapsible__content'),
        this.hidden = document.querySelector('.collapsible__action--hidden'),
        this.visible = document.querySelector('.collapsible__action--visible'),
        this.visible.style.display= 'none',
        this.content.style.opacity = 0,
        this.isOpen= false,
        this.btn.addEventListener('click', () => this.onClick());  
    }
    
    onClick() {
        if (this.isOpen) {
            this.close()
          } else{
            this.open()
          }
    }

    open() {
        this.isOpen = true;
        this.visible.style.display= 'block';
        this.hidden.style.display= 'none';
        
        this.animation = this.content.animate(
            [
                { opacity: 0 },
                { opacity: 0.5 },
                { opacity: 1 }
            ], {
            duration: 600,
            fill: "forwards"
          })
        
    }

    close() {
        this.isOpen = false;
        this.visible.style.display= 'none';
        this.hidden.style.display= 'block';

        this.animation = this.content.animate(
            [
                { opacity: 1 },
                { opacity: 0.5 },
                { opacity: 0 }
            ], {
            duration: 600,
            fill: "forwards"
          })
    }
}
new Collapse();

