from time import gmtime, strftime

def ked_logger(err):
    inner = {}
    inner["datetime"] = strftime("%Y-%m-%d %H:%M:%S", gmtime())
    res = open("logs/kedion.log", "a")
    inner["error"] = str(err)
    res.write(str(inner) + "\n")
    res.close()