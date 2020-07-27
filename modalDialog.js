//This will create a ModalDialog object for non-IE browsers
function ModalDialogObj()
{
this.value = "";
this.modalDialogWindow;
}

//This method will create accept the buttons, header text and the body message of the newly created modal dialog window
ModalDialogObj.prototype.CreateModalDialog = function(buttons, headerText, bodyText)
{
var Buttons='';

switch(buttons)
{
case "ok" : Buttons = '<input type=button onclick=javascript:CloseForm(\"Ok\"); value=Ok>';
break;
case "yesno" : Buttons = '<input type=button onclick=javascript:CloseForm(\"Yes\"); value=Yes>';
Buttons += ' <input type=button onclick=javascript:CloseForm(\"No\"); value=No>';
break;
case "yesnocancel" : Buttons = '<input type=button onclick=javascript:CloseForm(\"Yes\"); value=Yes>';
Buttons += ' <input type=button onclick=javascript:CloseForm(\"No\"); value=No>';
Buttons += ' <input type=button onclick=javascript:CloseForm(\"Cancel\"); value=Cancel>';
break; 
}

this.ShowModalDialogWindow(headerText,bodyText,Buttons);
}

//This is the main function which creates the modal dialog window
ModalDialogObj.prototype.ShowModalDialogWindow = function(Title,BodyText,Buttons)
{

var args='width=350,height=125,left=325,top=300,toolbar=0,';
args+='location=0,status=0,menubar=0,scrollbars=1,resizable=0'; 

this.modalDialogWindow=window.open("","",args); 
this.modalDialogWindow.document.open(); 
this.modalDialogWindow.document.write('<html>');
this.modalDialogWindow.document.write('<head>'); 
this.modalDialogWindow.document.write('<title>' + Title + '</title>');
this.modalDialogWindow.document.write('<script' + ' language=JavaScript>');
this.modalDialogWindow.document.write('function CloseForm(Response) ');
this.modalDialogWindow.document.write('{ ');
this.modalDialogWindow.document.write(' window.opener.obj.value = Response; ');
this.modalDialogWindow.document.write(' window.close(); ');
this.modalDialogWindow.document.write('} ');
this.modalDialogWindow.document.write('</script>');
this.modalDialogWindow.document.write('</head>'); 
this.modalDialogWindow.document.write('<body onblur="window.focus();">');
this.modalDialogWindow.document.write('<table border=0 width="95%" align=center cellspacing=0 cellpadding=2>');
this.modalDialogWindow.document.write('<tr><td align=left>' + BodyText + '</td></tr>');
this.modalDialogWindow.document.write('<tr><td align=left><br></td></tr>');
this.modalDialogWindow.document.write('<tr><td align=left><br></td></tr>');
this.modalDialogWindow.document.write('<tr><td align=center>' + Buttons + '</td></tr>');
this.modalDialogWindow.document.write('</body>');
this.modalDialogWindow.document.write('</html>'); 
this.modalDialogWindow.document.close(); 
this.modalDialogWindow.focus(); 
}