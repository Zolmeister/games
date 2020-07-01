//used variables
// a, b, c, d, f, g, i , l, m, p, q, r, s, t, w
//A, B, C, X, Y, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, W, Z
for ($ in a)
a[$[0] + ($[6] || "")] = a[$]
A = "Request"
B = "webkit"
C = B + A + "Fullscreen"
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
                c[B + A + "PointerLock"]()
                W = e[B + "MovementX"]
                Z = e[B + "MovementY"]
                X += !(X + W > innerWidth - J | X + W < J) ? W : 0
                Y += !(Y + Z > innerHeight - J | Y + Z < J) ? Z : 0
            } else {
                X = e.offsetX
                Y = e.offsetY
            }

        }
        setInterval(loop, 33)
    }
}
loop = function(e) {
    U = c.width = innerWidth - 21
    V = c.height = innerHeight - 21
    //c.style.background = "#FFF"
    with (a) {
        font = ( A ? 90 : J) + "px sans"
        textBaseline = "middle"
        textAlign = "center"
        shadowColor = "#222"
        if (!F) {
            setTimeout("F=1;setTimeout(\"D=1\",7e3)", 7e3)
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
                with(G[E++ % G.length]){
                    Q = 3
                    N = K.atan2(Y - y, X - x)//N to mouse
                }
            }
        }
        for (W in G) {
            Z=G[W]
            with(Z){
                if (!Q) {
                    x += K.cos(N) * 7
                    y += K.sin(N) * 7
                    O += L / 25
                    x < 0 + 70 | x > U - 70 | y < 0 + 70 | y > V - 70 ? Q = 1 : 0
                }
                if (Q == 3) {
                    x += K.cos(N) * 14
                    y += K.sin(N) * 14
                    O += L / 6
                }
            
                //draw S
                shadowBlur = 3
                fillStyle = R
                save()
                ta(x, y)
                rotate(O)
                fx(P, 0, 0)
                re()
            }
        }
        fillStyle = "#000"
        H[C] & fx("\u269A", X, Y)
    }
}
