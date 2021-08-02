# Remedy - PowerShell & Windows Terminal

## PowerShell Installation

1. Download a Remedy iTerm2 theme (`Remedy - <Theme>.itermcolors`)
2. Download and unzip [`ColorTool` from Microsoft](https://github.com/microsoft/terminal/releases/tag/1904.29002)
3. Move the iTerm2 theme to `ColorTool\schemes\`
4. Run `'.\ColorTool.exe' -b 'Remedy - <Theme>.itermcolors'` to apply the theme to your current console and to the defaults in the registry

## Windows Terminal Installation

1. Follow steps 1-3 in the PowerShell Installation
2. Run `'.\ColorTool.exe' -t 'Remedy - <Theme>.itermcolors'` to output the colors in JSON format for copying into a Windows Terminal settings file
3. Locate your Windows Terminal settings file and copy the output from the previous step into it


## Windows Accent Color

1. Open settings > personalization > colors
2. Click [+] Custom Color
3. Click "More ▿"
4. Enter `#252526` to match the Remedy - VS Code theme
