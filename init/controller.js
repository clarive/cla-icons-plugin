var reg = require('cla/reg');

reg.controller('show-icons', {
    authenticate: true,
    handler: function(req, res) {
        var fs = require('cla/fs');
        var hs = require('handlebars');
        var proc = require("cla/process");
        var path = require("cla/path");

        var claBase = proc.env('CLARIVE_BASE')
        var claHome = proc.env('CLARIVE_HOME')
        var subPath = "/static/images/icons";
        var iconsPath = claHome + "/root" + subPath;
        var folders = [];

        var directorySearch = function(directory) {
            var icons = [];
            fs.iterateDir(directory, function(file, fullpath) {


                if (fs.isFile(fullpath) && path.extname(fullpath) == '.svg') {
                    var icon = {};
                    icon.fullName = fullpath.substring(directory.length + 1, fullpath.length - path.extname(fullpath).length);
                    icon.name = (icon.fullName.length > 20 ? icon.fullName.substring(0, 20) + '...' : icon.fullName);
                    icon.url = fullpath.replace(iconsPath, subPath);
                    icons.push(icon);
                } else if (fs.isDir(fullpath) && file != '.' && file != '..') {
                    directorySearch(fullpath);
                }

            });

            icons.sort(function(a, b) {
                var firstElement = a.name.toLowerCase();
                var secondElement = b.name.toLowerCase();
                return firstElement < secondElement ? -1 : (firstElement > secondElement ? 1 : 0);
            });

            var folder = {};
            folder.icons = icons;
            folder.name = directory.substring(directory.lastIndexOf("/") + 1, directory.length);
            folders.push(folder);
        }

        directorySearch(iconsPath);

        var template = fs.slurp(claBase + "/plugins/icons-plugin/templates/index.tpl");
        var compiledTemplate = hs.compile(template);

        res.body(
            compiledTemplate({
                folders: folders
            })
        );
        res.contentType('text/html');
    }
});