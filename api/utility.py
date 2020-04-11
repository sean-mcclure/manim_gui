import os
import json

config = {
    "input_path" : "/Users/seanmcclure/PycharmProjects/manim_gui/manim",
    "output_path" : "/Users/seanmcclure/PycharmProjects/manim_gui/manim"
}

def remove_file(path_to_file):
    os.system("rm " + path_to_file)

def list_videos(path_to_directory):
    res = os.listdir(path_to_directory)
    return(res)

def call_shell(manim_choice):
    os.chdir(config["input_path"])
    os.system("INPUT_PATH=" + config["input_path"] + " OUTPUT_PATH=" + config["output_path"] + " docker-compose run manim example_scenes.py " + manim_choice + " -l")
    os.chdir("../")

def write_execs_to_disk(execs):
    with open('manim/executions/execs.json', 'w') as outfile:
        json.dump(execs, outfile)

execs = {}
def build_execution_object(project, execution):
    execs[project] = []
    execs[project].append(execution)
    write_execs_to_disk(execs)
    return True