import React, { useState } from 'react';


const Portfolio = () => {
    const informazioniPersonali = {
        nome: "Jacopo Tei",
        residenza: "Latina, Italia",
        email: "jacopotei934@gmail.com",
        linkedIn: "linkedin.com/in/jacopo-tei-web",
        soundCloud: "soundcloud.com/mendouzi116",
    };

    const esperienze = [
        {
            periodo: "Dal 1/09/2022 al 16/12/2022",
            ruolo: "Operaio Tirocinante, Baccini Service S.R.L., Lavanderia Baccini, B.go Sabotino (LT)",
            descrizione: "Addetto alla raccolta, alla cernita e al conteggio dei panni ed al lavaggio degli stessi."
        },
        {
            periodo: "Dal 10/06/2022 al 15/07/2022",
            ruolo: "Capo Animazione Glu Service S.R.L., GEMMA CAMPING VILLAGE, Marina Palmense (FM)",
            descrizione: "Responsabile dello staff di animazione, addetto alle relazioni con committenza e responsabili degli altri staff interni, responsabile del comparto audio/suono/luci."
        },
        {
            periodo: "Dal 5/06/2021 al 10/09/2021",
            ruolo: "Responsabile Diurno, Glu Service S.R.L., STORK FAMILY CAMPING VILLAGE, Roseto degli Abruzzi (TM)",
            descrizione: "Responsabile delle attività giornaliere per ciò che riguarda sport e contatto con la clientela, Presentatore degli spettacoli serali."
        },
        {
            periodo: "Dal 7/07/2019 al 3/09/2019",
            ruolo: "Animatore Turistico, ESSAI SPORT LIDO, Palermo (PA)",
            descrizione: "Programmazione, organizzazione e proposta delle attività ludiche agli ospiti, informare i turisti del programma giornaliero e delle attività in convenzione con le attrazioni principali del luogo."
        },
        {
            periodo: "Dal 1/06/2018 al 1/09/2018",
            ruolo: "Promoter attività sportive, TENNIS CLUB SABAUDIA, Sabaudia (LT)",
            descrizione: ""
        },
        {
            periodo: "Dal 10/07/2014 al 2/09/2017",
            ruolo: "Animatore Turistico, Club Esse Animazione S.R.L., TORRE DELLE STELLE, Villasimius (CA), DON CARLOS RESORT E SPA, Marbella (ESP), Club Esse Animazione S.R.L., CALA GONONE BEACH VILLAGE, Dorgali (NU)",
            descrizione: ""
        }
        // Aggiungi altre esperienze qui...
    ];
    
    const lingue = [
        { lingua: "Italiano", livello: "C2", bandiera: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAFVBMVEX///8AkkbOKzcAjz50t4zegIXNIC6XSJNFAAAA/klEQVR4nO3QSQ0AIAADsHH6l4yKPUhaCc2oWTs9586aOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHixIkTJ06cOHHy4ckD5KrN4eD2boIAAAAASUVORK5CYII=" },
        { lingua: "Inglese", livello: "B2", bandiera: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARgAAACTCAMAAABiUPYRAAAAgVBMVEWzGUL///8KMWHoucXip7a5KlDFTm7Wg5nz3OLQwc4RN2XO1t8aP2wrTHZ8kautusq+yNWNn7V1i6bv8fQzVHyFmLAfQ2/o7PAPNWSVprsbQGxkfZva3+f3+fpadJRHZYk5WX9TbpCgr8LK092xvs3X3eVsg6A3V37Cy9ebq79WcZLNaXbtAAAG9UlEQVR4nO2d6XLqOBCFI91Zbcv7BthA2AJ5/wcceQmoJTSRXDMoqurvB8nt8qnSORjRsuzcN/pi3nwBg9GAwWi4j5gpHqJIKakH2epc+zXma8BBorjZbJRSoni21bn2a8zdTa94Pp2UFHrFs63OtV9jxtG+x/GRHOL4ccYHeRz3fRznwb3E4vhAjnH8/jC8QOfarzGTnRXhFOLpUIZD6VwKpW0xlA4Py0t0rv0aMw++4kMXzXDT3GEYgFLJD6pAxV7n2q8x83gTciZbaLBomgIa3PKDpLnWWufarzGzm+6d5gfg5jOt6/QTplDRXQc82+tc+zVmGm695i/zR0L8oZbW9fjrer1MR395wpPON13LlUj5/qWXyzIdJZ6gBhM961UUz2m6TOdrMCzL+HSaZWKvkmV86swyoVeJs6zvsywO7HQ+B0N3zVDNWqEU97zSCJZpnQ4HXWtbnc/BUMaLMSzFvATf93boVVpQMtL5HMyGXHtpzjz1VwLnj6Dvuh72KkY6n4NJct7VA89RuKebAzhom0RBAvs6I52XweynH8O5H0yzRz3/COj9gopw0JPStzofg6mV71+aq70KmHAX6VwbNuUezIUonq9XJQWieLbVuTZsyhTMJkk6ck2Sxzo5yJKk75Mke0wbZZJcSZckwny6QPebJ8xnzGboObqd8CZHyZDbSbw8t+94pc/FU8Fe53ptaMw8+Cc9x5GQI6yY9Sr/rnPt15h5vGmRSD1H1IehdD13Q5JCmmutda79GjO7OTL6eYBuVkFbQc+8dWFX4Nle59qvMdNw10N/P3+9zDNGTZ+W2mnBzNgynW/BiByV9Q07KgfluVIy0nkcTE0Uz7m6Fjwqns10vgZTntKQNGkqrIO2adqQMD0JvcoqTQlJ01Vgp/M5GH72E2mjaNoWCsX3ftpOEjeYzHQ+BzP2HNJnIjftVb7XeRzMhdwaaa1zbW7SGqkm16u0RjLScX73BCWYw47WJ+B5ndZ0fwAHbSp+PsBexUhHfVtEDswXZ8c+bJo95l4luJfhQU9K3+l8DIaF8ntL41gpKXOptc61YVPuwcTqPBkqnpm8hrTXuTZsyhTM9hgWpAtTYe9oFQ47AaHQq7A07EgRHsVexV7n2rAp8xkzbgul4tzZ5sOlFnDTx7idBDeK7HUuzdrw8usxbu2a8xXMsavgtTneqySJ1KvkfdVJnq11rg2b8nUbSBLR8gbcXHLl/svDBw1uwLO9zrVhU75uHLq/cFcmpbJcpvMtGJFzKVfKs3JQVSklI53HwZTy/YfDHYiK57Pi2UxH//AE+XpMWPSkLxpx76gZS6FwPeZQFIQUhXDdwUg34nrRbIz0ho7bQt1eLI3bQvBe+QvvVfqLvc7jYAx7laG7XaLzOJi4yOW1ThjmBfTMyO0meTbS+RzMjdG2Ap7ZqqUsAwdd+Lrnc2Ov8zIY9d6N/V4pqQfZ6lz7NebuplPcZMrbTTvFs63OtV9j7m7Ih+JG8fxBFM+2Otd+jRlHOz04Iz5MM+2QgD2S6YEbsEeyQOfarzHT4MdtoRW4t3AwXYAbEEfTcCPWXufarzHz4NXnjuiZnwqwYvS80je6Pz3hK5hzum0qyU0lr3WqZptKnq11/+/S77/j66NUtXQNDW52/CsH3sub1ZTm00eibZfpfAtGRN38oOo9H7udUjLS+RxMo/Qqu0Y5aLVapvM1mCCKdmQVic/a83+syC6KHl89LS91HX9p7XQ+BzM9cAP2SKYHbsSHcNpq0q5aO53PwdB2uFaQwgveg+kYPIQzmG529jqPg6F7XpT6/oyXpPmjI0Tq+810HgeTdbtE8twluw56/ugvlx6ukYx0XgYzT5Ixnz83sO3ni5woBgdteQNXbu11Xgaj7oc86VUqecqw1v3lCfdgnvQct5tcaRvFs63O9drQmHG0jLED2TL2eEy65aWm4S+PU2TN2JYcGBM+Lwt0rv0aM4523Okg5CQ8Pz4+cAMewpkeuAEP4SzQufZrzDT44MSHDq/efgy9CvzmuQwhwD96Ya1z7deYeezDtSSp5xgMwsrQq0hrJGuda7/GzOPtDuUR9hz7YvNZQM9ZWGZyr2Krc+3XmGm4jC9yWviR+OSTJYN/B+bCZ9R32KtY61z7NYa+GNd+jcFgNGAwGjAYDX+/GNdrIFPeXrde9QsMRgMGowGD0YDBaMBgNGAwGjAYDRiMBgxGw5vrO5d+Kq6XagiCIAiCIAjyIlw/3/xTwUWkBgxGAwajAYPRgMFowGA0YDAaMBgNGIwGDEYDBqPhzfXfzf2puF7DIgiCIAiCIMiLcP2/6/1UcBGpAYPRgMFowGA0YDAaMBgNGIwGDEYDBqMBg9Hw9gt5iuulGoIgCIIgCIIgTvkHhcksu0hv0TAAAAAASUVORK5CYII=" },
        { lingua: "Francese", livello: "B1", bandiera: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAG1BMVEUAJlTOESb///8AF0yAj6T77O7kh5DMABbq7vHRr8weAAABAElEQVR4nO3QRwEAIAwEsDKLf8WouF8iIVUxa7+Zcm6PmFyJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEydOnDhx4sSJEye5kw/1DdcsYaSJzwAAAABJRU5ErkJggg==" },
        { lingua: "Spagnolo", livello: "B1", bandiera: "data:image/png;base64,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" }
        // Aggiungi altre lingue...
    ];
    

    const [showEsperienze, setShowEsperienze] = useState(false);
    const [showTimeline, setShowTimeline] = useState(false);
    const [showLingue, setShowLingue] = useState(false);

    const toggleEsperienze = () => {
        setShowEsperienze(!showEsperienze);
    };

    const toggleTimeline = () => {
        setShowTimeline(!showTimeline);
        if (!showTimeline) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }
    };
    
    const toggleLingue = () => {
        setShowLingue(!showLingue);
        if (!showLingue) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth',
            });
        }
    };
    return (
        <div className="container">
            <div id="timeline"></div> 
            <div id="lingue"></div> 
            <h1 className="text-center my-4">{informazioniPersonali.nome}</h1>
            <div className="card shadow mb-4">
                <div className="card-body d-flex justify-content-between">
                    <div className='no-underline'>
                        <p><strong>Residenza:</strong> {informazioniPersonali.residenza}</p>
                        <p><strong>Email:</strong> {informazioniPersonali.email}</p>
                        <p><a href='https://www.linkedin.com/in/jacopo-tei-web/'><strong>LinkedIn:</strong> {informazioniPersonali.linkedIn}</a></p>
                        <p><a href='https://soundcloud.com/mendouzi116'><strong>SoundCloud:</strong> {informazioniPersonali.soundCloud}</a></p>
                    </div>
                    <div className="balloon"></div>
                </div>
            </div>
            <h2 className="my-4 text-center">Descrizione</h2>
            <p className='text-center'>Sono un Junior Full Stack Developer con competenze in sviluppo front-end e back-end acquisite tramite il coding bootcamp di Aulab. Laureato in Scienze della Moda e del Costume, integrando conoscenze nell'ambito artistico con competenze digitali per creare soluzioni software innovative nel settore della moda e della musica. Esperienza come produttore musicale, che si integra con la passione per la programmazione, offrendo una prospettiva unica nella creazione di esperienze web coinvolgenti.
Dotato di una solida base di competenze digitali e familiarità con gli strumenti della suite per ufficio, mirando a impiegare queste conoscenze nel mondo dello sviluppo software per garantire la riuscita dei progetti e la massima soddisfazione del cliente.
Le esperienze lavorative precedenti hanno fornito una comprensione approfondita delle dinamiche organizzative e delle esigenze dei clienti, preparandomi a creare soluzioni su misura per le loro necessità nel contesto del software development.
Oltre agli studi e all'esperienza professionale, il mio interesse per l'informatica e le nuove tecnologie si traduce nell'uso della tecnologia come strumento per amplificare la creatività. Cerco attivamente di esplorare le diverse sfaccettature della vita, sia nel campo tecnologico che in quelli artistici, mirando a integrare entrambi i mondi per creare soluzioni innovative e all'avanguardia.</p>
            <hr />
            <div className='container'>
            <h1 className="my-4" onClick={toggleEsperienze}>Portfolio Personale</h1>
            <h2 className="my-4 text-center" onClick={toggleTimeline}>Esperienze Lavorative</h2>
            {showTimeline && (
                <div id="timeline" className="timeline">
                    {esperienze.map((esperienza, index) => (
                        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                            <div className="timeline-icon"></div>
                            <div className="timeline-content">
                                <h3>{esperienza.periodo}</h3>
                                <h4>{esperienza.ruolo}</h4>
                                <p className="mb-0">{esperienza.descrizione}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>
                <h2 className="my-4 text-center" onClick={toggleLingue}>Lingue</h2>
                {showLingue && (
                    <div className="row">
                        {lingue.map((lingua, index) => (
                            <div key={index} className="col-sm-3 mb-3">
                                <div className="card shadow d-flex justify-content-between">
                                    <div className="card-body">
                                        <h3>{lingua.lingua}</h3>
                                        <p>{lingua.livello}</p>
                                    </div>
                                    <div className="pallino">
                                    <img src={lingua.bandiera} alt={lingua.lingua} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
};

export default Portfolio;
