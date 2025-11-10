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

function placeble() { // 石を置ける場所を表示
    $(".placeble").remove();
    if ((turn == "player" && player_color == "black") || (turn == "cpu" && player_color == "white")) {
        for (let i = 1; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                if ($("#" + (j) + "-" + (i)).children()[0] != null) { //配置済み
                    continue
                }

                // 左上
                if ($("#" + (j - 1) + "-" + (i - 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j - 1) + "-" + (i - 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j - 1) + "-" + (i - 1)).attr("class") == "white") { //対象1
                    let k = j - 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k -= 1
                        l -= 1
                    }
                }

                // 上
                if ($("#" + (j) + "-" + (i - 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j) + "-" + (i - 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j) + "-" + (i - 1)).attr("class") == "white") { //対象1
                    let k = j
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        l -= 1
                    }
                }
                // 右上
                if ($("#" + (j + 1) + "-" + (i - 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j + 1) + "-" + (i - 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j + 1) + "-" + (i - 1)).attr("class") == "white") { //対象1
                    let k = j + 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k += 1
                        l -= 1
                    }
                }

                // 左
                if ($("#" + (j - 1) + "-" + (i)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j - 1) + "-" + (i)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j - 1) + "-" + (i)).attr("class") == "white") { //対象1
                    let k = j - 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k -= 1
                    }
                }

                // 右
                if ($("#" + (j + 1) + "-" + (i)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j + 1) + "-" + (i)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j + 1) + "-" + (i)).attr("class") == "white") { //対象1
                    let k = j + 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k += 1
                    }
                }

                // 左下
                if ($("#" + (j - 1) + "-" + (i + 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j - 1) + "-" + (i + 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j - 1) + "-" + (i + 1)).attr("class") == "white") { //対象1
                    let k = j - 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k -= 1
                        l += 1
                    }
                }

                // 下
                if ($("#" + (j) + "-" + (i + 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j) + "-" + (i + 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j) + "-" + (i + 1)).attr("class") == "white") { //対象1
                    let k = j
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        l += 1
                    }
                }

                // 右下
                if ($("#" + (j + 1) + "-" + (i + 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j + 1) + "-" + (i + 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j + 1) + "-" + (i + 1)).attr("class") == "white") { //対象1
                    let k = j + 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k += 1
                        l += 1
                    }
                }

            }
        }
    } else if ((turn == "player" && player_color == "white") || (turn == "cpu" && player_color == "black")) {
        for (let i = 1; i < 9; i++) {
            for (let j = 1; j < 9; j++) {
                if ($("#" + (j) + "-" + (i)).children()[0] != null) { //配置済み
                    continue
                }

                // 左上
                if ($("#" + (j - 1) + "-" + (i - 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j - 1) + "-" + (i - 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j - 1) + "-" + (i - 1)).attr("class") == "black") { //対象1
                    let k = j - 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k -= 1
                        l -= 1
                    }
                }

                // 上
                if ($("#" + (j) + "-" + (i - 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j) + "-" + (i - 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j) + "-" + (i - 1)).attr("class") == "black") { //対象1
                    let k = j
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        l -= 1
                    }
                }
                // 右上
                if ($("#" + (j + 1) + "-" + (i - 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j + 1) + "-" + (i - 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j + 1) + "-" + (i - 1)).attr("class") == "black") { //対象1
                    let k = j + 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k += 1
                        l -= 1
                    }
                }

                // 左
                if ($("#" + (j - 1) + "-" + (i)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j - 1) + "-" + (i)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j - 1) + "-" + (i)).attr("class") == "black") { //対象1
                    let k = j - 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k -= 1
                    }
                }

                // 右
                if ($("#" + (j + 1) + "-" + (i)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j + 1) + "-" + (i)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j + 1) + "-" + (i)).attr("class") == "black") { //対象1
                    let k = j + 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k += 1
                    }
                }

                // 左下
                if ($("#" + (j - 1) + "-" + (i + 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j - 1) + "-" + (i + 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j - 1) + "-" + (i + 1)).attr("class") == "black") { //対象1
                    let k = j - 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k -= 1
                        l += 1
                    }
                }

                // 下
                if ($("#" + (j) + "-" + (i + 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j) + "-" + (i + 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j) + "-" + (i + 1)).attr("class") == "black") { //対象1
                    let k = j
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        l += 1
                    }
                }

                // 右下
                if ($("#" + (j + 1) + "-" + (i + 1)).attr("class") == "border-none") { //枠外
                    ;
                } else if ($("#" + (j + 1) + "-" + (i + 1)).children()[0] == null) { //石なし
                    ;
                } else if ($("#" + (j + 1) + "-" + (i + 1)).attr("class") == "black") { //対象1
                    let k = j + 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象1
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            break
                        }
                        k += 1
                        l += 1
                    }
                }

            }
        }
    }
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
    turn_change();
    placeble();
});