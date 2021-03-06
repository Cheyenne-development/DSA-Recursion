function sheepOverTheFence(number){
    if(number < 1){
        return;
    }
    console.log(`${number}: Another sheep jumps over the fence`);
    sheepOverTheFence(number - 1);
}
sheepOverTheFence(8)
console.log('All sheep jumped over the fence')