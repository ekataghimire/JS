const inputs = document.querySelectorAll('.controls input');
function handleUpdate() {
    // console.log(this.value);
    // const suffix = this.dataset;
    // console.log(this.dataset);
    const suffix = this.dataset.sizing || '';
    // console.log(suffix);
    console.log(this.name);

    document.documentElement.style.setProperty(`--spacing`, this.value + suffix);
}
//change event in each of the inputs  --> listen for the change of the event 
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
