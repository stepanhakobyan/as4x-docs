﻿<html>
<head>
<style type="text/css">
.style2 {
	font-family: Arial;
}
.style7 {
	font-size: medium;
}
 table.MsoNormalTable
	{line-height:115%;
	font-size:11.0pt;
	font-family:"Calibri","sans-serif";
	}
a:link
	{color:blue;
	text-decoration:underline;
	text-underline:single;
}
.style8 {
	border-width: 0;
}
.style9 {
	border: 1px solid #C5C5C5;
}
.style10 {
	font-weight: bold;
	border: 1px solid #C5C5C5;
}
    .style11
    {
        width: 2%;
        height: 93px;
    }
    .style12
    {
        border: 1px solid #C5C5C5;
        width: 71.0%;
        height: 93px;
    }
    </style>
</head>

<style type="text/css">

    .style2 {
	font-family: Arial;
        font-style: italic;
    }
.style7 {
	font-size: medium;
}
 table.MsoNormalTable
	{line-height:115%;
	font-size:11.0pt;
	font-family:"Calibri","sans-serif";
	}
a:link
	{color:blue;
	text-decoration:underline;
	text-underline:single;
}
.style8 {
	border-width: 0;
}
.style9 {
	border: 1px solid #C5C5C5;
}
.style10 {
	font-weight: bold;
	border: 1px solid #C5C5C5;
        width: 29.0%;
        height: 93px;
    }
    .style11
    {
        width: 2%;
        height: 93px;
    }
    .style12
    {
        border: 1px solid #C5C5C5;
        width: 71.0%;
        height: 93px;
    }
    .style14
    {
        font-family: Arial;
    }
    .style15
    {
        height: 40px;
        border: 1px solid #C5C5C5;
    }
</style>
<p>
    <font face="Arial"><span class="style7" lang="ru"><strong>Описание текстового 
    импортного файла дерева-справочника<br />
    <br />
    </strong><a href="../Imort_Files.html">См. также</a><strong>&nbsp;</strong>Пример&nbsp;<a href="../Imort_Files.html">Применяется к</a></span></font></p>
<p class="label">
    <font face="Arial"><b>Синтаксис<br />
    <br />
    #AS3XX# EXPORT-IMPORT DATA FILE</b></font></p>
<span class="style14"><strong><em>TREENODE {</em></strong></span><span 
    class="style2"><br />
</span><span class="style14"><strong><em>TREEID:</em></strong></span><span 
    class="style2"><em>treeId1</em><strong>&nbsp;&nbsp; </strong><em>&nbsp;</em><br />
<strong>CODE:</strong><em>tree</em>Code<em>1<br />
<strong>NAME:</strong>treeName1</em><strong><br />
</strong><em><strong>ENAME:</strong>treeEName1</em><strong><br />
PARENT:</strong>treeParent<strong><br />
}<br />
<br />
<span class="style14"><em>TREENODE {</em></span><br />
<span class="style14"><em>TREEID:</em></span></strong><em>treeId2</em><strong>&nbsp;&nbsp;
<em>&nbsp;</em><br />
CODE:</strong><em>tree</em>Code<em>2<strong><br />
NAME:</strong>treeName2</em><strong><br />
<em>ENAME:</em></strong><em>treeEName2</em><strong><br />
PARENT:</strong>treeParent2<strong><br />
}</strong><br />
<br />
<strong>. . .</strong><br />
</span>&nbsp;&nbsp;<table cellpadding="0" class="style8">
    <tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
        <td class="style11" style="padding:3.75pt 3.75pt 3.75pt 3.75pt">
            <br />
            <br />
            <br />
        </td>
        <td class="style10" width="29%">
            <font face="Arial"><span lang="ru">Значение<br />
            <br />
            </span></font>
        </td>
        <td class="style12" style="padding:3.75pt 3.75pt 3.75pt 3.75pt" width="71%">
            <font face="Arial"><strong>Описание</strong></font></td>
    </tr>
    <tr style="mso-yfti-irow:0;mso-yfti-firstrow:yes">
        <td class="style9">
            <img height="16" src="../../IMAGES/pubfield.gif" width="16" /></td>
        <td class="style9" width="29%">
            <p class="MsoNormal">
                <em><span class="style2">treeId</span></em></p>
        </td>
        <td class="style9" width="71%">
            <p class="MsoNormal">
                <span lang="RU" style="font-size:12.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;
  mso-fareast-font-family:&quot;Times New Roman&quot;;mso-ansi-language:RU">обязательное 
                строковое выражение, определяющее идентификатор дерева-справочника, максимальная
                <font face="Arial">допустимая длина </font>&nbsp;которого не больше 8-и 
                символов.</span></p>
        </td>
    </tr>
    <tr>
        <td class="style9">
            <img height="16" src="../../IMAGES/pubfield.gif" width="16" /></td>
        <td class="style9" width="29%">
            <p class="MsoNormal">
                <span class="style2"><em>tree</em>Code</span></p>
        </td>
        <td class="style9" width="71%">
            <p class="MsoNormal">
                <span lang="RU" style="font-size:12.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;
  mso-fareast-font-family:&quot;Times New Roman&quot;;mso-ansi-language:RU">обязательное 
                строковое выражение, определяющее код <span lang="RU" 
                    style="font-size: 12.0pt; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-ansi-language: RU">
                дерева-справочника</span>, максимальная допустимая длина которого не больше 20-и 
                символов. </span>
            </p>
        </td>
    </tr>
    <tr style="mso-yfti-irow:1">
        <td class="style9">
            <img height="16" src="../../IMAGES/pubfield.gif" width="16" /></td>
        <td class="style9" width="29%">
            <p class="MsoNormal">
                <span class="style2"><em>treeName</em></span></p>
        </td>
        <td class="style9" width="71%">
            <p class="MsoNormal">
                <span lang="RU" style="font-size:12.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;
  mso-fareast-font-family:&quot;Times New Roman&quot;;mso-ansi-language:RU">необязательное 
                строковое выражение, определяющее описание </span><span lang="RU" 
                    style="font-size: 12.0pt; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-ansi-language: RU">
                дерева-справочника</span><span lang="RU" style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;;mso-fareast-font-family:
  &quot;Times New Roman&quot;;mso-ansi-language:RU"><o:p>.</o:p></span></p>
        </td>
    </tr>
    <tr style="mso-yfti-irow:2">
        <td class="style9">
            <img height="16" src="../../IMAGES/pubfield.gif" width="16" /></td>
        <td class="style9" width="29%">
            <p class="MsoNormal">
                <em><span class="style2">treeEName</span></em></p>
        </td>
        <td class="style9" width="71%">
            <p class="MsoNormal">
                <span lang="RU" style="font-size:12.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;
  mso-fareast-font-family:&quot;Times New Roman&quot;;mso-ansi-language:RU">необязательное 
                строковое выражение, определяющее описание <span lang="RU" 
                    style="font-size: 12.0pt; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-ansi-language: RU">
                дерева-справочника</span> на иностранном языке.</span></p>
        </td>
    </tr>
    <tr style="mso-yfti-irow: 3; mso-yfti-lastrow: yes">
        <td class="style15">
            <img height="16" src="../../IMAGES/pubfield.gif" width="16" /></td>
        <td class="style15" width="29%">
            <p class="MsoNormal">
                <span class="style2">treeParent</span></p>
        </td>
        <td class="style15" width="71%">
            <p class="MsoNormal">
                <span lang="RU" style="font-size:12.0pt;font-family:&quot;Arial&quot;,&quot;sans-serif&quot;;
  mso-fareast-font-family:&quot;Times New Roman&quot;;mso-ansi-language:RU">необязательное 
                строковое выражение, определяющее родителя <span lang="RU" 
                    style="font-size: 12.0pt; font-family: &quot;Arial&quot;,&quot;sans-serif&quot;; mso-fareast-font-family: &quot;Times New Roman&quot;; mso-ansi-language: RU">
                дерева-справочника, если добавляемый узел является листьем дерева-справочника</span>.</span></p>
        </td>
    </tr>
</table>
<p class="MsoNormal">
    &nbsp;</p>
