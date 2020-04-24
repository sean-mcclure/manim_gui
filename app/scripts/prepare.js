az.load_font("Oxanium")
az.style_page({
    "background": "#303952",
    "font-family": "Oxanium",
    "min-width": "1200px"
})
az.add_sections({
    "this_class": "main_sections",
    "sections": 2
})
az.style_sections("main_sections", 1, {
    "background": "#596275",
    "flush": false,
    "height": "auto"
})
az.style_sections("main_sections", 2, {
    "background": "#596275",
    "flush": false,
    "height": "auto"
})
az.style_sections("main_sections", 3, {
    "background": "#596275",
    "flush": false,
    "height": "400px"
})
az.add_image("main_sections", 1, {
    "this_class": "logo",
    "image_path": "img/3b1b.png"
})
az.style_image("logo", 1, {
    "align": "center",
    "width": "40px"
})
az.add_text("main_sections", 1, {
    "this_class": "app_title",
    "text": "MANIM GUI"
})
az.style_text("app_title", 1, {
    "align": "center",
    "font-size": "22px",
    "color": "whitesmoke",
    "margin-bottom": "20px"
})
az.add_input("main_sections", 1, {
    "this_class": "hold_title",
    "placeholder": "name your project...",
    "spellcheck": false,
    "maxlength": 30
})
az.style_input("hold_title", 1, {
    "background": "rgb(237, 232, 221)",
    "border": "none",
    "font-size": "18px",
    "align": "center",
    "width": "300px",
    "margin-bottom": "30px",
    "font-family": "Oxanium"
})
az.focus_element("hold_title", 1)
az.add_layout("main_sections", 1, {
    "this_class": "main_layout",
    "row_class": "main_layout_rows",
    "cell_class": "main_layout_cells",
    "number_of_rows": 3,
    "number_of_columns": 1
})
az.style_layout("main_layout", 1, {
    "height": "auto",
    "width": "100%",
    "border": 0
})
az.all_style_layout("main_layout_cells", {
    "valign": "top",
    "padding": "10px"
})
az.style_layout("main_layout_rows", 1, {
    "height": "30px"
})
az.add_scrollable_container("main_layout_cells", 1, {
    "this_class": "scroll_shapes",
    "direction": "horizontal"
})
az.add_scrollable_container("main_layout_cells", 1, {
    "this_class": "scroll_shapes",
    "direction": "horizontal"
})
az.all_style_scrollable_container("scroll_shapes", {
    "width": "100%",
    "height": "40px",
    "background": "transparent",
    "border": "none",
    "align": "center",
    "margin-bottom" : "10px"
})
hold_cnt = 0
az.call_once_satisfied({
    "condition": "typeof(az.hold_value.piece_titles) !== 'undefined'",
    "function": function() {
        az.call_multiple({
            "iterations": Object.keys(az.hold_value.piece_titles).length,
            "function": function(elem, index) {
                if(index < 6) {
                   var use_index = 1
                } else {
                   var use_index = 2
                }
                az.add_button("scroll_shapes", use_index, {
                    "this_class": "piece_button",
                    "text": Object.keys(az.hold_value.piece_titles)[index]
                })
                az.all_style_button("piece_button", {
                    "background": "#33d9b2",
                    "color": "#141414",
                    "width": "100px",
                    "display": "inline",
                    "border": "1px solid white",
                    "margin-right": "5px"
                })
                az.add_event("piece_button", az.last_class_instance("piece_button"), {
                    "type": "hover",
                    "function": function(this_id) {
                        az.all_style_button("piece_button", {
                            "background": "#33d9b2"
                        })
                        az.style_button("piece_button", az.get_target_instance(this_id), {
                            "background": "pink"
                        })
                        az.hold_value.recent_piece_title = $("#" + this_id).text()
                    }
                })
                az.add_event("piece_button", az.last_class_instance("piece_button"), {
                    "type": "unhover",
                    "function": function(this_id) {
                        az.all_style_button("piece_button", {
                            "background": "#33d9b2"
                        })
                    }
                })
                az.add_event("piece_button", az.last_class_instance("piece_button"), {
                    "type": "click",
                    "function": function(this_id) {
                        if(az.grab_value("hold_title", 1) !== "") {
                        hold_cnt++
                        az.add_layout("main_layout_cells", 2, {
                            "this_class": "hold_added_buttons_layout_" + hold_cnt,
                            "row_class": "hold_added_buttons_layout_rows_" + hold_cnt,
                            "cell_class": "hold_added_buttons_layout_cells_" + hold_cnt,
                            "number_of_rows": 1,
                            "number_of_columns": 2
                        })
                        az.style_layout("hold_added_buttons_layout_" + hold_cnt, 1, {
                            "height": "auto",
                            "width": "100%",
                            "margin-top": "5px",
                            "column_widths": ["2%", "98%"],
                            "border": 0
                        })
                        az.add_text("hold_added_buttons_layout_cells_" + hold_cnt, 1, {
                            "this_class": "remove_row",
                            "text": "X"
                        })
                        az.all_style_text("remove_row", {
                            "align": "center",
                            "color": "red",
                            "font-size": "18px",
                            "cursor": "pointer"
                        })
                        az.add_html("hold_added_buttons_layout_cells_" + hold_cnt, 2, {
                            "html": "<div class='hold_added_buttons'></div>"
                        })
                        az.style_html("hold_added_buttons", az.last_class_instance("hold_added_buttons"), {
                            "margin-top": "5px",
                            "background": "#d1ccc0"
                        })
                        var button_id = "button_" + az.makeid()
                        az.add_button("hold_added_buttons", az.last_class_instance("hold_added_buttons"), {
                            "this_class": "timeline_button",
                            "text": $("#" + this_id).text(),
                            "this_id" : button_id
                        })
                        az.style_button("timeline_button", az.last_class_instance("timeline_button"), {
                            "background": "#33d9b2",
                            "color": "#141414",
                            "box-shadow": "2px 2px 2px black",
                            "border": "1px solid white"
                        })
                        az.add_event("timeline_button", az.last_class_instance("timeline_button"), {
                            "type": "right_click",
                            "function": function(this_id) {
                                pop_timeline_settings(this_id)
                            }
                        })
                        element = $(".timeline_button").eq(az.last_class_instance("timeline_button") - 1).get(0)
                        draggable = new PlainDraggable(element);
                        draggable.onDrag = function(newPosition) {
                            make_exec(button_id, newPosition)
                        }
                        } else {
                        az.animate_element("hold_title", 1, {
                            "type" : "rubberBand"
                        })
                        }
                    }
                })
            }
        })
    }
})
az.add_icon("main_layout_cells", 3, {
    "this_class": "play_icon",
    "icon_class": "fa-play-circle-o"
})
az.style_icon("play_icon", 1, {
    "align": "center",
    "color": "rgb(237, 232, 221)",
    "font-size": "40px",
    "margin-top": "6px",
    "margin-bottom": "6px",
    "cursor": "pointer",
    "text-shadow": "2px 2px 6px black"
})
az.add_event("play_icon", 1, {
    "type": "click",
    "function": function() {
        build_and_save_execution_object("make_circle")
    }
})
az.add_layout("main_sections", 2, {
    "this_class": "video_layout",
    "row_class": "video_layout_rows",
    "cell_class": "video_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 1
})
az.style_layout("video_layout", 1, {
    "height": "100%",
    "width": "100%",
    "column_widths": ['40%', '60%'],
    "border": 0
})
az.style_layout("video_layout_cells", 1, {
    "valign": "top",
    "padding": "20px"
})