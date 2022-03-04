
const app = new Vue ({
    el: "#app",

    data: {
        indirizzi: [],
        indirizzo: " ",
        banana: "ciao sono banana"
    },

    created() {
        
           for(let i=0; i<10; i++){

           

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((res)=>{
                    this.indirizzo = res.data.response;

                    console.log(i);

                    this.indirizzi.push(this.indirizzo);
                    console.log(this.indirizzi);
                });


                console.log(this.indirizzi)
           }

        
    },
})