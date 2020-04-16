function make_exec(id, position) {
    var shapes = []
    var positions = []
    $.each($(".timeline_button"), function(button) {
        shapes.push($(this).text())
        positions.push($(this).position().left)
    })
    az.hold_value.execution_object[az.grab_value("hold_title", 1)] = []
    shapes.forEach(function(shape, i) {
        var inner = {}
        inner.shape = shape
        inner.position = positions[i]
        az.hold_value.execution_object[az.grab_value("hold_title", 1)].push(inner)
    })
}