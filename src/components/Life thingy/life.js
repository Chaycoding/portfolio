window.addEventListener('load', function(){
    const canvas = document.getElementById('life');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    //Hunar Ahmad @ brainxyz
    m = document.getElementById("life").getContext("2d");
    draw = (x, y, c, s) => {
        m.fillStyle = c;
        m.fillRect(x, y, s, s);
    };
    atoms = [];
    atom = (x, y, c) => {
        return { x: x, y: y, vx: 0, vy: 0, color: c };
    };
    random = () => {
        return Math.random() * 400 + 50;
    };
    create = (number, color) => {
        group = [];
        for (let i = 0; i < number; i++) {
        group.push(atom(random(), random(), color));
        atoms.push(group[i]);
        }
        return group;
    };
    rule = (atoms1, atoms2, g) => {
        for (let i = 0; i < atoms1.length; i++) {
        fx = 0;
        fy = 0;
        for (let j = 0; j < atoms2.length; j++) {
            a = atoms1[i];
            b = atoms2[j];
            dx = a.x - b.x;
            dy = a.y - b.y;
            d = Math.sqrt(dx * dx + dy * dy);
            if (d > 0 && d < 80) {
            F = (g * 1) / d;
            fx += F * dx;
            fy += F * dy;
            }
        }
        a.vx = (a.vx + fx) * 0.5;
        a.vy = (a.vy + fy) * 0.5;
        a.x += a.vx;
        a.y += a.vy;
        if (a.x <= 0 || a.x >= canvas.width) { a.vx *= -1; }
        if (a.y <= 0 || a.y >= canvas.height) { a.vy *= -1; }
        }
    };
    yellow = create(100, "yellow");
    red = create(100, "red");
    blue = create(100, "blue");
    update = () => {
        rule(yellow,  red, -0.1);
        rule(yellow,  blue, 0);
        rule(yellow,  yellow, 0);
        rule(red,  yellow, -0.4);
        rule(red,  blue, 0.4);
        rule(red,  red, 0);
        rule(blue,  red, 0.4);
        rule(blue,  yellow, 0.4);
        rule(blue,  blue, 0.4);


        m.clearRect(250, 250, canvas.width, canvas.height);
        draw(0, 0, "black", canvas.width, canvas.height);
        for (i = 0; i < atoms.length; i++) {
        draw(atoms[i].x, atoms[i].y, atoms[i].color, 4);
        }
        requestAnimationFrame(update);
    };
    update();
});

