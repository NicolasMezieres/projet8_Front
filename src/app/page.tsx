"use client";
import Footer from "@/Component/Footer";
import HeaderFirstPage from "@/Component/header/HeaderFirstPage";
import MainTitleUser from "@/Component/mainTitleUser";

export default function Home() {
  return (
    <div>
      <HeaderFirstPage />
      <main className="min-h-screen bg-white px-4 md:px-16 xl:px-40 text-black">
        <MainTitleUser />
        <div className="text-center text-sm  flex flex-col gap-6 md:text-base md:gap-16 xl:text-xl xl:py-24">
          <p>
            Bienvenue sur Pochtron et Sofa, où nous avons fait une petite
            erreur...
          </p>
          <p>
            On voulait aussi vendre des canapés,mais on a trop goûté nos
            produits !
          </p>
          <p>
            Ici, vous trouverez une sélection d'alcools soigneusement choisis
            (entre deux gorgées).
          </p>
        </div>
        <div className="text-xs text-center pt-10 xl:text-base">
          <p>
            Nous tenons à souligner que l'alcool est dangereux pour la santé, et
            qu'il doit être consommé avec modérations. Nos produits sont
            strictement réservés aux personnes de 18 ans et plus.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
