function create_and_play_video_from_execution_object() {
    params = {
        "function": "call_shell",
        "manim_choice": "piece_together_scene"
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/call_function",
        "parameters": params,
        "done": function() {
            az.empty_contents("video_layout_cells", 2)
            az.add_video("video_layout_cells", 1, {
                "this_class": "video_preview",
                "video_path": "../manim/videos/example_scenes/480p15/piece_together_scene.mp4"
            })
            az.style_video("video_preview", 1, {
                "width": "600px",
                "align": "center",
                "border-radius" : "6px"
            })
            az.remove_element("spinner", 1)
        }
    })
}

function build_and_save_execution_object(type) {
    az.add_spinner({
        "this_class" : "spinner",
        "image_path" : "img/3b1b.png"
    })
    az.style_spinner("spinner", 1, {
        "width" : "120px"
    })
    az.hold_value.recent_type = type
    params = {
        "function": "build_execution_object",
        "project" : "my_project_1",
        "execution": type
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/call_function",
        "parameters": params,
        "done": function() {
            create_and_play_video_from_execution_object()
        }
    })
}

az.hold_value.execution_object = {}
function build_execution_object(project_title) {
   az.hold_value.execution_object["project"] = project_title
   az.hold_value.execution_object[project_title] = ""
}