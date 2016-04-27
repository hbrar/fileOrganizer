$(document).ready(function() {
  //npm install --save fs-extra
  var fse = require('fs-extra');
  var path = require('path');
  var totalFiles;
  var count=0;
  var controlButton = $('#controlButton');
  $('#selectButton').click(function() {
    $('#fileBrowser').click();
  });
  $('#destButton').click(function() {
    $('#chooseDest').click();
  });
  $('#controlButton').click(function() {
    var source = $('#fileBrowser').val();
    var destPath = $('#chooseDest').val();
    if (source !== '' && destPath !== '') {
      //the line of code below gets executed before the "list" gets copied to listOfFiles if you use asynch readdir
      var listOfFiles = fse.readdirSync(source);
      //filtering most of the folders (except ones with dot in their names) using [] instead of pop() because pop() doesnt return undefined but name of foder
      //listOfFiles=listOfFiles.filter(function(element,index,arr){if(element.split('.')[1]!==undefined)return true;});
      //FINAL CODE FOR FILTERING FOLDERS
      listOfFiles = listOfFiles.filter(function(element, index, arr) {
        var stats = fse.statSync(path.join(source, element));
        return stats.isFile();
      });
      totalFiles = listOfFiles.length;
      // listOfFiles.forEach(function(element, index, array){
      //   console.log(element.split(".")[1])});
      //here use pop() instead for files with more than one dot in name like example.abc.mp3
      
	  listOfFiles.forEach(function(element, index, array) {
		  count=count+1;
		var ext = element.split(".").pop().toLowerCase();
        var origin = path.join(source, element);
        // var progressbarValue = Math.ceil(((index + 1) / array.length) * 100);
        switch (ext) {
          //TEXT FILES
          case 'doc':
          case 'docx':
          case 'log':
          case 'msg':
          case 'odt':
          case 'pages':
          case 'rtf':
          case 'tex':
          case 'txt':
          case 'wpd':
          case 'wps':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'Text Files', element);
            //ensures if dir exists else it is created
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'Text Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //DATA FILES
          case 'csv':
          case 'dat':
          case 'gbr':
          case 'ged':
          case 'key':
          case 'keychain':
          case 'pps':
          case 'ppt':
          case 'pptx':
          case 'sdf':
          case 'tar':
          case 'tax2012':
          case 'tax2014':
          case 'tax2015':
          case 'vcf':
          case 'xml':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'Data Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'Data Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //IMAGES
          case 'png':
          case 'jpg':
          case 'bmp':
          case 'gif':
          case 'psd':
          case 'thm':
          case 'tif':
          case 'svg':
          case '3dm':
          case '3ds':
          case 'max':
          case 'obj':
          case 'dds':
          case 'pspimage':
          case 'tga':
          case 'thm':
          case 'yuv':
          case 'ai':
          case 'eps':
          case 'ps':
            var dest = path.join(destPath, 'Organized', 'Images',
              element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Images'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //PDF
          case 'pdf':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'PDF', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'PDF'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //AUDIO
          case 'aif':
          case 'iff':
          case 'm3u':
          case 'm4a':
          case 'mid':
          case 'mid':
          case 'mp3':
          case 'mpa':
          case 'ra':
          case 'wav':
          case 'wma':
            var dest = path.join(destPath, 'Organized', 'Audio',
              element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Audio'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //VIDEO
          case '3g2':
          case '3gp':
          case 'asf':
          case 'asx':
          case 'avi':
          case 'flv':
          case 'mov':
          case 'mp4':
          case 'mpg':
          case 'rm':
          case 'swf':
          case 'vob':
          case 'wmv':
		  case 'mkv':
            var dest = path.join(destPath, 'Organized', 'Video',
              element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Video'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //SPREADSHEET FILES
          case 'xlr':
          case 'xls':
          case 'xlsx':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'Spreadsheet Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'Spreadsheet Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //DATABASE FILES
          case 'accdb':
          case 'db':
          case 'dbf':
          case 'mdb':
          case 'pdb':
          case 'sql':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'Database FIles', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'Database Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //EXECUTABLES
          case 'apk':
          case 'app':
          case 'bat':
          case 'cgi':
          case 'com':
          case 'exe':
          case 'gadget':
          case 'jar':
          case 'pif':
          case 'vb':
          case 'wsf':
            var dest = path.join(destPath, 'Organized',
              'Executables', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Executables'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //CAD FILES
          case 'dwg':
          case 'dxf':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'CAD Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'CAD Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //GIS FILES
          case 'gpx':
          case 'kml':
          case 'kmz':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'GIS Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'GIS Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            // WEB FILES
          case 'asp':
          case 'aspx':
          case 'cer':
          case 'cfm':
          case 'csr':
          case 'css':
          case 'htm':
          case 'html':
          case 'js':
          case 'jsp':
          case 'php':
          case 'rss':
          case 'xhtml':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'Web Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'Web Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //PLUGIN FILES
          case 'crx':
          case 'plugin':
            var dest = path.join(destPath, 'Organized',
              'Plugin Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Plugin Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //FONT FILES
          case 'fnt':
          case 'fon':
          case 'otf':
          case 'ttf':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'Font Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'Font Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //SYSTEM FILES
          case 'cab':
          case 'cpl':
          case 'cur':
          case 'deskthemepack':
          case 'dll':
          case 'dmp':
          case 'drv':
          case 'icns':
          case 'ico':
          case 'lnk':
          case 'sys':
            var dest = path.join(destPath, 'Organized',
              'System Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'System Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //SETTINGS FILES
          case 'cfg':
          case 'ini':
          case 'prf':
            var dest = path.join(destPath, 'Organized',
              'Settings Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Settings Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //Compressed FILES
          case '7z':
          case 'cbr':
          case 'deb':
          case 'gz':
          case 'pkg':
          case 'rar':
          case 'rpm':
          case 'sitx':
          case 'gz':
          case 'zip':
          case 'zipx':
            var dest = path.join(destPath, 'Organized',
              'Compressed Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Compressed Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //DISK Image FILES
          case 'bin':
          case 'cue':
          case 'dmg':
          case 'iso':
          case 'mdf':
          case 'toast':
          case 'vcd':
            var dest = path.join(destPath, 'Organized',
              'Disk Image Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Disk Image Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //Developer FILES
          case 'c':
          case 'class':
          case 'cpp':
          case 'cs':
          case 'dtd':
          case 'fla':
          case 'h':
          case 'java':
          case 'lua':
          case 'm':
          case 'pl':
          case 'py':
          case 'sh':
          case 'sln':
          case 'swift':
          case 'vcxproj':
          case 'xcodeproj':
            var dest = path.join(destPath, 'Organized', 'Documents',
              'Developer Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Documents', 'Developer Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //BACKUP FILES
          case 'bak':
          case 'tmp':
            var dest = path.join(destPath, 'Organized',
              'Backup Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Backup Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
            //MISC FILES
          case 'crdownload':
          case 'ics':
          case 'msi':
          case 'part':
          case 'torrent':
            var dest = path.join(destPath, 'Organized',
              'Misc Files', element);
            fse.ensureDirSync(path.join(destPath, 'Organized',
              'Misc Files'), function(err) {
              if (err) console.log(err)
            });
            fse.move(origin, dest, function(err) {
              if (err) alert(err)
              // alert('moving ' + element + ":success!");
            });
            break;
          default:
            alert('moving ' + element + ':unsuccesfull');
        }
	
      });
    } else {
      alert('choose dest and source first!');
    }
	
  });
});
