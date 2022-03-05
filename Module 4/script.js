var names=new Array();
names[0]="Sam";
names[1]="Jacob";
names[2]="Nadia";
names[3]="Ali";
names[4]="Ralph";
names[5]="Calvin";
names[6]="Luca";
names[7]="Dani";
names[8]="Lora";
names[9]="kamil";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}