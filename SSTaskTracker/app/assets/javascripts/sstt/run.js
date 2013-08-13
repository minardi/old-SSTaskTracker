var sstt = {  
    demo: {},
    items-list: {}
};

$(function() {
    sstt.demo = new sstt.CatCollectionView({el: $("p")});
    sstt.items-list = new sstt.ItemCollectionView({el: $(".table-wrapper")}); 
});
