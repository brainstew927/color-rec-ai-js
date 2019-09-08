var Neuron = synaptic.Neuron,
Layer = synaptic.Layer,
Network = synaptic.Network,
Trainer = synaptic.Trainer,
Architect = synaptic.Architect;

let area;
let RGB;
let TRUE_RGB;

let myPerceptron;

let cat = ["freddo", "caldo"]
let lab;

function txt_RGB(stringa){
    let array_val_rgb = [];
    let temp_str;

    try{
        temp_str = stringa.replace(" ", "");
        temp_str = stringa.split(",");
        temp_str.forEach(element => {
            array_val_rgb.push(parseInt(element));
        });
        //console.log(array_val_rgb)

        return array_val_rgb;

    }catch(error){
        console.log("errore: ", error); 
        return -1;
    }
}

function activate_nn(){
    area = document.getElementById("input_rgb");
    try {
        RGB = area.value;
        TRUE_RGB = txt_RGB(RGB)

        aggiorna_label(Math.round(myPerceptron.activate(TRUE_RGB)))

    } catch (error) {
        console.log("errore: ", error)
    }

}


function train(NN){

    var trainingSet = [
        {
            input: [255,255,0],
            output: [1]
          },
        {
          input: [255,0,0],
          output: [1]
        },
        {
          input: [0,0,255],
          output: [0]
        },
        {
          input: [50, 168, 82],
          output: [0]
        },
        {
          input: [168, 50, 50],
          output: [1]
        },
        {
            input: [53, 105, 70],
            output: [0]
          },
        {
            input: [99, 53, 105],
            output: [1]
        },
        {
            input: [66, 64, 128],
            output: [0]
        },
        {
            input: [51, 102, 49],
            output: [0]
        },
      ]

    myPerceptron = new Architect.Perceptron(3, 4, 1);

    var myTrainer = new Trainer(myPerceptron);
    for(let i = 0; i < 2; i++){
        console.log("result_training_",i,": ", myTrainer.train(trainingSet));
    }

    // { error: 0.004998819355993572, iterations: 21871, time: 356 }

}

function aggiorna_label(val){
    lab = document.getElementById("lab");
    lab.innerHTML = cat[val];

    console.log("valore estratto:", cat[val])
}