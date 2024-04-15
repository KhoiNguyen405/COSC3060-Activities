import figlet from "figlet";

let textPrint = process.argv[2];
let textColor = process.argv[3];

if (textColor == null) {
    textColor = "white";
}

textColor = textColor.toUpperCase();

figlet.text(
    textPrint,
    function (err, data) {
        if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
        }
        console.log(data);
    }
)