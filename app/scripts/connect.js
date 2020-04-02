function call_manim(type) {
    params = {
        "function": "call_shell",
        "manim_choice": type
    }
    az.call_api({
        "url": "http://127.0.0.1:5000/call_function",
        "parameters": params,
        "done": function(data) {
            az.empty_contents("main_layout_cells", 2)
            az.add_video("main_layout_cells", 2, {
                "this_class": "video_preview",
                "video_path": "../manim/videos/example_scenes/480p15/" + type + ".mp4"
            })
            az.style_video("video_preview", 1, {
                "width": "90%",
                "align": "center"
            })
        }
    })
}