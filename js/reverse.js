function reverse(j, i) {
    if ((turn == "player" && player_color == "black") || (turn == "cpu" && player_color == "white")) {

        // 左上
        if ($("#" + (j - 1) + "-" + (i - 1)).attr("class") == "white") {
            let k = j - 1
            let l = i - 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    let k = j - 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (k) + "-" + (l)).removeClass("white")
                            $("#" + (k) + "-" + (l)).addClass("black")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/black.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            break
                        }
                        k -= 1
                        l -= 1
                    }
                    break
                }
                k -= 1
                l -= 1
            }
        }

        // 上
        if ($("#" + (j) + "-" + (i - 1)).attr("class") == "white") {
            let k = j
            let l = i - 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    let k = j
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (k) + "-" + (l)).removeClass("white")
                            $("#" + (k) + "-" + (l)).addClass("black")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/black.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            break
                        }
                        l -= 1
                    }
                    break
                }
                l -= 1
            }
        }

        // 右上
        if ($("#" + (j + 1) + "-" + (i - 1)).attr("class") == "white") {
            let k = j + 1
            let l = i - 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    let k = j + 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (k) + "-" + (l)).removeClass("white")
                            $("#" + (k) + "-" + (l)).addClass("black")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/black.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            break
                        }
                        k += 1
                        l -= 1
                    }
                    break
                }
                k += 1
                l -= 1
            }
        }

        // 左
        if ($("#" + (j - 1) + "-" + (i)).attr("class") == "white") {
            let k = j - 1
            let l = i
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    let k = j - 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (k) + "-" + (l)).removeClass("white")
                            $("#" + (k) + "-" + (l)).addClass("black")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/black.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            break
                        }
                        k -= 1
                    }
                    break
                }
                k -= 1
            }
        }

        // 右
        if ($("#" + (j + 1) + "-" + (i)).attr("class") == "white") {
            let k = j + 1
            let l = i
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    let k = j + 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (k) + "-" + (l)).removeClass("white")
                            $("#" + (k) + "-" + (l)).addClass("black")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/black.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            break
                        }
                        k += 1
                    }
                    break
                }
                k += 1
            }
        }

        // 左下
        if ($("#" + (j - 1) + "-" + (i + 1)).attr("class") == "white") {
            let k = j - 1
            let l = i + 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                        ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    let k = j - 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (k) + "-" + (l)).removeClass("white")
                            $("#" + (k) + "-" + (l)).addClass("black")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/black.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            break
                        }
                        k -= 1
                        l += 1
                    }
                    break
                }
                k -= 1
                l += 1
            }
        }

        // 下
        if ($("#" + (j) + "-" + (i + 1)).attr("class") == "white") {
            let k = j
            let l = i + 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    let k = j
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (k) + "-" + (l)).removeClass("white")
                            $("#" + (k) + "-" + (l)).addClass("black")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/black.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            break
                        }
                        l += 1
                    }
                    break
                }
                l += 1
            }
        }

        // 右下
        if ($("#" + (j + 1) + "-" + (i + 1)).attr("class") == "white") {
            let k = j + 1
            let l = i + 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    let k = j + 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            $("#" + (k) + "-" + (l)).removeClass("white")
                            $("#" + (k) + "-" + (l)).addClass("black")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/black.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            break
                        }
                        k += 1
                        l += 1
                    }
                    break
                }
                k += 1
                l += 1
            }
        }
    } else if ((turn == "player" && player_color == "white") || (turn == "cpu" && player_color == "black")) {

        // 左上
        if ($("#" + (j - 1) + "-" + (i - 1)).attr("class") == "black") {
            let k = j - 1
            let l = i - 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    let k = j - 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (k) + "-" + (l)).removeClass("black")
                            $("#" + (k) + "-" + (l)).addClass("white")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/white.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            break
                        }
                        k -= 1
                        l -= 1
                    }
                    break
                }
                k -= 1
                l -= 1
            }
        }

        // 上
        if ($("#" + (j) + "-" + (i - 1)).attr("class") == "black") {
            let k = j
            let l = i - 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    let k = j
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (k) + "-" + (l)).removeClass("black")
                            $("#" + (k) + "-" + (l)).addClass("white")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/white.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            break
                        }
                        l -= 1
                    }
                    break
                }
                l -= 1
            }
        }

        // 右上
        if ($("#" + (j + 1) + "-" + (i - 1)).attr("class") == "black") {
            let k = j + 1
            let l = i - 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    let k = j + 1
                    let l = i - 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (k) + "-" + (l)).removeClass("black")
                            $("#" + (k) + "-" + (l)).addClass("white")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/white.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            break
                        }
                        k += 1
                        l -= 1
                    }
                    break
                }
                k += 1
                l -= 1
            }
        }

        // 左
        if ($("#" + (j - 1) + "-" + (i)).attr("class") == "black") {
            let k = j - 1
            let l = i
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    let k = j - 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (k) + "-" + (l)).removeClass("black")
                            $("#" + (k) + "-" + (l)).addClass("white")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/white.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            break
                        }
                        k -= 1
                    }
                    break
                }
                k -= 1
            }
        }

        // 右
        if ($("#" + (j + 1) + "-" + (i)).attr("class") == "black") {
            let k = j + 1
            let l = i
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    let k = j + 1
                    let l = i
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (k) + "-" + (l)).removeClass("black")
                            $("#" + (k) + "-" + (l)).addClass("white")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/white.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            break
                        }
                        k += 1
                    }
                    break
                }
                k += 1
            }
        }

        // 左下
        if ($("#" + (j - 1) + "-" + (i + 1)).attr("class") == "black") {
            let k = j - 1
            let l = i + 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    let k = j - 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (k) + "-" + (l)).removeClass("black")
                            $("#" + (k) + "-" + (l)).addClass("white")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/white.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            break
                        }
                        k -= 1
                        l += 1
                    }
                    break
                }
                k -= 1
                l += 1
            }
        }

        // 下
        if ($("#" + (j) + "-" + (i + 1)).attr("class") == "black") {
            let k = j
            let l = i + 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    let k = j
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (k) + "-" + (l)).removeClass("black")
                            $("#" + (k) + "-" + (l)).addClass("white")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/white.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            break
                        }
                        l += 1
                    }
                    break
                }
                l += 1
            }
        }

        // 右下
        if ($("#" + (j + 1) + "-" + (i + 1)).attr("class") == "black") {
            let k = j + 1
            let l = i + 1
            while (true) {
                if ($("#" + (k) + "-" + (l)).attr("class") == "border-none") { //枠外
                    break;
                } else if ($("#" + (k) + "-" + (l)).children()[0] == null) { //石なし
                    break;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                    ;
                } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                    let k = j + 1
                    let l = i + 1
                    while (true) {
                        if ($("#" + (k) + "-" + (l)).attr("class") == "black") {
                            $("#" + (k) + "-" + (l)).removeClass("black")
                            $("#" + (k) + "-" + (l)).addClass("white")
                            $("#" + (k) + "-" + (l)).html('<img src="./img/white.png">')
                        } else if ($("#" + (k) + "-" + (l)).attr("class") == "white") {
                            break
                        }
                        k += 1
                        l += 1
                    }
                    break
                }
                k += 1
                l += 1
            }
        }
    }
}
