az.hold_value.execution_object = {}

az.hold_value.shape_settings = {
    "actions" : {
        "move_to" : "",
        "surround" : "",
        "shift" : "",
        "next_to" : "",
        "add" : ""
    },
    "directions" : {
        "UP" : "",
        "DOWN": "",
        "LEFT" : "",
        "RIGHT" : ""
    }
}

az.hold_value.piece_titles = {
        "circle" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "square" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "rectangle" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "ellipse" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "pointer" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "arrow" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "rectangle" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "ring" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "text" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"],
            "content" : ["add text"]
        },
        "equation" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "graph" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "3D" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        },
        "SVG" : {
            "actions" : ["move_to", "surround", "shift", "next_to", "add"],
            "directions": ["UP", "DOWN", "LEFT", "RIGHT"],
            "styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
            "effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
        }
}



az.hold_value.piece_calls = {
    "add text": function() {
        az.add_layout("settings_layout_cells", 2, {
            "this_class": "text_layout",
            "row_class": "text_layout_rows",
            "cell_class": "text_layout_cells",
            "number_of_rows": 1,
            "number_of_columns": 2
        })
        az.style_layout("text_layout", 1, {
            "height": "auto",
            "width": "auto",
            "align" : "center",
            "border": 0
        })
        az.add_input("text_layout_cells", 1, {
            "this_class": "text_to_add_input",
            "placeholder": "title...",
            "spellcheck": false,
            "maxlength": 30
        })
        az.add_button("text_layout_cells", 2, {
            "this_class": "text_button",
            "text": "ADD"
        })
        az.style_button("text_button", 1, {
            "background": "#33d9b2",
            "color": "#141414"
        })
        az.add_event("text_button", 1, {
            "type": "click",
            "function": function() {
                update_execution_object(az.hold_value_popped_id, "text", az.grab_value("text_to_add_input", 1))
                build_and_save_execution_object()
            }
        })
    },
    "circle": function() {
        az.empty_contents("video_layout_cells", 1)
        az.add_button("video_layout_cells", 1, {
            "this_class": "col_button",
            "text": "CHOOSE COLOR"
        })
        az.style_button("col_button", 1, {
            "background": "#33d9b2",
            "color": "#141414"
        })
        az.add_event("col_button", 1, {
            "type": "click",
            "function": function() {
                az.add_color_picker({
            "this_class": "color_picker",
            "function": function() {
                az.style_sections("col_button", 1, {
                    "background" : az.global_current_color
                })
            }
        })
            }
        })
        az.add_button("video_layout_cells", 1, {
            "this_class": "add_button",
            "text": "ADD"
        })
        az.style_button("add_button", 1, {
            "background": "#33d9b2",
            "color": "#141414"
        })
        az.add_event("add_button", 1, {
            "type": "click",
            "function": function() {

                update_execution_object(id, key, value)
                //build_and_save_execution_object("text")
            }
        })
    }
}