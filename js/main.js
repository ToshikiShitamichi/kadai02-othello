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
// 6.ターン変更
// 7.パス判定
// ・石を置ける箇所が存在しない

// 変数定義
let turn //現在のターン
let turn_msg //ターン表示テキスト
let player_color //プレイヤーの石

// 関数定義
function turn_change() { //ターン交代
    if (turn == "player") {
        turn = "cpu"
        turn_msg = "CPUのターン"
        if (player_color == "black") {
            $("#turn").css("color", "white");
        } else {
            $("#turn").css("color", "black");
        }
    } else if (turn == "cpu") {
        turn = "player"
        turn_msg = "あなたのターン"
        if (player_color == "black") {
            $("#turn").css("color", "black");
        } else {
            $("#turn").css("color", "white");
        }
    } else if (turn == "random") {
        const random_turn = Math.floor(Math.random() * 2)
        if (random_turn == 0) {
            turn = "player"
            player_color = "white"
            turn_change()
        } else {
            turn = "cpu"
            player_color = "black"
            turn_change()
        }
    }
    $("#turn").text(turn_msg);
}

// 1.先攻後攻決め
// $("body").addClass("remove-scrolling");
// $(".content").hide();
// $(".start button").on("click", function () {
//     $(".start").fadeOut(1000);
//     $(".content").delay(1000).fadeIn(500);
//     $("body").removeClass("remove-scrolling");

//     turn = $(this).attr("id")
//     if (turn == "cpu") {
//         player_color = "black"
//     } else {
//         player_color = "white"
//     }
//     turn_change();

//     // 2.石を置ける箇所表示
//     placeble()
// });

// テスト
turn = "cpu"
player_color = "black"
turn_change();
placeble()

// 3.石を置く
$(document).on("click", ".placeble", function () {
    let select_squares = $(this).parent().attr("id");
    if ((turn == "player" && player_color == "black") || (turn == "cpu" && player_color == "white")) {
        $("#" + select_squares).addClass("black");
        $("#" + select_squares).html('<img src="./img/black.png">');
    } else if ((turn == "player" && player_color == "white") || (turn == "cpu" && player_color == "black")) {
        $("#" + select_squares).addClass("white");
        $("#" + select_squares).html('<img src="./img/white.png">');
    }

    // 4.石をひっくり返す
    reverse(Number(select_squares.slice(0, 1)), Number(select_squares.slice(2, 3)));

    let black_score = $(".black").length
    let white_score = $(".white").length
    $("#black-score").text(": " + black_score);
    $("#white-score").text(": " + white_score);

    // 5.終了判定
    if ((black_score + white_score == 64) || (black_score == 0 || white_score == 0)) {
        if (((player_color == "black") && (black_score > white_score)) || ((player_color == "white") && (white_score > black_score))) {
            alert("あなたの勝ち！")
            location.reload()
        } else if (((player_color == "black") && (white_score > black_score)) || ((player_color == "white") && (black_score > white_score))) {
            alert("あなたの負け")
            location.reload()
        } else {
            alert("引き分け")
            location.reload()
        }
    }
    turn_change();
    placeble();
});