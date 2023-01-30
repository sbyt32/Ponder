import requests
import shutil
import time
import sys
img_to_fetch = [
    ("eld","39"),
    ("mh2","244"),
    ("peld","39p"),
    ("ons","313"),
    ("2ed","10"),
    ("vis","23"),
    ("mh2","138"),
    ("mh1","145"),
    ("ktk","97"),
    ("grn","91"),
    ("emn","69"),
    ("khm","139"),
    ("v13","9"),
    ("mh2","436"),
    ("rtr","241"),
    ("stx","186"),
    ("bro","69"),
    ("mic","24"),
    ("vow","38"),
    ]


def send_req(url:str, **kwargs):
    resp = requests.get(url, **kwargs)

    if not resp.status_code == 200:
        print(f'{url} failed to get!')
        sys.exit(1)

    return resp

def get_images(imgs:list):
    for (set_name, col_num) in imgs:
        card_img = send_req(f'https://api.scryfall.com/cards/{set_name}/{col_num}?format=image', stream=True)

        with open(f'static/img/{set_name}_{col_num}.jpg', 'wb') as write_img:
            card_img.raw.decode_content = True
            shutil.copyfileobj(card_img.raw, write_img)
    time.sleep(.5)
get_images(img_to_fetch)