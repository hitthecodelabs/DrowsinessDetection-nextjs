import os

def print_directory_structure(path, indentation):
    for item in os.listdir(path):
        if item.startswith(".")==False and "pyc" not in item and "node_modules" not in item:
            item_path = os.path.join(path, item)
            if os.path.isdir(item_path):
                print(f"{indentation}├── {item}/")
                print_directory_structure(item_path, indentation + "│   ")
            else:
                print(f"{indentation}└── {item}")

print_directory_structure(os.getcwd(), "")