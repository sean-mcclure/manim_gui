az.style_page({
    "background" : "#303952"
})

az.add_sections({
    "this_class" : "main_sections",
    "sections" : 1
})

az.style_sections("main_sections", 1, {
   "background" : "#596275",
   "flush" : true,
   "height" : "400px"
})

az.add_layout("main_sections", 1, {
    "this_class": "main_layout",
    "row_class": "main_layout_rows",
    "cell_class": "main_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})

az.style_layout("main_layout", 1, {
    "height": "100%",
    "width" : "100%",
    "column_widths": ['50%', '50%'],
    "border": 1
})

az.add_button("main_layout_cells", 1, {
    "this_class" : "circle_button",
    "text" : "CIRCLE"
})

az.style_button("circle_button", 1, {
    "background" : "#33d9b2",
    "color" : "#141414"
})

az.add_event("circle_button", 1, {
    "type" : "click",
    "function" : function() {
        build_and_save_execution_object("make_circle")
    }
})

az.add_layout("main_layout_cells", 1, {
    "this_class": "text_layout",
    "row_class": "text_layout_rows",
    "cell_class": "text_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})

az.style_layout("text_layout", 1, {
    "height": "auto",
    "width" : "auto",
    "border": 0
})

az.add_input("text_layout_cells", 1, {
    "this_class": "hold_title",
    "placeholder": "title...",
    "spellcheck": false,
    "maxlength" : 30
})

az.add_button("text_layout_cells", 2, {
    "this_class" : "text_button",
    "text" : "ADD"
})

az.style_button("text_button", 1, {
    "background" : "#33d9b2",
    "color" : "#141414"
})

az.add_event("text_button", 1, {
    "type" : "click",
    "function" : function() {
        build_and_save_execution_object("add_text")
    }
})