Template.detail.helpers({
    data: function(){

        var board = CollectionBoard.findOne({_id:Router.current().params._id});
        console.log(board.글번호);
        console.log(board.조회수);
        console.log(board.제목);
        return board
    }
});