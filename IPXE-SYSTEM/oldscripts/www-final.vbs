Const articleParam = 1
Const CheckCopyFileParam= 0
CheckCopyFilefileup=Array("jquery213.js","slider.js","slider.css","ShowPhotos.html")
Const HideFilesParam= 1



'//////////////////////////////////////////////
CreateTxtFile()
Const ForReading = 1
Const ForWriting = 2
Set FSO = CreateObject("Scripting.FileSystemObject")
Set objFileA = FSO.OpenTextFile("ScriptLog.txt", ForWriting)
Set objShell = CreateObject("Shell.Application")
Public hidden



objFileA.WriteLine("<head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8' /></head>")
'objFileA.WriteLine("<style> table, th, td {border: 1px solid red;</style>")
objFileA.WriteLine("<script src=jquery213.js></script>")
objFileA.WriteLine("<script src=js.js></script>")
objFileA.WriteLine("<link rel=stylesheet type=text/css href=css.css>")
objFileA.WriteLine("<h1></h1><hr>")
objFileA.WriteLine("<div class=menu>")
objFileA.WriteLine("</div>")
objFileA.WriteLine("<div class=splash>ok")
objFileA.WriteLine("</div>")
objFileA.WriteLine("<div class=CSSTableGenerator>")
objFileA.WriteLine("<table>")

ShowSubfolders FSO.GetFolder(FSO.GetAbsolutePathName("."))

objFileA.WriteLine("</table>")
objFileA.WriteLine(" </div>")
objFileA.Write Now
objFileA.Close
Wscript.Echo "OK"


ConvertUtf8()
CreateHtmlFile()


'//////////////////////////////////

Sub ShowSubFolders(Folder)
'wscript.echo Folder.SubFolders.Count
For Each Subfolder in Folder.SubFolders

slide=""				
'if Subfolder.name="unspecified" then
if Mid(Subfolder.name,1,3)="000" or InStr(Subfolder.name,".files")>0 or InStr(Subfolder.name,"athina")>0 then
'HIDE THESE FOLDERS
else

		Set colFiles = Subfolder.Files
		relPath=Mid(Replace(Subfolder.Path,"\","/"),(Len(WScript.ScriptFullName))-(Len(WScript.ScriptName))+1,(Len(WScript.ScriptFullName)))
		catPath=Replace(relPath,"/","->")
			'if Subfolder.Files.count<>0 then
		countbasefolder = Len(FSO.GetAbsolutePathName(".")) - Len(Replace(FSO.GetAbsolutePathName("."), "\", ""))
			'Wscript.Echo countbasefolder
		countsubfolder = Len(Subfolder.Path) - Len(Replace(Subfolder.Path, "\", ""))
			'Wscript.Echo countsubfolder
			'if Subfolder.Files.count<>0 then
		if countsubfolder-countbasefolder=1 then
		'CREATE MAIN HEADERS
		objFileA.WriteLine("<tr class='header'><th><span class='sign'></span>"& catPath & "</th> </tr>")
					'If you want to appear the article under the header
		'article Subfolder.Path,relPath
		else
		'CREATE SUB HEADERS
		objFileA.WriteLine("<tr class='subheader" & countsubfolder-countbasefolder-1 &"'><th><span class='sign'></span>"& catPath & "</th> </tr>")
		
		'CREATE Article
		'///////////////////////////////////
		'''''''''''''''''''''''''''articlefromtext Subfolder.Path,objFile.Name,relPath
		'///////////////////////////////////
		'''articlefromhtml Subfolder.Path,objFile.Name,relPath
		'///////////////////////////////////
		end if

	For Each objFile in colFiles
	hidden=0
	
		'COPY SPECIFIC FILES AND REPLACE
		'///////////////////////////////////
		
		if  CheckCopyFileParam= 1 then
		CheckCopyFile objFile,Subfolder,CheckCopyFilefileup
		End If
		'///////////////////////////////////
		
		'Hide SPECIFIC FILES
		'///////////////////////////////////
		
		if  HideFilesParam= 1 then
		HideFiles Subfolder.Path,objFile.Name 					
		End If
		'///////////////////////////////////

		
		if InStr(objFile.Name,".txt")>0   then
		
		if articleParam = 1  then
		articlefromtext Subfolder.Path,objFile.Name,relPath	
		End If	
		
							'Hide the specific file
							'wscript.echo Subfolder.Path & objFile.Name
							hidden=1
							'Wscript.Echo objFile_Name
							
		End If	
		
		
	
		
							'Create the list of images
							'///////////////////////////////////
							if InStr(objFile.Name,".jpg")>0 OR InStr(objFile.Name,".JPG")>0  then
							
							if InStr(objFile.Name,"icon")>0 THEN
							'Do not show images that contain icon
							else
							'I Put to the end of each Slide image the number 1
							slide=slide &"<img src='"& relPath & "/" & objFile.Name & "1" & "' height='100' width='100' style='float:left;margin:0px 5px 5px 0px'/>"
							End If	
							
							End If	
'///////////////////////////////////
							
if InStr(objFile.Name,".mp4")>0 then		
slide=slide+"<video poster='" & relPath & "/PreviewImage.jpg" & _
"' height='100' width='200' controls='controls'> <source src='" & relPath & "/" & objFile.Name & "' type='video/mp4' /></video>"	
End If	
'///////////////////////////////////	
		
		
		
		
		
		
		Set objFolder = objShell.Namespace(Subfolder.path)
		'CREATE FOLDERITEM FROM FILENAME
		set objFolderItem = objFolder.ParseName(objFile.Name)
			
		if hidden=0 then	
			if countsubfolder-countbasefolder=1 then
				'CREATE FILES WHICH EXISTS OUTSIDE FROM FOLDER
				objFileA.WriteLine("<tr class='free'><td>" & "<a href='" & relPath & "/" & objFile.Name & "' target='_blank' style='text-decoration: none'>"& objFile.Name & "</a>" & "<span class='properties'>"& objFolder.GetDetailsOf(objFolderItem, 3)& "</span>" & "</td> </tr>")
			else
				'Wscript.echo objFolder.GetDetailsOf(objFolderItem, 3) 
				objFileA.WriteLine("<tr class='hidden link'><td>" & "<a href='" & relPath & "/" & objFile.Name & "' target='_blank' style='text-decoration: none'>"& objFile.Name & "</a>" & "<span class='properties'>"& objFolder.GetDetailsOf(objFolderItem, 3)& "</span>" & "</td> </tr>")
			End If
		end if	
			
	Next
	'article Subfolder.Path,relPath
'objFileA.WriteLine("<tr class='slideshow hidden'><td>" & "<div class='slideshow hidden' >"& Subfolder.path & "</div></td> </tr>")
if slide<>"" THEN
objFileA.WriteLine("<tr class='slideshow hidden'><td>" & _ 
"<div class='buttonprev' id='prev'><<</div><div class='buttonnext' id='next'>>></div>" & _
"<div class='slideshow hidden' >"& slide & "</div></td> </tr>")	
objFileA.WriteLine("<tr class='line hidden'><td>" & "" & "</td> </tr>")
end if	
'objFileA.WriteLine("<tr class='slideshow hidden'><td>" & "<img src='line.png' height='20' width='100' style='float:left;margin:0px 5px 5px 0px'/>" & "</td> </tr>")
'objFileA.WriteLine("<tr class='slideshow hidden'><td>" & "--------" & "</td> </tr>")
'Wscript.echo slide
	
	
		ShowSubFolders Subfolder
		
End If
'''''''objFileA.WriteLine("</table>")
Next
End Sub

Sub HideFiles(Subfolder_Path,objFile_Name)
							if objFile_Name="article.docx" then	
								'Wscript.Echo objFile.Name
								'CONVERT SPECIFIC DOCX FILE TO HTML
								wordtohtml Subfolder_Path & "\" & objFile_Name,""
								
								'Hide the specific file
								hidden=1
							End If	
				
				
				'/////////////////////////////
				'''if Mid(objFile_Name,Len(objFile_Name)-4,Len(objFile_Name))=".docx" then
				
				'CONVERT SPECIFIC DOCX FILE TO HTML
				'''wordtohtml Subfolder_Path & "\" & objFile_Name,""
				'''hidden=1
				'''End If
				'/////////////////////////////
	
							if InStr(objFile_Name,"icon")>0 or InStr(objFile_Name,".mp4")>0  then
							
							'Hide the specific file
							hidden=1
							'Wscript.Echo objFile_Name
							End If	
end sub


'/////////////////////////////
Sub articlefromhtml(Subfolder_Path,objFile_Name,Relative_Path)


Set fs = CreateObject("Scripting.FileSystemObject")
						If fs.FileExists(Subfolder_Path & "\"& "icon.docx.html") Then
						Set MyFile = fs.OpenTextFile(Subfolder_Path & "\"& "icon.docx.html", ForReading)
						
								If MyFile.AtEndOfStream Then
									ReadAllTextFile = ""
								Else
									ReadAllTextFile = MyFile.ReadAll
								End If
												
						'wscript.echo ReadAllTextFile

						
											
						'CREATE ROW FOR TEXT AND ICON
						objFileA.WriteLine("<tr class='hidden text'" & _
						"><td>"& "<div class='text' ><img src='"& Relative_Path & "/icon.jpg" & "' height='200' width='140' style='float:left;margin:0px 5px 5px 0px'/>"& _
						ReadAllTextFile & _
						"</div>" & "</td> </tr>")
						else
						'wscript.echo "aaa"
						End If

end sub
'/////////////////////////////
					Sub articlefromtext(Subfolder_Path,objFile_Name,Relative_Path)
					Set fs = CreateObject("Scripting.FileSystemObject")
											If fs.FileExists(Subfolder_Path & "\" & objFile_Name) Then
											
											
											Set MyFile = fs.OpenTextFile(Subfolder_Path & "\" & objFile_Name, ForReading)
											
													If MyFile.AtEndOfStream Then
														ReadAllTextFile = ""
													Else
														ReadAllTextFile = MyFile.ReadAll
														'ReadAllTextFile=Replace(ReadAllTextFile,".",".<br>")
														ReadAllTextFile=Replace(ReadAllTextFile,Chr(13),"<br>")
														ReadAllTextFile=Replace(ReadAllTextFile,"." & Chr(13),"<br>")
													End If
																	
											'wscript.echo ReadAllTextFile

											'wscript.echo Relative_Path & "/" & Mid(objFile_Name,1,Len(objFile_Name)-4) & ".jpg"
																
											'CREATE ROW FOR TEXT AND ICON
											'wscript.echo Subfolder_Path & "\icon" & Mid(objFile_Name,1,Len(objFile_Name)-4) & ".jpg"
												If fs.FileExists(Subfolder_Path & "\icon"  & Mid(objFile_Name,1,Len(objFile_Name)-4) & ".jpg") Then
																																				objFileA.WriteLine("<tr class='hidden text'>" & _
												"<td>"& "<div class='text' ><img src='"& Relative_Path & "/icon" & Mid(objFile_Name,1,Len(objFile_Name)-4) & ".jpg" & "' height='200' width='140' style='float:left;margin:0px 5px 5px 0px'/>"& _
												ReadAllTextFile & _
												"</div>" & "</td> </tr>")
												else
												objFileA.WriteLine("<tr class='hidden text'>" & _
												"<td>"& "<div class='text' >"& _
												ReadAllTextFile & _
												"</div>" & "</td> </tr>")
												End If
											
											
											
											else
											
											End If		

					end sub



'//////////////////////////////////
sub wordtohtml(myfilepath,mytext)
	Const wdFormatText =  2
	Const wdFormatPDF = 17
	Const wdFormatFilteredHTML = 10
	Const ppSaveAsJPG = 17
	Const ppSaveAsPNG = 18
	Const ppSaveAsPDF = 32
	Const ppSaveAsHTML = 12
	Const ForAppending = 8

	Set objWord = CreateObject("Word.Application")
	Set objDoc = objWord.Documents.Open(myfilepath)
	objDoc.SaveAs myfilepath & ".html", wdFormatFilteredHTML
	objDoc.Close
	objWord.Quit

	set objFSO = CreateObject("Scripting.FileSystemObject")
	set objFile = objFSO.OpenTextFile(myfilepath & ".html", ForAppending, True)
	objFile.WriteLine(mytext)
	objFile.Close

end sub
'//////////////////////////////////
Sub CheckCopyFile(objFile,Subfolder,fileup)
'fileup=Array("jquery213.js","slider.js","slider.css","ShowPhotos.html")
For Each fi in fileup
		'if InStr(txt,"beautiful")=0
	if objFile.Name=fi then
			
		'if objFile.Name="jquery213.js" then
	curdir=FSO.GetAbsolutePathName(".")
		'Wscript.Echo curdir & Subfolder.Path
		'objFSO.DeleteFile("index.html")
		'Wscript.Echo fs.GetAbsolutePathName(".")
	FSO.CopyFile curdir & "\" & objFile.Name , Subfolder.Path & "\" 
		'Wscript.Echo curdir & "\" & objFile.Name & "---" & Subfolder.Path & "\" 
		'Set fs = Nothing
	end if
next	

End Sub
'//////////////////////////////////
Sub CreateTxtFile()
Set objFSO=CreateObject("Scripting.FileSystemObject")
outFile="ScriptLog.txt"
Set objFile = objFSO.CreateTextFile(outFile,True)
objFile.Write "---" & vbCrLf
objFile.Close
End Sub
'//////////////////////////////////
Sub CreateHtmlFile()
Set objFSO = CreateObject("Scripting.FileSystemObject")

If objFSO.FileExists("index.html") Then
objFSO.DeleteFile("index.html")
	else
End If





objFSO.MoveFile "ScriptLog2.txt" , "index.html"
End Sub
'//////////////////////////////////
Sub ConvertUtf8()
Const ForReading = 1, ForWriting = 2
Dim fso, MyFile, FileName
 Set fso = CreateObject("Scripting.FileSystemObject")
Set MyFile = fso.OpenTextFile("ScriptLog.txt", ForReading)

    ' Read from the file.
    If MyFile.AtEndOfStream Then
        ReadAllTextFile = ""
    Else
        ReadAllTextFile = MyFile.ReadAll
    End If
MyFile.Close

fso.DeleteFile("ScriptLog.txt")

Set stream = CreateObject("ADODB.Stream")
stream.Open
stream.Type     = 2 'text
stream.Position = 0
stream.Charset  = "utf-8"
stream.WriteText ReadAllTextFile
stream.SaveToFile "ScriptLog2.txt", 2
stream.Close

End Sub


