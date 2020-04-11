az.load_font("Oxanium")
az.style_page({
    "background": "#303952",
    "font-family": "Oxanium",
    "min-width": "1200px",
    "max-width": "1400px"
})
az.add_sections({
    "this_class": "main_sections",
    "sections": 2
})
az.style_sections("main_sections", 1, {
    "background": "#596275",
    "flush": true,
    "height": "400px"
})
az.style_sections("main_sections", 2, {
    "background": "#596275",
    "flush": true,
    "height": "400px"
})
az.style_sections("main_sections", 3, {
    "background": "#596275",
    "flush": true,
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
    "margin-bottom": "10px",
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
                                "width": "120px"
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
                                    az.scroll_to("main_sections", 2)
                                    az.empty_contents("video_layout_cells", 1)
                                    az.add_text("video_layout_cells", 1, {
                                        "this_class": "choice_title",
                                        "text": $("#" + this_id).text()
                                    })
                                    az.style_text("choice_title", 1, {
                                        "align": "left",
                                        "color": "white",
                                        "font-size": "20px"
                                    })
                                    az.hold_value.piece_calls[$("#" + this_id).text()]()
                                }
                            })
                        }
                    }
                })
            }
        })
        az.add_event("circle_button", 1, {
            "type": "click",
            "function": function() {
                build_and_save_execution_object("make_circle")
            }
        })
    }
})
az.add_layout("main_sections", 2, {
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