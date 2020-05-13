az.hold_value.execution_object = {}

function make_exec(id, position) {
    var shapes = []
    var positions = []
    var ids = []
    var text = []
    $.each($(".timeline_button"), function(button) {
        shapes.push($(this).text())
        positions.push($(this).position().left)
        ids.push($(this).attr("id"))
        text.push(az.fetch_data("timeline_button", az.get_target_instance($(this).attr("id")), {"key" : "text"}))
    })
    az.hold_value.execution_object[az.grab_value("hold_title", 1)] = []
    shapes.forEach(function(shape, i) {
        var inner = {}
        inner.id = ids[i]
        inner.shape = shape
        inner.position = positions[i]
        inner.text = text[i]
        az.hold_value.execution_object[az.grab_value("hold_title", 1)].push(inner)
    })
}

function update_execution_object(id, key, value) {
    Object.values(az.hold_value.execution_object).forEach(function(arr) {
        arr.forEach(function (elem) {
            if(elem.id === id) {
                elem[key] = value
            }
        })
    })
    az.store_data("timeline_button", az.get_target_instance(id), {
        "key" : key,
        "value" : value
    })
}

function add_in_extras(id) {

}

