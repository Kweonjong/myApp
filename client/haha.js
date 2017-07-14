

Template.haha.events({
    'click [name=submit]' : function(e, tmpl){
        var title = $('[name=title]').val();
        var num = $('[name=num]').val();
        var count = $('[name=count]').val();
        var content = $('[name=content]').val();

        var obj ={
            '제목': title,
            '글번호': num,
            '조회수': count,
            '내용': content
        }
        //
        if($('[name=hidden_id]').val().length <= 0){

            //                             1.입력이라면
            console.log(obj);
            CollectionBoard.insert(obj);
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');
        }
        else{
            // 2.수정이라면
            CollectionBoard.update($('[name=hidden_id]').val(), {$set: obj});
            $('[name=num]').val('');
            $('[name=title]').val('');
            $('[name=count]').val('');
            $('[name=content]').val('');
            $('[name=hidden_id]').val('');

        }


    },
    'click [name=deleteBoard]': function(element,tmpl){
        //        var id = console.log(this._id);
        var id= $(element.target).attr('id');
        CollectionBoard.remove({_id:id});
        //        console.log($(element.target).attr('id'));
        console.log('삭제버튼이 눌렀습니다.');
    },
    'click [name=updateBoard]': function(e, tmpl){
        console.log('수정 버튼이 눌렸습니다.');
        //        1. 입력모달을 띄운다
        $('#modal-div').modal('show');
        //        2. 모달의 인풋창에 기본 데이터를 채워넣는다
//        console.log(this._id);
//        console.log(this.글번호);
//        console.log(this.조회수);
//        console.log(this.제목);
//        console.log(this.내용);
        $('[name=hidden_id]').val(this._id);
        $('[name=title]').val(this.제목);
        $('[name=num]').val(this.글번호);
        $('[name=count]').val(this.조회수);
        $('[name=content]').val(this.내용);

    }
});

Template.haha.helpers({
    list:function(){
        var result = CollectionBoard.find().fetch()
        console.log(result)

        //        var result = [
        //            {
        //                '글번호': 1,
        //                '제목': "제목1",
        //                '조회수': 15
        //            },
        //            {
        //                '글번호': 2,
        //                '제목': "제목2",
        //                '조회수': 423
        //            },
        //            {
        //                '글번호': 3,
        //                '제목': "제목3",
        //                '조회수': 244
        //            },
        //            {
        //                '글번호': 4,
        //                '제목': "제목4",
        //                '조회수': 15
        //            },
        //            {
        //                '글번호': 5,
        //                '제목': "제목5",
        //                '조회수': 25
        //            },
        //            {
        //                '글번호': 6,
        //                '제목': "제목6",
        //                '조회수': 6
        //            }
        //        ]
        return result
    }
});