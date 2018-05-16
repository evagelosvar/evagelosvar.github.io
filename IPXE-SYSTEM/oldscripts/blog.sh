#! /bin/sh
#--------------
#TESTING COMMANDS
#--------------


filename="some part.some some.filetype"
notlast=${filename%.*}
last=${filename##*.}
first=${filename%%.*}
echo $first
notfirst=${filename#*.}
find . ! -name '*.html' ! -name '*.svn*'
#--------------------
#END TESTING COMMANDS
#--------------------

CreateList()
{
#pubweb folder view online
#baseonline="https://docs.google.com/gview?url=https://5b6ce8acb0d4523cc450355d0457f5a628165d5d-www.googledrive.com/host/0B0MaJq6lSGTBUjVwQS11S3dVYjA/"
#echo $baseonline
baseonline="https://docs.google.com/gview?url="
#pubweb folder
#base="https://5b6ce8acb0d4523cc450355d0457f5a628165d5d-www.googledrive.com/host/0B0MaJq6lSGTBUjVwQS11S3dVYjA/"
#echo $base
base=""
#--------------
file="blogindex.html"
dir=//hp-pc/Users/USER/Google\ Drive/pubWeb/library\ of\ Orthodox\ fathers
#dir=//hp-pc/Users/USER/Google\ Drive/pubWeb/school
#return
echo $link > $file
echo "<script src=jquery213.js></script>">> $file
echo "<script src=blog.js></script>">> $file
echo "<link rel=stylesheet type=text/css href=blog.css>">> $file
echo "<h1>Orthodox Christian Library</h1><hr>">> $file
#start=`expr length "$dir"`
start="${#dir}"
start=`expr $start + 1` #maybe i shoud eliminate this adding a / to the dir
IFS=""
#excludes 000 and temp dirs
find $dir -type d \( -name "000*" -o -name "temp" \) -prune -o ! -name '*.css' ! -name '*.ini' ! -name '*.vbs' ! -name '*.js' ! -name '*.jpg' ! -name '*.html' -print | while  read  link

#find $dir ! -name '*.ini' ! -name '*.vbs' | while  read  link
do
#end=`expr length "$link"`
end="${#link}"
	if [ -d $link ]
	then
		txtlink=${link:$start:$end}
	#echo "<h3><a href='"$base$link"'>$txtlink</a></h3>" >> $file
	echo "<h3>$txtlink</h3>" >> $file
	else
		txtlink=${link:$start:$end} # maybe i should erase this
		#finds the relative basename
		txtlink=`basename $txtlink`
		#eliminates the file extension
		txtlink=`echo "$txtlink" | cut -d'.' -f1`
	echo "<a href='"$base$link"'>$txtlink</a>""<span>--></span><a href='"$baseonline$link"'>view</a>""<br>" >> $file
	fi
done
IFS=
}
CreateList

sed -i 's/\.\///g' $file
#baseonlinesed="https\:\/\/docs.google.com\/gview\?url=https:\/\/5b6ce8acb0d4523cc450355d0457f5a628165d5d-www.googledrive.com\/host\/0B0MaJq6lSGTBUjVwQS11S3dVYjA\/library\ of\ Orthodox\ fathers\/"
baseonlinesed="https:\/\/5b6ce8acb0d4523cc450355d0457f5a628165d5d-www.googledrive.com\/host\/0B0MaJq6lSGTBUjVwQS11S3dVYjA\/library\ of\ Orthodox\ fathers\/"
dirsed="\/\/hp-pc\/Users\/USER\/Google\ Drive\/pubWeb\/library\ of\ Orthodox\ fathers\/"
#dirsed="\/\/hp-pc\/Users\/USER\/Google\ Drive\/pubWeb\/school\/"
sed -i 's/'"$dirsed"'/'"$baseonlinesed"'/g' $file

return

split -l 333 blogindex.html school/xblog
#--------------
base=""
echo $page > "x"$file
ls school/xblog*|while  read  page
do
echo "<a href='"$base$page"'>$page</a>""--""<br>" >> "x"$file
done
