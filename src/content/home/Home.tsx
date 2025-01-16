import { useFormContext } from "../../context/form-context";
import Modal from "../../Modal";
import AdminLogin from "./AdminLogin";
import Lernfeld from "./Lernfeld";


const lernfelder = [
    { name: "LF-01:", src: "LF1.png", title: "Das Unternehmen und die eigene Rolle im Betrieb beschreiben", lf: 1 },
    { name: "LF-02:", src: "LF2.png", title: "Arbeitsplätze nach Kundenwunsch ausstatten", lf: 2  },
    { name: "LF-03:", src: "LF3.jpg", title: "Clients in Netzwerke einbinden", lf: 3  },
    { name: "LF-04:", src: "LF4.jpg", title: "Schutzbedarfsanalyse im eigenen Arbeitsbereich durchführen", lf: 4  },
    { name: "LF-05:", src: "LF5.jpg", title: "Software zur Verwaltung von Daten anpassen", lf: 5  },
    { name: "LF-06:", src: "LF6.jpg", title: "Serviceanfragen bearbeiten", lf: 6  },
    { name: "LF-07:", src: "LF7.jpg", title: "Cyber-physische Systeme ergänzen", lf: 7  },
    { name: "LF-08:", src: "LF8.jpg", title: "Daten systemübergreifend bereitstellen", lf: 8  },
    { name: "LF-09:", src: "LF9.jpg", title: "Netzwerke und Dienste bereitstellen", lf: 9  }
];



export default function Home(){

    const {openModalAdminLogin, isAdmin} = useFormContext();

    console.log("isAdmin: " + isAdmin)

    return (

        <>
            <Modal openModal={openModalAdminLogin}>
                <AdminLogin/>
            </Modal>
            <main className="w-full h-full">
                
                <ul className="grid grid-cols-3 mt-2 
                        grid-rows-[repeat(2,_8.5rem)] sm:grid-rows-[repeat(3,_11rem)] 
                        md:grid-rows-[repeat(3,_14rem)] lg:grid-rows-[repeat(3,_18rem)] 
                        xl:grid-rows-[repeat(3,_24rem)]
                        w-[90%] max-w-[1800px]
                        justify-self-center gap-x-3 gap-y-3 sm:gap-2 md:gap-3">
                {lernfelder.map((lernFeld, index) => 
                    <Lernfeld 
                        name={lernFeld.name} 
                        title={lernFeld.title}
                        src={lernFeld.src}
                        key={index}
                        lf={lernFeld.lf}
                        />
                )}
                </ul>
            </main>
        </>
        
    )
}


