      // initialize the plugin
      videojs('video1').ready(function() {
        this.hotkeys({
          volumeStep: 0.1,
          seekStep: 5,
          enableMute: true,
          enableFullscreen: true,
          enableNumbers: false,
          enableVolumeScroll: true,

          // Enhance existing simple hotkey with a complex hotkey
          fullscreenKey: function(e) {
            // fullscreen with the F key or Ctrl+Enter
            return ((e.which === 70) || (e.ctrlKey && e.which === 13));
          },

          // Custom Keys
          customKeys: {

            // Add new simple hotkey
            simpleKey: {
              key: function(e) {
                // Toggle something with S Key
                return (e.which === 83);
              },
              handler: function(player, options, e) {
                // Example
                if (player.paused()) {
                  player.play();
                } else {
                  player.pause();
                }
              }
            },

            // Add new complex hotkey
            complexKey: {
              key: function(e) {
                // Toggle something with CTRL + D Key
                return (e.ctrlKey && e.which === 68);
              },
              handler: function(player, options, event) {
                // Example
                if (options.enableMute) {
                  player.muted(!player.muted());
                }
              }
            },

            // Override number keys example from https://github.com/ctd1500/videojs-hotkeys/pull/36
            numbersKey: {
              key: function(event) {
                // Override number keys
                return ((event.which > 47 && event.which < 59) || (event.which > 95 && event.which < 106));
              },
              handler: function(player, options, event) {
                // Do not handle if enableModifiersForNumbers set to false and keys are Ctrl, Cmd or Alt
                if (options.enableModifiersForNumbers || !(event.metaKey || event.ctrlKey || event.altKey)) {
                  var sub = 48;
                  if (event.which > 95) {
                    sub = 96;
                  }
                  var number = event.which - sub;
                  player.currentTime(player.duration() * number * 0.1);
                }
              }
            },

            emptyHotkey: {
              // Empty
            },

            withoutKey: {
              handler: function(player, options, event) {
                  console.log('withoutKey handler');
              }
            },

            withoutHandler: {
              key: function(e) {
                  return true;
              }
            },

            malformedKey: {
              key: function() {
                console.log('I have a malformed customKey. The Key function must return a boolean.');
              },
              handler: function(player, options, event) {
                //Empty
              }
            }
          }
        });
      });