function pop_timeline_settings(this_id) {
    az.add_modal({
        "this_class": "piece_settings",
        "content_class": "piece_settings_content"
    })
    az.style_modal("piece_settings", 1, {
        "background": "rgb(48, 57, 82)",
        "width": "auto",
        "height": "auto",
        "border": "1px solid whitesmoke"
    })
    az.add_text("piece_settings_content", 1, {
        "this_class": "settings_title",
        "text": $("#" + this_id).text() + " settings"
    })
    az.style_text("settings_title", 1, {
        "align": "center",
        "font-size": "22px",
        "color": "whitesmoke",
        "margin-bottom": "20px",
        "text-transform" : "uppercase"
    })
    az.add_layout("piece_settings_content", 1, {
        "this_class": "settings_layout",
        "row_class": "settings_layout_rows",
        "cell_class": "settings_layout_cells",
        "number_of_rows": 1,
        "number_of_columns": 2
    })
    az.style_layout("settings_layout", 1, {
        "height": "300px",
        "width": "700px",
        "column_widths": ['40%', '60%'],
        "align": "center",
        "border": 0
    })
     az.style_layout("settings_layout_cells", 1, {
         "background" : "rgb(237, 232, 221)"
     })
     az.style_layout("settings_layout_cells", 2, {
         "background" : "rgb(89, 98, 117)"
     })
    az.add_scrollable_container("settings_layout_cells", 1, {
        "this_class": "settings_scrollable",
        "direction": "vertical"
    })
    az.style_scrollable_container("settings_scrollable", 1, {
        "width": "100%",
        "height": "300px",
        "background": "transparent",
        "border": "none",
        "align": "center"
    })
    Object.keys(az.hold_value.piece_titles[$("#" + this_id).text()]).forEach(function(elem, i) {
        az.add_text("settings_scrollable", 1, {
            "this_class": "this_settings_title",
            "text": elem.toUpperCase()
        })
        az.all_style_text("this_settings_title", {
            "color": "#141414",
            "align": "center",
            "font-size": "17px",
            "margin-top": "10px",
            "margin-bottom": "10px",
            "font-weight" : "bold"
        })


        Object.values(az.hold_value.piece_titles[$("#" + this_id).text()])[i].forEach(function(this_setting) {

            az.add_button("settings_scrollable", 1, {
                "this_class": "settings_buttons",
                "text": this_setting
            })
            az.style_button("settings_buttons", az.last_class_instance("settings_buttons"), {
                "width": "90%",
                "align": "center",
                "background": "#33d9b2",
                "color": "#141414",
                "box-shadow": "2px 2px 2px black",
                "border": "1px solid white",
                "display": "block",
                "margin": "10px"
            })
            az.add_event("settings_buttons", az.last_class_instance("settings_buttons"), {
                "type": "hover",
                "function": function(this_id) {
                    az.all_style_button("settings_buttons", {
                        "background": "#33d9b2"
                    })
                    az.style_button("settings_buttons", az.get_target_instance(this_id), {
                        "background": "pink"
                    })
                }
            })
        })
        })
}