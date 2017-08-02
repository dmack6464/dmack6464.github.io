#NoTrayIcon
gui -caption +toolwindow +alwaysontop

	gui,Default

	gui,+LastFound

        Gui, Font, cWhite

        Gui, Add, Text,, PrintScreen by D Mack

        Gui, Font, Underline cBlue
        Gui, Add, Text, yp+15 gLink1, My YT Channel
        Gui, Font
        Gui, Font, cWhite

	gui, add, button, yp+15 gDone, Print Screen

	gui, add, button, xp+75 gguiclose, Exit

        Gui, +ToolWindow -MinimizeBox

        gui,color,070707

        gui,show,,PrintScreen by D Mack

        WinSet, Transparent, 220

        OnMessage(0x201, "WM_LBUTTONDOWN")

$esc::exitapp


        return


       

   Done:

     {
     gui,hide
     GetKeyState, isctrl, ctrl
if isctrl = D
{
     send ^{PrintScreen}
}
if isctrl = U
{
     send {PrintScreen}
}

     sleep,100
     gui,show,,PrintScreen by D Mack
     return
     }

   guiclose:

     {
     gui,destroy
     ExitApp
     return
     }

   Link1:

     {
     run, https://www.youtube.com/channel/UC5K-mh8upxbHGfi013Hs-Aw
     }

return

WM_LBUTTONDOWN()
{
	PostMessage, 0xA1, 2
}
return