# Dark Z 🌙 

A simple Tampermonkey user script that forces **dark mode** on [chat.z.ai](https://chat.z.ai).
Developed by **Space-00**.

## 💡 What is this?

This script automatically adds a `dark` class to the HTML root element of `chat.z.ai`, ensuring that the dark theme is enabled—regardless of the site's default setting. It also monitors changes and reapplies dark mode if needed.

## 🛠️ How to Use

1. **Install Tampermonkey** (if you haven't already):

   * [Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
   * [Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
   * [Edge](https://tampermonkey.net/?ext=dhdg&browser=edge)

2. **Create a new script** in Tampermonkey:

   * Click on the Tampermonkey icon in your browser
   * Choose **"Create a new script"**

3. **Replace the default code** with the contents of [script.js](https://github.com/Space-00/Dark-Z/blob/main/script.js)

4. **Save** the script (File → Save or `Ctrl+S` / `Cmd+S`)

5. Visit [chat.z.ai](https://chat.z.ai) — dark mode should be automatically applied.




## 🧠 How it Works

* Forces `dark` class on the `<html>` element.
* Uses a `MutationObserver` to ensure dark mode stays enabled even if the page tries to remove it.

## ✅ License

Free to use. Credit to **Space-00** appreciated!
 
