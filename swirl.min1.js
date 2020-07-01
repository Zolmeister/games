//used variables
// a, b, c, d, f, g, i , l, m, p, q, r, s, t, w
//A, B, C, X, Y, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T
for ($ in a)
a[$[0] + ($[6] || "")] = a[$]
var webkitURL
A = webkitURL
B = A ? "webkit" : "moz"
C = B + "RequestFull" + ( A ? "s" : "S") + "creen"
X = Y = D = E = F = 0
G = []
H = c
I = []
J = 120
K = Math
L = K.PI
M = K.random
onmousedown = function(e) {
    if (!X) {
        c[C] ? c[C]() : 0
        X = innerWidth / 2
        Y = innerHeight / 2
        onmousemove = function(e) {
            if (c[C]) {
                c[B + "RequestPointerLock"]();
                x = e[B + "MovementX"]
                y = e[B + "MovementY"]
                X += !(X + x > innerWidth - J | X + x < J) ? x : 0
                Y += !(Y + y > innerHeight - J | Y + y < J) ? y : 0
            } else {
                X = e.offsetX
                Y = e.offsetY
            }

        }
        setInterval(loop, 33)
    }
}
loop = function() {
    U = c.width = innerWidth - 21
    V = c.height = innerHeight - 21
    c.style.background = "#FFF"
    with (a) {
        font = ( A ? 90 : J) + "px monospace"
        textBaseline = "middle"
        textAlign = "center"
        shadowColor = "#222"
        if (!F) {
            this.setTimeout("if(!F){F=1;setTimeout(\"D=1\",7e3)}", 7e3)
            if (M() > .6) {

                //spawn S
                G.push({
                    x : X,
                    y : Y,
                    N : M() * L * 4 - L / 2,
                    P : String.fromCharCode(M() * 27 + 10025),
                    O : 0,
                    Q : 0,
                    R : "#" + ["FA7A79", "A266AC", "E38F3D", "81A63F", "619CD8"][~~(M() * 5)]
                })
            }
        }

        if (D) {
            if (M() > .7) {
                S = G[E++ % G.length]
                S.Q = 3
                S.N = K.atan2(Y - S.y, X - S.x)//N to mouse
            }
        }
        for (i in G) {
            S = G[i]
            if (!S.Q) {
                S.x += K.cos(S.N) * 7
                S.y += K.sin(S.N) * 7
                S.O += L / 25
                S.x < 0 + 70 | S.x > U - 70 | S.y < 0 + 70 | S.y > V - 70 ? S.Q = 1 : 0
            }
            if (S.Q == 3) {
                S.x += K.cos(S.N) * 14
                S.y += K.sin(S.N) * 14
                S.O += L / 6
                if (K.abs(S.x - X) < 45 & K.abs(S.y - Y) < 45) {
                    I.push({
                        x : X,
                        y : Y,
                        N : S.N
                    })
                    I.length > 99 ? I.shift() : 0
                }
            }
            //draw S
            shadowBlur = 3;
            fillStyle = S.R
            save()
            ta(S.x, S.y)
            rotate(S.O)
            fx(S.P, 0, 0)
            re()
        }
        //draw I
        for (i in I) {
            T = I[i]
            ba()
            strokeStyle = "#B00"
            lineWidth = 2
            m(T.x, T.y)
            l(T.x + K.cos(T.N) * 20, T.y + K.sin(T.N) * 20)
            s()
        }
        fillStyle = "#000"
        H[C] ? fx("\u269A", X, Y) : 0
    }
}
