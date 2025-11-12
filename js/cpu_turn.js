function cpu_turn() {
    let placeble_lst = { 8: "", 7: "", 6: "", 5: "", 4: "", 3: "", 2: "", 1: "", "yellow": "", "red": "" }
    for (let i = 1; i < 9; i++) {
        for (let j = 1; j < 9; j++) {
            if ($("#" + (j) + "-" + (i)).children().attr("class") != "placeble-cpu") {
                continue
            }

            // 四隅
            if ((j + "-" + i) === "1-1" || (j + "-" + i) == "8-1" || (j + "-" + i) == "1-8" || (j + "-" + i) == "8-8") {
                if (player_color == "black") {
                    $("#" + (j) + "-" + (i)).addClass("white")
                    $("#" + (j) + "-" + (i)).html('<img src="./img/white.png">')
                } else {
                    $("#" + (j) + "-" + (i)).addClass("black")
                    $("#" + (j) + "-" + (i)).html('<img src="./img/black.png">')

                }
                cpu_hand = [j, i];
                return

            } else {
                let placeble_count = 0
                let class_name = $("#" + (j - 1) + "-" + (i - 1)).attr("class")
                if ((class_name == "black") || (class_name == "white") || (class_name == "border-none")) {
                    placeble_count += 1
                }
                class_name = $("#" + (j) + "-" + (i - 1)).attr("class")
                if ((class_name == "black") || (class_name == "white") || (class_name == "border-none")) {
                    placeble_count += 1
                }
                class_name = $("#" + (j + 1) + "-" + (i - 1)).attr("class")
                if ((class_name == "black") || (class_name == "white") || (class_name == "border-none")) {
                    placeble_count += 1
                }
                class_name = $("#" + (j - 1) + "-" + (i)).attr("class")
                if ((class_name == "black") || (class_name == "white") || (class_name == "border-none")) {
                    placeble_count += 1
                }
                class_name = $("#" + (j + 1) + "-" + (i)).attr("class")
                if ((class_name == "black") || (class_name == "white") || (class_name == "border-none")) {
                    placeble_count += 1
                }
                class_name = $("#" + (j - 1) + "-" + (i + 1)).attr("class")
                if ((class_name == "black") || (class_name == "white") || (class_name == "border-none")) {
                    placeble_count += 1
                }
                class_name = $("#" + (j) + "-" + (i + 1)).attr("class")
                if ((class_name == "black") || (class_name == "white") || (class_name == "border-none")) {
                    placeble_count += 1
                }
                class_name = $("#" + (j + 1) + "-" + (i + 1)).attr("class")
                if ((class_name == "black") || (class_name == "white") || (class_name == "border-none")) {
                    placeble_count += 1
                }
                if ((j + "-" + i) == "2-1" || (j + "-" + i) == "7-1" || (j + "-" + i) == "1-2" || (j + "-" + i) == "8-2" || (j + "-" + i) == "1-7" || (j + "-" + i) == "8-7" || (j + "-" + i) == "2-8" || (j + "-" + i) == "7-8") {
                    placeble_count = "yellow"
                }
                if ((j + "-" + i) == "2-2" || (j + "-" + i) == "7-2" || (j + "-" + i) == "2-7" || (j + "-" + i) == "7-7") {
                    placeble_count = "red"
                }
                placeble_lst[placeble_count] = (j + "-" + i)
            }
        }
    }

    if (placeble_lst[8] != "") {
        select_squares = placeble_lst[8]
    } else if (placeble_lst[7] != "") {
        select_squares = placeble_lst[7]
    } else if (placeble_lst[6] != "") {
        select_squares = placeble_lst[6]
    } else if (placeble_lst[5] != "") {
        select_squares = placeble_lst[5]
    } else if (placeble_lst[4] != "") {
        select_squares = placeble_lst[4]
    } else if (placeble_lst[3] != "") {
        select_squares = placeble_lst[3]
    } else if (placeble_lst[2] != "") {
        select_squares = placeble_lst[2]
    } else if (placeble_lst[1] != "") {
        select_squares = placeble_lst[1]
    } else if (placeble_lst["yellow"] != "") {
        select_squares = placeble_lst["yellow"]
    } else if (placeble_lst["red"] != "") {
        select_squares = placeble_lst["red"]
    }


    if (player_color == "black") {
        $("#" + (select_squares.slice(0, 1)) + "-" + (select_squares.slice(2, 3))).addClass("white")
        $("#" + (select_squares.slice(0, 1)) + "-" + (select_squares.slice(2, 3))).html('<img src="./img/white.png">')
    } else {
        $("#" + (select_squares.slice(0, 1)) + "-" + (select_squares.slice(2, 3))).addClass("black")
        $("#" + (select_squares.slice(0, 1)) + "-" + (select_squares.slice(2, 3))).html('<img src="./img/black.png">')

    }
    cpu_hand = [Number(select_squares.slice(0, 1)), Number(select_squares.slice(2, 3))];
    return
}