az.load_font("Oxanium")
az.style_page({
    "background": "#303952",
    "font-family": "Oxanium",
    "min-width": "1200px"
})
az.add_sections({
    "this_class": "main_sections",
    "sections": 3
})
az.style_sections("main_sections", 1, {
    "background": "#596275",
    "flush": false,
    "height": "400px"
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
az.add_input("main_sections", 1, {
    "this_class": "hold_title",
    "placeholder": "project title...",
    "spellcheck": false,
    "maxlength": 30
})
az.style_input("hold_title", 1, {
    "background": "whitesmoke",
    "border": "none",
    "font-size": "18px",
    "align": "center",
    "width": "300px",
    "margin-bottom": "30px",
    "font-family": "Oxanium"
})
az.add_layout("main_sections", 1, {
    "this_class": "main_layout",
    "row_class": "main_layout_rows",
    "cell_class": "main_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 1
})
az.style_layout("main_layout", 1, {
    "height": "100%",
    "width": "100%",
    "border": 0
})
az.style_layout("main_layout_cells", 1, {
    "valign": "top"
})
az.add_layout("main_layout_cells", 1, {
    "this_class": "title_layout",
    "row_class": "title_layout_rows",
    "cell_class": "title_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 10
})
az.style_layout("title_layout", 1, {
    "height": "40px",
    "width": "100%",
    "border": 0
})
az.call_once_satisfied({
    "condition": "typeof(az.hold_value.piece_titles) !== 'undefined'",
    "function": function() {
        az.call_multiple({
            "iterations": 10,
            "function": function(elem, index) {
                az.add_text("title_layout_cells", index + 1, {
                    "this_class": "piece_titles",
                    "text": Object.keys(az.hold_value.piece_titles)[index]
                })
                az.style_text("piece_titles", index + 1, {
                    "align": "center",
                    "color": "white",
                    "font-size": "18px"
                })
            }
        })
        az.add_layout("main_layout_cells", 1, {
            "this_class": "scroll_layout",
            "row_class": "scroll_layout_rows",
            "cell_class": "scroll_layout_cells",
            "number_of_rows": 1,
            "number_of_columns": 10
        })
        az.style_layout("scroll_layout", 1, {
            "height": "40px",
            "width": "100%",
            "border": 0
        })
        az.all_style_layout("scroll_layout_cells", {
            "valign": "top"
        })
        az.call_multiple({
            "iterations": 10,
            "function": function(elem, index) {
                az.add_scrollable_container("scroll_layout_cells", index + 1, {
                    "this_class": "my_scrollable",
                    "direction": "vertical"
                })
                az.style_scrollable_container("my_scrollable", index + 1, {
                    "align": "center",
                    "background": "transparent",
                    "width": "auto",
                    "height": "100%",
                    "border": "none"
                })
                az.call_multiple({
                    "iterations": 6,
                    "function": function(elem, index_b) {
                        if (typeof(Object.values(az.hold_value.piece_titles)[index][index_b]) !== "undefined") {
                            az.add_button("my_scrollable", index + 1, {
                                "this_class": "piece_button",
                                "text": Object.values(az.hold_value.piece_titles)[index][index_b]
                            })
                            az.all_style_button("piece_button", {
                                "background": "#33d9b2",
                                "color": "#141414",
                                "margin-bottom": "8px",
                                "width": "120px",
                                "width" : "auto",
                                "display" : "block",
                                "border" : "1px solid white"
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
                                    az.add_html("main_sections", 2, {
                                        "html": "<div class='hold_added_buttons'></div>"
                                    })
                                    az.style_html("hold_added_buttons", az.last_class_instance("hold_added_buttons"), {
                                        "margin-top": "5px",
                                        "background": "#d1ccc0"
                                    })
                                    az.add_button("hold_added_buttons", az.last_class_instance("hold_added_buttons"), {
                                        "this_class": "timeline_button",
                                        "text": $("#" + this_id).text()
                                    })
                                    az.style_button("timeline_button", az.last_class_instance("timeline_button"), {
                                        "background": "#33d9b2",
                                        "color": "#141414",
                                        "box-shadow" : "2px 2px 2px black",
                                        "border" : "1px solid white"
                                    })
                                    az.add_event("timeline_button", 1, {
                                        "type" : "click",
                                        "function" : function() {
                                            //az.scroll_to("main_sections", 3)
                                            az.hold_value.piece_calls[$("#" + this_id).text()]()
                                        }
                                    })
                                    element = $(".timeline_button").eq(az.last_class_instance("timeline_button") - 1).get(0)
                                    draggable = new PlainDraggable(element);
                                }
                            })
                        }
                    }
                })
            }
        })
    }
})
az.add_text("main_sections", 2, {
    "this_class": "timeline_title",
    "text": "Video Timeline"
})
az.style_text("timeline_title", 1, {
    "align": "center",
    "color": "white",
    "font-size": "19px"
})
az.add_icon("main_sections", 2, {
    "this_class" : "play_icon",
    "icon_class" : "fa-play-circle-o"
})
az.style_icon("play_icon", 1, {
    "align" : "center",
    "color" : "white",
    "font-size" : "30px",
    "margin-top" : "6px",
    "margin-bottom" : "6px",
    "cursor" : "pointer"
})
az.add_event("play_icon", 1, {
    "type" : "click",
    "function" : function() {
        build_and_save_execution_object("make_circle")
    }
})
az.add_layout("main_sections", 3, {
    "this_class": "video_layout",
    "row_class": "video_layout_rows",
    "cell_class": "video_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})
az.style_layout("video_layout", 1, {
    "height": "100%",
    "width": "100%",
    "column_widths": ['40%', '60%'],
    "border": 1
})
az.style_layout("video_layout_cells", 1, {
    "valign": "top",
    "padding": "20px"
})