/*
 * description...
 * By: Zolmeister
 */
isKit = typeof webkitURL != "undefined"
pre = isKit ? "webkit" : "moz"
requestFull = pre + "RequestFull" + ( isKit ? "s" : "S") + "creen"
pointerLock = pre + "RequestPointerLock"
mouse = {
    x : 0,
    y : 0
}
colors = ['#FA7A79', '#A266AC', '#E38F3D', '#81A63F', '#619CD8']
types = []
killing = false
flowers = []
blood = []
ind = 0
stopped = false

math = Math
rand = math.random
onmousedown = function(e) {
    if (!mouse.x) {
        if (c[requestFull]) {
            mouse.x = innerWidth / 2
            mouse.y = innerHeight / 2
            c[requestFull]()
            onmousemove = function(e) {
                c[pointerLock]();
                var x = e[pre + 'MovementX']
                var y = e[pre + 'MovementY']
                mouse.x += !(mouse.x + x > innerWidth - 120 || mouse.x + x < 120) ? x : 0
                mouse.y += !(mouse.y + y > innerHeight - 120 || mouse.y + y < 120) ? y : 0
            }
        } else {
            onmousemove = function(e) {
                mouse.x = e.offsetX
                mouse.y = e.offsetY
            }
        }
        setInterval(loop, 33)
    }
}

loop = function() {
    c.width = innerWidth - 21
    c.height = innerHeight - 21
    c.style.background = '#FFF'
    a.font = ( isKit ? 90 : 120) + 'px monospace'
    a.textBaseline = 'middle'
    a.textAlign = 'center'
    a.shadowColor = '#222'
    if (!stopped) {
        setTimeout('if(!stopped){stopped=true;setTimeout(\'killing=true\',7000)}', 7000)
        if (Math.random() > .6) {

            //spawn flower
            var flow = rand() * 27 + 0x2729

            var flower = {
                x : mouse.x,
                y : mouse.y,
                dir : Math.random() * Math.PI * 4 - Math.PI / 2,
                flower : String.fromCharCode(flow),
                rot : 0,
                state : 0,
                color : colors[Math.floor(Math.random() * colors.length)]
            }
            flowers.push(flower)
        }
    }

    if (killing) {
        if (Math.random() > .7) {
            flower = flowers[ind++ % flowers.length]
            flower.state = 3
            flower.dir = Math.atan2(mouse.y - flower.y, mouse.x - flower.x)//dir to mouse
        }
    }

    //physics
    for (var i = 0; i < flowers.length; i++) {
        if (flowers[i].state == 0) {
            flowers[i].x += Math.cos(flowers[i].dir) * 7
            flowers[i].y += Math.sin(flowers[i].dir) * 7
            flowers[i].rot += Math.PI / 25
            if (flowers[i].x < 0 + 70)
                flowers[i].state = 1
            if (flowers[i].x > c.width - 70)
                flowers[i].state = 1
            if (flowers[i].y < 0 + 70)
                flowers[i].state = 1
            if (flowers[i].y > c.height - 70)
                flowers[i].state = 1
        }
        if (flowers[i].state == 3) {
            flowers[i].x += Math.cos(flowers[i].dir) * 14
            flowers[i].y += Math.sin(flowers[i].dir) * 14
            flowers[i].rot += Math.PI / 6
            if (Math.abs(flowers[i].x - mouse.x) < 30 && Math.abs(flowers[i].y - mouse.y) < 30) {
                blood.push({
                    x : mouse.x,
                    y : mouse.y,
                    dir : flowers[i].dir
                })
                if (blood.length > 100)
                    blood.shift()
            }
        }
    }

    //draw
    for (var i = 0; i < blood.length; i++) {
        a.strokeStyle = '#B00'
        a.lineWidth = 2
        var x = blood[i].x
        var y = blood[i].y
        var dir = blood[i].dir
        a.moveTo(x, y)
        a.lineTo(x + Math.cos(dir) * 20, y + Math.sin(dir) * 20)
        a.stroke()
    }
    for (var i = 0; i < flowers.length; i++) {
        a.shadowBlur = 3;
        a.shadowOffsetX = 1;
        a.shadowOffsetY = 1;
        a.fillStyle = flowers[i].color
        a.save()
        a.translate(flowers[i].x, flowers[i].y)
        a.rotate(flowers[i].rot)
        a.fillText(flowers[i].flower, 0, 0)
        a.restore()
    }
    a.fillStyle = '#000'
    if (c[requestFull]) {
        a.fillText('\u269A', mouse.x, mouse.y)
    }
}
