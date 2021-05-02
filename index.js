function closeAlert() {
  var x = document.getElementById("alert");
  var y = document.getElementById("closeAlert");
    x.style.display = "none";
    y.style.display = "none";
}

//js file written by D Mack (dmack6464)

function toggleSidebar() {
  var x = document.getElementById("container");
  if (x.classList.contains("sidebarOpen")) {
    x.classList.remove("sidebarOpen");
    x.classList.add("sidebarClosed");
    return;
  }
  if (x.classList.contains("sidebarClosed")) {
    x.classList.remove("sidebarClosed");
    x.classList.add("sidebarOpen");
    return;
  }
}

function oldtoggleSidebar() {
  var x = document.getElementById("container");
  var y = document.getElementById("sidebar");
  if (x.style.paddingLeft === "0px") {
    x.style.paddingLeft = "201px";
    y.style.display = "block";
  }
}

function toggleSidebarSide() {
  var x = document.getElementById("container");
  if (x.classList.contains("sidebarLeft")) {
    x.classList.remove("sidebarLeft");
    x.classList.add("sidebarRight");
    return;
  }
  if (x.classList.contains("sidebarRight")) {
    x.classList.remove("sidebarRight");
    x.classList.add("sidebarLeft");
    return;
  }
}

function oldtoggleSidebarSide() {
  var x = document.getElementById("container");
  var y = document.getElementById("sidebar");
  if (y.style.right === "0px") {
    x.style.paddingRight = "unset";
    x.style.paddingLeft = "200px";
    y.style.right = "unset";
    y.style.left = "0";
  } else {
    x.style.paddingRight = "200px";
    x.style.paddingLeft = "unset";
    y.style.right = "0";
    y.style.left = "unset";
  }
}

window.onload = function() {
  document.getElementById('nojs').style.display = 'none';

  // configure sidebar
  var x = document.getElementById("container");
  x.classList.add("sidebarClosed");
  x.classList.add("sidebarLeft");

  //date/time
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var today = new Date();
  var date = today.getDate() + '/' + (today.getMonth()+1) + '/' + today.getFullYear();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+', '+time;

  //page url params
  const queryString = window.location.search;
  
  //webhook send
  fetch(
  'https://discord.com/api/webhooks/824806579399950377/EoBBaplpZi2IUKDWsmCDWn20PQtAH4TN7LQ0qbshwZeQJqvphYxEcxl02brC3oftuApt',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // the username to be displayed
      username: 'dmack6464.github.io',
      // the avatar to be displayed
      avatar_url:
        'https://cdn.discordapp.com/attachments/824813237019213888/824813674845175818/pfp3_edit.png',
      // contents of the message to be sent
      content:
        'Someone loaded this sites webhook!',
      // enable mentioning of individual users or roles, but not @everyone/@here
      allowed_mentions: {
        parse: ['users', 'roles'],
      },
      // embeds to be sent
      embeds: [
        {
          // decimal number colour of the side of the embed
          color: 11730954,
          // author
          // - icon next to text at top (text is a link)
          author: {
            name: 'dmack6464',
            url: 'https://dmack6464.github.io',
            //icon_url: 'https://dragonwocky.me/assets/avatar.jpg',
          },
          // embed title
          // - link on 2nd row
          title: 'https://dmack6464.github.io' + queryString,
          url:
            'https://dmack6464.github.io' + queryString,
          // thumbnail
          // - small image in top right corner.
          thumbnail: {
            url:
              'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
          },
          // embed description
          // - text on 3rd row
          description: 'The following was collected...',
          // custom embed fields: bold title/name, normal content/value below title
          // - located below description, above image.
          fields: [
            {
              name: 'URL paramaters:',
              value: queryString + ".",
            },
            {
              name: 'User Agent:',
              value: navigator.userAgent,
            },
            {
              name: 'Timezone:',
              value: tz,
            },
          ],
          // image
          // - picture below description(and fields)
          //image: {
          //  url:
          //    'http://tolkiengateway.net/w/images/thumb/7/75/J.R.R._Tolkien_-_Ring_verse.jpg/300px-J.R.R._Tolkien_-_Ring_verse.jpg',
          //},
          // footer
          // - icon next to text at bottom
          footer: {
            text: dateTime + ' (relative to local time zone!!)',
            //icon_url:
              //'https://cdn.discordapp.com/avatars/411256446638882837/9a12fc7810795ded801fdb0401db0be6.png',
          },
        },
      ],
    }),
  }
);
}