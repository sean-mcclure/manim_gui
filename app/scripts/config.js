az.hold_value.execution_object = {}
az.hold_value.piece_titles = {
    "Shapes": ["circle", "square", "rectangle", "ellipse", "pointer", "arrow", "rectangle", "ring"],
    "Actions": ["move_to", "surround", "shift", "next_to", "add"],
    "Directions": ["UP", "DOWN", "LEFT", "RIGHT"],
    "Styling": ["width", "height", "fill_color", "fill_opacity", "color", "inner_radius", "outer_radius", "set_color_by_tex"],
    "Text": ["TextMobject"],
    "Equations": ["TextMobject"],
    "Graphing": ["get_graph", "get_vertical_line_to_graph", "get_graph_label", "input_to_graph_point"],
    "3D Scenes": ["NumberPlane", "calc_field2D", "set_camera_orientation", "move_camera", "begin_ambient_camera_rotation"],
    "SVG Files": [],
    "Effects": ["FadeOut", "rotate", "scale", "arrange_submobjects"]
}
az.hold_value.piece_calls = {
    "TextMobject": function() {
        az.add_layout("video_layout_cells", 1, {
            "this_class": "text_layout",
            "row_class": "text_layout_rows",
            "cell_class": "text_layout_cells",
            "number_of_rows": 1,
            "number_of_columns": 2
        })
        az.style_layout("text_layout", 1, {
            "height": "auto",
            "width": "auto",
            "border": 0
        })
        az.add_input("text_layout_cells", 1, {
            "this_class": "hold_title",
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
                build_and_save_execution_object("add_text")
            }
        })
    },
    "circle": function() {
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
                build_and_save_execution_object("make_circle")
            }
        })
    }
}