function SideMenu(options) {
    this.init(options);
    this.initEvent();

// 사이드메뉴가 시작될때 정의를 낼때 init 메소드로 뺀다. 그럼 관리가 잘되기때문이지!

// this.속성=1;
// this.속성=2;
// this.메소드=function(){};

}

SideMenu.prototype = {
    init: function (opt) {
        this.$sideMenu = $(opt.selector.menu);
        this.$showBtn = $(opt.selector.showBtn);
        this.$hideBtn = this.$sideMenu.find('.close_btn');
        this.$list = this.$sideMenu.find('.main_menu > li > a');
        this.$shadow = $(opt.selector.shadow);
        this.$subMenu = this.$sideMenu.find('.sub_menu');
        this.duration = opt.duration || 400;
    },

    initEvent: function () {
        this.clickHandler();
    },

    clickHandler: function () {
        var _this = this;

        this.$showBtn.on('click', function () {
            _this.showMenu();
        });

        this.$hideBtn.on('click', function () {
            _this.hideMenu();
        });

        this.$list.on('click', function () {
            _this.toggleList($(this));
        });
    },

    showMenu: function () {
        this.$sideMenu.stop().animate({
            left: 0
        }, this.duration);
        this.$shadow.stop().fadeIn(this.duration);
    },

    hideMenu: function () {
        this.$sideMenu.stop().animate({
            left: -500
        }, this.duration);
        this.$shadow.stop().fadeOut(this.duration);
    },

    toggleList: function ($this) {
        this.$subMenu.not($this.siblings('.sub_menu')).stop().slideUp(this.duration);
        $this.siblings('.sub_menu').stop().slideToggle(this.duration);
    }

};



//생성자
//함수 = 재활용


//SideMenu.prototype.메소드1=funtion(){};
//SideMenu.prototype.메소드2=funtion(){};
//SideMenu.prototype.메소드3=funtion(){};
//SideMenu.prototype.메소드4=funtion(){};

// => SideMenu.prototype = {
//     메소드1: function (){},
//     메소드2: function (){},
//     메소드3: function (){},
//     메소드4: function (){};

