document.addEventListener('DOMContentLoaded', function() {
    
    var conteneurAvis = document.getElementById('avis-carousel');
    var boutonPrecedentAvis = document.querySelector('.prev-btn');
    var boutonSuivantAvis = document.querySelector('.next-btn');
    var tousLesAvis = document.querySelectorAll('.avis-item');
    
    if (conteneurAvis && boutonPrecedentAvis && boutonSuivantAvis) {
        var positionActuelle = 0;
        var largeurUnAvis = 280;
        
        function deplacerCarouselAvis() {
            var distance = -positionActuelle * largeurUnAvis;
            conteneurAvis.style.transform = 'translateX(' + distance + 'px)';
        }
        
        boutonPrecedentAvis.onclick = function() {
            if (positionActuelle > 0) {
                positionActuelle = positionActuelle - 1;
                deplacerCarouselAvis();
            }
        };
        
        boutonSuivantAvis.onclick = function() {
            if (positionActuelle < tousLesAvis.length - 3) {
                positionActuelle = positionActuelle + 1;
                deplacerCarouselAvis();
            }
        };
        
        deplacerCarouselAvis();
    }
    
    var pisteSlides = document.getElementById('track');
    var pointsIndicateurs = document.querySelectorAll('.dot');
    var tousLesSlides = document.querySelectorAll('.slide');
    var boutonSuivant = document.getElementById('nextBtn');
    var boutonPrecedent = document.getElementById('prevBtn');
    
    if (pisteSlides && tousLesSlides.length > 0) {
        var slideActuel = 1;
        
        function mettreAJourCarousel() {
            if (tousLesSlides.length === 0) return;
            
            var largeurSlide = tousLesSlides[0].offsetWidth;
            var distance = -(slideActuel - 1) * largeurSlide;
            pisteSlides.style.transform = 'translateX(' + distance + 'px)';
            
            for (var i = 0; i < tousLesSlides.length; i++) {
                if (i === slideActuel) {
                    tousLesSlides[i].classList.add('active');
                } else {
                    tousLesSlides[i].classList.remove('active');
                }
            }
            
            for (var j = 0; j < pointsIndicateurs.length; j++) {
                if (j === slideActuel) {
                    pointsIndicateurs[j].classList.add('active');
                } else {
                    pointsIndicateurs[j].classList.remove('active');
                }
            }
        }
        
        if (boutonSuivant) {
            boutonSuivant.onclick = function() {
                if (slideActuel < tousLesSlides.length - 1) {
                    slideActuel = slideActuel + 1;
                    mettreAJourCarousel();
                }
            };
        }
        
        if (boutonPrecedent) {
            boutonPrecedent.onclick = function() {
                if (slideActuel > 0) {
                    slideActuel = slideActuel - 1;
                    mettreAJourCarousel();
                }
            };
        }
        
        var boutonVoirPlus = document.querySelector('.view-more');
        var sectionDetail = document.getElementById('section-detail');
        var sectionCarousel = document.querySelector('.carousel-section');
        
        if (boutonVoirPlus && sectionDetail && sectionCarousel) {
            boutonVoirPlus.onclick = function() {
                sectionCarousel.classList.add('hidden');
                sectionDetail.classList.remove('hidden');
            };
        }
        
        var boutonRetour = document.getElementById('backBtn');
        if (boutonRetour && sectionDetail && sectionCarousel) {
            boutonRetour.onclick = function() {
                sectionDetail.classList.add('hidden');
                sectionCarousel.classList.remove('hidden');
            };
        }
        
        mettreAJourCarousel();
    }
});
