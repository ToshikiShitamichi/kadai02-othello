// ゲームフロー
// 1.先攻後攻決め
    // 選択/ランダム
// 2.石を置ける箇所表示
    // ・違う色の石と隣接している
    // ・隣接している石の先に同じ色の石がある
// 3.石を置く
// 4.石をひっくり返す
// 5.終了判定
    // ・盤面がすべて埋まっている
    // ・全部同じ色になっている
// 6.パス判定
    // ・石を置ける箇所が存在しない
// 7.ターン変更

// 変数定義
let turn //現在のターン
let turn_msg //ターン表示テキスト
// 関数定義
function turn_change(){
    if (turn == "player"){
        turn = "cpu"
        turn_msg="CPUのターン"
    }else if(turn == "cpu"){
        turn = "player"
        turn_msg="あなたのターン"
    }else if(turn=="random"){
        const random_turn = Math.floor(Math.random()*2)
        if (random_turn == 0){
            turn = "player"
            turn_change()
        }else{
            turn ="cpu"
            turn_change()
        }
    }
    $("#turn").text(turn_msg);
}
// 1.先攻後攻決め
$("body").addClass("remove-scrolling");
$(".content").hide();
$(".start button").on("click", function () {
    $(".start").fadeOut(1000);
    $(".content").delay(1000).fadeIn(500);
    $("body").removeClass("remove-scrolling");

    turn = $(this).attr("id")
    turn_change();
});