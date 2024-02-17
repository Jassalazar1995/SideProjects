import subprocess
import pyautogui
import time

# Opens up Snipping tool
#subprocess.Popen('C:\\Windows\\System32\\SnippingTool.exe')

#print(pyautogui.position())

#Starts the Snipping tool
pyautogui.keyDown('winleft')
pyautogui.keyDown('shift')
pyautogui.keyDown('s')
pyautogui.keyUp('winleft')
pyautogui.keyUp('shift')
pyautogui.keyUp('s')

#Selects the area to snip
pyautogui.moveTo(33,524)
time.sleep(0.75)
pyautogui.mouseDown(button = 'left')
time.sleep(0.75)
pyautogui.moveTo(530,914)
pyautogui.mouseUp()

#Opens the snip and sketch browser
time.sleep(1)
pyautogui.moveTo(1789,1000)
time.sleep(1)
pyautogui.click()
time.sleep(1)
#Saves the file
pyautogui.keyDown('ctrlleft')
pyautogui.keyDown('s')
pyautogui.keyUp('ctrl')
pyautogui.keyUp('s')
time.sleep(1)
pyautogui.write('%s' % (i))
pyautogui.keyDown('enter')
pyautogui.keyUp('enter')

#Close out snipping tool window
pyautogui.keyDown('altleft')
pyautogui.keyDown('f4')
pyautogui.keyUp('altleft')
pyautogui.keyUp('f4')



