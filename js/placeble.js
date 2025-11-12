function placeble() { // 石を置ける場所を表示
    $(".placeble,.placeble-cpu").remove();
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
                } else if ($("#" + (j - 1) + "-" + (i - 1)).attr("class") == "white") { //対象
                    let k = j - 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j) + "-" + (i - 1)).attr("class") == "white") { //対象
                    let k = j
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j + 1) + "-" + (i - 1)).attr("class") == "white") { //対象
                    let k = j + 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j - 1) + "-" + (i)).attr("class") == "white") { //対象
                    let k = j - 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j + 1) + "-" + (i)).attr("class") == "white") { //対象
                    let k = j + 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j - 1) + "-" + (i + 1)).attr("class") == "white") { //対象
                    let k = j - 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j) + "-" + (i + 1)).attr("class") == "white") { //対象
                    let k = j
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j + 1) + "-" + (i + 1)).attr("class") == "white") { //対象
                    let k = j + 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j - 1) + "-" + (i - 1)).attr("class") == "black") { //対象
                    let k = j - 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j) + "-" + (i - 1)).attr("class") == "black") { //対象
                    let k = j
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j + 1) + "-" + (i - 1)).attr("class") == "black") { //対象
                    let k = j + 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j - 1) + "-" + (i)).attr("class") == "black") { //対象
                    let k = j - 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j + 1) + "-" + (i)).attr("class") == "black") { //対象
                    let k = j + 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j - 1) + "-" + (i + 1)).attr("class") == "black") { //対象
                    let k = j - 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j) + "-" + (i + 1)).attr("class") == "black") { //対象
                    let k = j
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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
                } else if ($("#" + (j + 1) + "-" + (i + 1)).attr("class") == "black") { //対象
                    let k = j + 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                            break;
                        } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                            break;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") { //対象
                            ;
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            if (turn == "player") {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble">')
                            } else {
                                $("#" + (j) + "-" + (i)).html('<img src="./img/placeble.png" class="placeble-cpu">')
                            }
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