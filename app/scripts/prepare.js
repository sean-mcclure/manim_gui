az.style_page({
    "background" : "#303952"
})

az.add_sections({
    "this_class" : "main_sections",
    "sections" : 1
})

az.style_sections("main_sections", 1, {
   "background" : "#596275",
   "flush" : true
})

az.add_layout("main_sections", 1, {
    "this_class": "main_layout",
    "row_class": "main_layout_rows",
    "cell_class": "main_layout_cells",
    "number_of_rows": 1,
    "number_of_columns": 2
})

az.style_layout("main_layout", 1, {
    "height": "auto",
    "width" : "100%",
    "column_widths": ['50%', '50%'],
    "border": 1
})

