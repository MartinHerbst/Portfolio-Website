window.addEventListener("scroll", function(){                                   /* funkce pro fixní připnutí navigace při scrollování */
    var navigation = document.querySelector("#navigation");                     /* při scrollu se navigace přidá nová třída sticky a ta se dále styluje */
    navigation.classList.toggle("sticky", window.scrollY > 0)
})
function appearOne(){                                                           /* při kliknutí na tlačítko v první sekci se potřebné id zviditelní (nastavení opacity) */
    const Appear_first = document.getElementById('appear1');
    Appear_first.style.opacity = '100';
    const Appear_fading = document.getElementById('fading');
    Appear_fading.style.visibility = 'visible';
}
function fadeOne(){                                                              /* při kliknutí na tlačítko v první sekci se potřebné id nechají zmizet (nastavení opacity) */
    const Fade_first = document.getElementById('appear1');
    Fade_first.style.opacity = '0';
    const Fade_first2 = document.getElementById('fading');
    Fade_first2.style.visibility = 'hidden';
}
function appearTwo_One(){                                                         /* první tlačítko ve druhé sekci >>> two_one, nastavení viditelnosti */
    const appear_early = document.getElementById('Early_life');                   /* early life se zobrazí - opacity */
    appear_early.style.opacity = '100';
    const disappear_succes = document.getElementById('Succes');                   /* succes se zneviditelní - opacity */
    disappear_succes.style.opacity = '0';
    const disappear_retirement = document.getElementById('Retirement');           /* retirement se zneviditelní - opacity */
    disappear_retirement.style.opacity = '0';
    const appear_HideButton = document.getElementById('fade-second-section');     /* tláčítko hide se objeví - visibility */
    appear_HideButton.style.visibility = 'visible';
}
function appearTwo_Two(){                                                          /* druhé tlačítko ve druhé sekci >>> two_two, nastavení viditelnosti */
    const disappear_early = document.getElementById('Early_life');                 /* early life se zneviditelní - opacity */
    disappear_early.style.opacity = '0';
    const appear_succes = document.getElementById('Succes');                       /* succes se zobrazí - opacity */
    appear_succes.style.opacity = '100';
    const disappear_retirement = document.getElementById('Retirement');            /* retirement se zneviditelní - opacity */
    disappear_retirement.style.opacity = '0';
    const appear_HideButton = document.getElementById('fade-second-section');      /* tláčítko hide se objeví - visibility */
    appear_HideButton.style.visibility = 'visible';
}
function appearTwo_Three(){                                                        /* třetí tlačítko ve druhé sekci >>> two_three, nastavení viditelnosti */
    const disappear_early = document.getElementById('Early_life');                 /* early life se zneviditelní - opacity */
    disappear_early.style.opacity = '0';
    const disappear_succes = document.getElementById('Succes');                    /* succes se zneviditelní - opacity */
    disappear_succes.style.opacity = '0';
    const appear_retirement = document.getElementById('Retirement');               /* retirement se zobrazí - opacity */
    appear_retirement.style.opacity = '100';
    const appear_HideButton = document.getElementById('fade-second-section');      /* tláčítko hide se objeví - visibility */ 
    appear_HideButton.style.visibility = 'visible';
}
function fadeSectionTwo(){                                                         /*tlačítko hide ve druhé sekci >>> fade...two, nastavení viditelnosti */
    const disappear_early = document.getElementById('Early_life');                 /* early life se zneviditelní - opacity */
    disappear_early.style.opacity = '0';        
    const disappear_succes = document.getElementById('Succes');                    /* succes se zneviditelní - opacity */
    disappear_succes.style.opacity = '0';
    const disappear_retirement = document.getElementById('Retirement');            /* retirement se zneviditelní - opacity */
    disappear_retirement.style.opacity = '0';
    const disappear_HideButton = document.getElementById('fade-second-section');   /* tláčítko hide zmizí - visibility */
    disappear_HideButton.style.visibility = 'hidden';
}