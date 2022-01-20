let app = new Vue ({
    el: '#miapp',
    data: {
        attivo: -1,
        messaggioScritto: "",
        inputUtente: "",
        contacts: [
            {
            name: 'Nonna',
            avatar: '_01',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                dropdownShow: false
                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Ricordati di dargli da mangiare',
                status: 'sent',
                dropdownShow: false
                },
                {
                date: '10/01/2020 16:15:22',
                text: 'Tutto fatto!',
                status: 'received',
                dropdownShow: false
                }
                ],
            },
            {
            name: 'Franco',
            avatar: '_02',
            visible: true,
            messages: [
                {
                date: '20/03/2020 16:30:00',
                text: 'Ciao come stai?',
                status: 'sent',
                dropdownShow: false
                },
                {
                date: '20/03/2020 16:30:55',
                text: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                dropdownShow: false
                },
                {
                date: '20/03/2020 16:35:00',
                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                dropdownShow: false
                }
                ],
            },
            {
            name: 'Samuele',
            avatar: '_03',
            visible: true,
            messages: [
                {
                date: '28/03/2020 10:10:40',
                text: 'La Marianna va in campagna',
                status: 'received',
                dropdownShow: false

                },
                {
                date: '28/03/2020 10:20:10',
                text: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                dropdownShow: false

                },
                {
                date: '28/03/2020 16:15:22',
                text: 'Ah scusa!',
                status: 'received',
                dropdownShow: false

                }
                ],
            },
            {
            name: 'Luisa',
            avatar: '_04',
            visible: true,
            messages: [
                {
                date: '10/01/2020 15:30:55',
                text: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                dropdownShow: false

                },
                {
                date: '10/01/2020 15:50:00',
                text: 'Si, ma preferirei andare al cinema',
                status: 'received',
                dropdownShow: false

                }
                ],
            },
            {
            name: 'Alessia',
            avatar: '_05',
            visible: true,
            messages: [
                {
                date: '11/02/2021 14:30:55',
                text: 'Il nostro rapporto non funziona più, finisce qua!',
                status: 'received',
                dropdownShow: false
                },
                {
                date: '11/02/2021 14:32:00',
                text: 'LUL',
                status: 'sent',
                dropdownShow: false
                }
                ],
            },
            {
            name: 'Manina',
            avatar: '_06',
            visible: true,
            messages: [
                {
                date: '11/02/2021 14:30:55',
                text: 'Sono stato un buon Pokèmon in questa nuzlocke?',
                status: 'received',
                dropdownShow: false
                },
                {
                date: '11/02/2021 14:32:00',
                text: 'No',
                status: 'sent',
                dropdownShow: false
                },
                {
                date: '11/02/2021 14:30:55',
                text: ':C',
                status: 'received',
                dropdownShow: false
                },
                {
                date: '11/02/2021 14:32:00',
                text: 'Sei stato il migliore...',
                status: 'sent',
                dropdownShow: false
                },
                ],
            },

        ],

    },
    
    methods: {

        aggiungiMessaggio : function(){


            this.contacts[this.attivo].messages.push(                
                {
                text: this.messaggioScritto,
                date: '11/02/2021 14:32:00',
                status: 'sent',
                dropdownShow: false,            
                }
            );       

            this.rispostaAutomatica();
            this.messaggioScritto = "";

 
        },
        rispostaAutomatica : function(){
            setTimeout(() => {this.contacts[this.attivo].messages.push(
            
                {
                    text: 'Ok',
                    date: '11/02/2021 14:32:00',
                    status: 'received',
                    dropdownShow: false,  
                }

            );}, 1000);

        },
        ricercaContatti : function(){
            console.log(this.inputUtente);

            for(i = 0; i<this.contacts.length; i++){
                if(this.contacts[i].name.toLowerCase().includes(this.inputUtente)){
                    this.contacts[i].visible = true;
                }else{
                    this.contacts[i].visible = false;
                }
            }
        },
        attivaDropdown : function(indice){
            this.contacts[this.attivo].messages[indice].dropdownShow = !this.contacts[this.attivo].messages[indice].dropdownShow;
        },
        disattivaDropdown : function(indice){
            this.contacts[this.attivo].messages[indice].dropdownShow = false;
        },
        rimuoviMessaggio : function(indice){
            this.contacts[this.attivo].messages.splice(indice,1);
        }


    }
});
