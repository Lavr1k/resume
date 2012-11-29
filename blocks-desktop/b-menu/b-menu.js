BEM.DOM.decl('b-menu',
{
    onSetMod: {
        js: function  () {
            this.item_general = document.getElementById('general');
            this.item_development = document.getElementById('development');

            this.opRate = 0;

            this.item_general.addEventListener('mouseover', this.showList, false);
            this.item_development.addEventListener('mouseover', this.showList, false);

            this.item_general.addEventListener('mouseout', this.hideList, false);
            this.item_development.addEventListener('mouseout', this.hideList, false);
        }
    },
    showList: function (){

        var that = this;
        this.lastChild.style.opacity == 0 && (opRate = 0);
        this.lastChild.style.display = 'block';

        this.idIntervalH && clearInterval(this.idIntervalH);

        this.idIntervalS = setInterval(function () {
            if (opRate == 10){
                clearInterval(that.idIntervalS);
                that.lastChild.style.opacity = 1;
            } else {
                that.lastChild.style.opacity = (opRate+1) / 10;
                opRate +=1 ;
                console.log('iteration step'+opRate);
            }
        }, 15);
    },
    hideList: function (e) {
        if (e.target !== this.domElem) {
            var opRate;
            var that = this;
            this.lastChild.style.opacity == 1 && (opRate = 10);

            this.idIntervalS && clearInterval(this.idIntervalS);

            this.idIntervalH = setInterval(function () {
                if (opRate == 0){
                    clearInterval(that.idIntervalH);
                    that.lastChild.style.opacity = 0;
                    that.lastChild.style.display = 'none';
                    opRate = 0;
                } else {
                    that.lastChild.style.opacity = (opRate) / 10;
                    opRate -=1 ;
                    console.log('iteration step'+opRate);
                }
            }, 15);
        }
    }

});