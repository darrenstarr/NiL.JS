var a = [];
for (let i = 0; i < 4; i++) {
    a.push(() => i);
    let x = Math.cos(i);
}
a.forEach(x=>console.log(x()));