function make_exec(id, position) {
    var shapes = []
    var positions = []
    var ids = []
    $.each($(".timeline_button"), function(button) {
        shapes.push($(this).text())
        positions.push($(this).position().left)
        ids.push($(this).attr("id"))
    })
    az.hold_value.execution_object[az.grab_value("hold_title", 1)] = []
    shapes.forEach(function(shape, i) {
        var inner = {}
        inner.id = ids[i]
        inner.shape = shape
        inner.position = positions[i]
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
}

