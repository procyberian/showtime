
const St = imports.gi.St;
const Main = imports.ui.main;
const Tweener = imports.ui.tweener;
const Util = imports.misc.util;
const GLib = imports.gi.GLib;
const Me = imports.misc.extensionUtils.getCurrentExtension();
const Convenience = Me.imports.convenience;
const ExtensionPath = imports.misc.extensionUtils.getCurrentExtension().path;

let showtime_script = ExtensionPath + '/showtime-horizontal.js';


function killshowtime() {
  GLib.spawn_command_line_sync("/usr/bin/pkill -f " + showtime_script);
}

function startshowtime() {
  Util.spawnCommandLine(" /usr/bin/gjs " + showtime_script);
}
function init() {
    killshowtime();
    startshowtime();
    let settings = Convenience.getSettings();
    settings.connect('change-event', function (settings, keys) {
      killshowtime();
      startshowtime();
    });
}

function enable() {
  killshowtime();
  startshowtime();
}

function disable() {
  killshowtime();
}