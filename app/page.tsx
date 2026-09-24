'use client';
import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const form = document.querySelector('form[name="devis"]') || document.querySelector('form.netlify-modern-form') || document.querySelector('form');
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form as HTMLFormElement);
        
        const params = new URLSearchParams();
        formData.forEach((value, key) => {
          params.append(key, value.toString());
        });
        
        const submitBtn = form.querySelector('button[type="submit"]');
        if (submitBtn) submitBtn.textContent = "Envoi en cours...";
        
        try {
          const res = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
          });
          if (res.ok) {
            alert("Merci ! Votre demande de devis a bien été envoyée. Un expert CapAlu vous recontactera sous 1h.");
            (form as HTMLFormElement).reset();
          } else {
            alert("Erreur lors de l'envoi. Veuillez réessayer ou nous contacter par téléphone.");
          }
        } catch {
          alert("Erreur réseau. Veuillez réessayer ou nous contacter par téléphone.");
        } finally {
          if (submitBtn) submitBtn.textContent = "J'obtiens mon devis GRATUIT";
        }
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header dangerouslySetInnerHTML={{ __html: `<header class="elementor elementor-100 elementor-location-header" data-elementor-id="100" data-elementor-post-type="elementor_library" data-elementor-type="header">
<div class="elementor-element elementor-element-62f9640 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="62f9640" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-3da5722d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="3da5722d" data-settings='{"background_background":"classic"}'>
<div class="elementor-element elementor-element-29ba034e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="29ba034e">
<div class="elementor-element elementor-element-40075552 elementor-widget__width-auto elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="40075552" data-widget_type="image.default">
<img alt="" class="attachment-full size-full wp-image-235" fetchpriority="high" height="340" sizes="(max-width: 430px) 100vw, 430px" src="/images/logocapalu.jpg" srcset="/images/logocapalu.jpg 430w, /images/logocapalu.jpg 300w" width="430"/> </div>
</div>
<div class="elementor-element elementor-element-1bd79283 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1bd79283" data-settings='{"background_background":"classic"}'>
<div class="elementor-element elementor-element-16c0f469 elementor-mobile-align-center elementor-hidden-mobile elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="16c0f469" data-widget_type="button.default">
<a class="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-text">J'obtiens mon devis GRATUIT</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
</header>` }} />
      <main className="flex-1" dangerouslySetInnerHTML={{ __html: `<div class="elementor elementor-135" data-elementor-id="135" data-elementor-post-type="page" data-elementor-type="wp-page">
<div class="elementor-element elementor-element-6573c01d e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="6573c01d">
<div class="e-con-inner">
<div class="elementor-element elementor-element-4e4d0013 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4e4d0013">
<div class="elementor-element elementor-element-71b04c2a e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="71b04c2a">
<div class="elementor-element elementor-element-74f0e384 elementor-widget__width-auto elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="74f0e384" data-widget_type="text-editor.default">
<p>Noté 4.7/5 sur Google</p> </div>
<div class="elementor-element elementor-element-4715f2 elementor-widget__width-auto elementor-widget-mobile__width-auto elementor-widget elementor-widget-rating" data-e-type="widget" data-element_type="widget" data-id="4715f2" data-widget_type="rating.default">
<div class="e-rating" itemprop="reviewRating" itemscope="" itemtype="https://schema.org/Rating">
<meta content="0" itemprop="worstRating"/>
<meta content="5" itemprop="bestRating"/>
<div aria-label="Noté 5 sur 5" class="e-rating-wrapper" content="5" itemprop="ratingValue" role="img">
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-5856a5a2 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="5856a5a2" data-widget_type="heading.default">
<h1 class="elementor-heading-title elementor-size-default">Votre <span style="color:#3567AF"> vitrier et menuisier</span> à Paris et en Île-de-France</h1> </div>
<div class="elementor-element elementor-element-2502d5c1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="2502d5c1" data-widget_type="icon-list.default">
<ul class="elementor-icon-list-items">
<li class="elementor-icon-list-item">
<span class="elementor-icon-list-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span class="elementor-icon-list-text">Disponibilité 24h/24 et 7j/7</span>
</li>
<li class="elementor-icon-list-item">
<span class="elementor-icon-list-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span class="elementor-icon-list-text">Intervention sur toute l'IDF</span>
</li>
<li class="elementor-icon-list-item">
<span class="elementor-icon-list-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span class="elementor-icon-list-text">Intervention en urgence ou sur RDV</span>
</li>
<li class="elementor-icon-list-item">
<span class="elementor-icon-list-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span class="elementor-icon-list-text">Equipe d'experts de +15 ans d'expérience</span>
</li>
</ul>
</div>
<div class="elementor-element elementor-element-3f9516a9 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="3f9516a9" data-widget_type="button.default">
<a class="elementor-button elementor-button-link elementor-size-sm" href="tel:+33745046175">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-volume" viewbox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg> </span>
<span class="elementor-button-text">J'appelle le +33 7 45 04 61 75</span>
</span>
</a>
</div>
<div class="elementor-element elementor-element-44f5b96f elementor-mobile-align-center elementor-hidden-desktop elementor-hidden-tablet elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="44f5b96f" data-widget_type="button.default">
<a class="elementor-button elementor-button-link elementor-size-sm" href="#devis">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-text">J'obtiens mon devis GRATUIT</span>
</span>
</a>
</div>
</div>
<div class="elementor-element elementor-element-29ec948e e-con-full elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="29ec948e">
<div class="elementor-element elementor-element-7f17ceb2 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="7f17ceb2" data-widget_type="image.default">
<img alt="" class="attachment-1536x1536 size-1536x1536 wp-image-193" decoding="async" height="387" sizes="(max-width: 450px) 100vw, 450px" src="/images/hero1.jpg" srcset="/images/hero1.jpg 450w, /images/hero1.jpg 300w" width="450"/> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-4822a6b3 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="4822a6b3">
<div class="e-con-inner">
<div class="elementor-element elementor-element-74661bf6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="74661bf6">
<div class="elementor-element elementor-element-77847e52 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="77847e52" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">NOS SERVICES</h2> </div>
<div class="elementor-element elementor-element-5747a4b1 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="5747a4b1">
<div class="elementor-element elementor-element-45ba0a66 elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-position-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="45ba0a66" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="elementor-animation-grow attachment-full size-full wp-image-201" decoding="async" height="339" sizes="(max-width: 426px) 100vw, 426px" src="/images/1.jpg" srcset="/images/1.jpg 426w, /images/1.jpg 300w" width="426"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Vitrerie &amp; Miroiterie</h3></div></div> </div>
<div class="elementor-element elementor-element-36454316 elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-position-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="36454316" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="elementor-animation-grow attachment-full size-full wp-image-203" decoding="async" height="339" loading="lazy" sizes="(max-width: 426px) 100vw, 426px" src="/images/3.jpg" srcset="/images/3.jpg 426w, /images/3.jpg 300w" width="426"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Menuisierie Aluminium PVC - Métal - Bois</h3></div></div> </div>
<div class="elementor-element elementor-element-48006b6 elementor-widget-tablet__width-inherit elementor-widget-mobile__width-inherit elementor-widget__width-initial elementor-position-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="48006b6" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="elementor-animation-grow attachment-full size-full wp-image-204" decoding="async" height="339" loading="lazy" sizes="(max-width: 426px) 100vw, 426px" src="/images/4.jpg" srcset="/images/4.jpg 426w, /images/4.jpg 300w" width="426"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Vitrines et Façades Commerciales</h3></div></div> </div>
</div>
</div>
<div class="elementor-element elementor-element-51ab4dc8 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="51ab4dc8">
<div class="elementor-element elementor-element-1bcd0163 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="1bcd0163" data-widget_type="button.default">
<a class="elementor-button elementor-button-link elementor-size-sm" href="http://+33745046175">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-volume" viewbox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg> </span>
<span class="elementor-button-text">J'appelle le +33 7 45 04 61 75</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-2d0cd2aa elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="2d0cd2aa" id="services">
<div class="e-con-inner">
<div class="elementor-element elementor-element-2c9e994e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="2c9e994e">
<div class="elementor-element elementor-element-4a7bb8bb elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="4a7bb8bb" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">Nous assurons tous types d'intervention</h2> </div>
<div class="elementor-element elementor-element-728b8fa5 e-grid e-con-full e-con e-child" data-e-type="container" data-element_type="container" data-id="728b8fa5">
<div class="elementor-element elementor-element-38ef3dfe e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="38ef3dfe" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-387a74bb elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="387a74bb" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-25" decoding="async" height="64" loading="lazy" src="/images/assainissement.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Canalisations d'égouts</h3></div></div> </div>
</div>
</div>
<div class="elementor-element elementor-element-3f89f619 e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="3f89f619" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-251de68d elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="251de68d" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-26" decoding="async" height="64" loading="lazy" src="/images/conduite-de-canalisation.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Canalisations principales</h3></div></div> </div>
</div>
</div>
<div class="elementor-element elementor-element-1820b261 e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="1820b261" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-238b6a2f elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="238b6a2f" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-27" decoding="async" height="64" loading="lazy" src="/images/une-baignoire.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Douches et baignoires</h3></div></div> </div>
</div>
</div>
<div class="elementor-element elementor-element-71472f03 e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="71472f03" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-6d65ca1b elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="6d65ca1b" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-28" decoding="async" height="64" loading="lazy" src="/images/evier.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Eviers de cuisine et lavabos</h3></div></div> </div>
</div>
</div>
<div class="elementor-element elementor-element-4039f25f e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="4039f25f" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-2525bbc2 elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="2525bbc2" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-29" decoding="async" height="64" loading="lazy" src="/images/machine-a-laver.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Canalisations machine à laver</h3></div></div> </div>
</div>
</div>
<div class="elementor-element elementor-element-32befb3f e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="32befb3f" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-738de7b elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="738de7b" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-30" decoding="async" height="64" loading="lazy" src="/images/salle-de-bain.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">Toilettes</h3></div></div> </div>
</div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-3203a3d7 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="3203a3d7">
<div class="e-con-inner">
<div class="elementor-element elementor-element-7be94aa3 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7be94aa3">
<div class="elementor-element elementor-element-2a64e7d1 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="2a64e7d1">
<div class="elementor-element elementor-element-d0c72c3 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="d0c72c3" data-widget_type="image.default">
<img alt="" class="attachment-full size-full wp-image-201" decoding="async" height="339" loading="lazy" sizes="(max-width: 426px) 100vw, 426px" src="/images/1.jpg" srcset="/images/1.jpg 426w, /images/1.jpg 300w" width="426"/> </div>
</div>
<div class="elementor-element elementor-element-1057298d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="1057298d">
<div class="elementor-element elementor-element-4413f78a elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="4413f78a" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">Vitrerie &amp; Miroiterie</h2> </div>
<div class="elementor-element elementor-element-2a1b04e8 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="2a1b04e8" data-widget_type="text-editor.default">
<p>Nous concevons, fabriquons et installons des solutions en verre sur mesure pour apporter lumière, sécurité et élégance à vos espaces. De la pose de doubles vitrages performants aux parois de douche, garde-corps, crédences et miroirs décoratifs, nous intervenons avec précision et finitions haut de gamme. Conseils techniques, choix des traitements et teintes, prises de cotes millimétrées, intervention rapide en dépannage et remplacement de casse. Notre priorité : allier esthétique, confort thermique et acoustique, tout en respectant vos délais et votre budget.</p> </div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-30d45a53 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="30d45a53">
<div class="e-con-inner">
<div class="elementor-element elementor-element-356ee27e e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="356ee27e">
<div class="elementor-element elementor-element-4b52e339 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4b52e339">
<div class="elementor-element elementor-element-69d607ff elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="69d607ff" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">Menuisierie Aluminium PVC - Métal - Bois​</h2> </div>
<div class="elementor-element elementor-element-960d1e5 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="960d1e5" data-widget_type="text-editor.default">
<p>Nous réalisons des menuiseries durables et performantes, adaptées à votre style et aux contraintes du site. Fenêtres, portes, baies coulissantes, verrières, portails et clôtures : chaque matériau est choisi pour ses atouts. Aluminium pour la finesse et la longévité, PVC pour l’isolation et l’entretien, bois pour la chaleur et l’authenticité, acier pour la robustesse et le design. Étanchéité, sécurité, quincailleries fiables, motorisations et normes en vigueur : nous garantissons des ouvrages sur mesure, esthétiques et faciles à vivre.</p> </div>
</div>
<div class="elementor-element elementor-element-e07d1f3 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="e07d1f3">
<div class="elementor-element elementor-element-5e6f02a9 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="5e6f02a9" data-widget_type="image.default">
<img alt="" class="attachment-full size-full wp-image-203" decoding="async" height="339" loading="lazy" sizes="(max-width: 426px) 100vw, 426px" src="/images/3.jpg" srcset="/images/3.jpg 426w, /images/3.jpg 300w" width="426"/> </div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-15f554e e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="15f554e">
<div class="e-con-inner">
<div class="elementor-element elementor-element-4270e47 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4270e47">
<div class="elementor-element elementor-element-2a84eaf e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="2a84eaf">
<div class="elementor-element elementor-element-5a55966 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="5a55966" data-widget_type="image.default">
<img alt="" class="attachment-full size-full wp-image-204" decoding="async" height="339" loading="lazy" sizes="(max-width: 426px) 100vw, 426px" src="/images/4.jpg" srcset="/images/4.jpg 426w, /images/4.jpg 300w" width="426"/> </div>
</div>
<div class="elementor-element elementor-element-dba7935 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="dba7935">
<div class="elementor-element elementor-element-55c973a elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="55c973a" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">Vitrines et Façades Commerciales​</h2> </div>
<div class="elementor-element elementor-element-3c3e9f6 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="3c3e9f6" data-widget_type="text-editor.default">
<p>Nous accompagnons marques et commerces pour créer des vitrines qui attirent le regard et des façades qui renforcent l’identité. Études techniques, respect des contraintes ERP, sécurité renforcée, contrôle solaire, intégration d’enseignes, éclairages et portes automatiques. Verres feuilletés, anti-effraction, sérigraphies et films vous offrent visibilité, protection et confort. Fabrication sur mesure, montage soigné, coordination de chantier et interventions rapides en maintenance. Objectif : optimiser l’expérience client, la performance énergétique et l’image de votre point de vente.</p> </div>
</div>
</div>
<div class="elementor-element elementor-element-6a7b6cf e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="6a7b6cf">
<div class="elementor-element elementor-element-e68d491 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="e68d491" data-widget_type="button.default">
<a class="elementor-button elementor-button-link elementor-size-sm" href="tel:+33745046175">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-volume" viewbox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg> </span>
<span class="elementor-button-text">J'appelle le +33 7 45 04 61 75</span>
</span>
</a>
</div>
</div>
</div>
</div>
<section class="elementor-section elementor-top-section elementor-element elementor-element-c2e47af elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="c2e47af" data-settings='{"background_background":"classic"}'>
<div class="elementor-container elementor-column-gap-no">
<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-471b371" data-e-type="column" data-element_type="column" data-id="471b371">
<div class="elementor-widget-wrap elementor-element-populated">
<div class="elementor-element elementor-element-d10222a elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="d10222a" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">Un aperçu de nos dernières réalisations​</h2> </div>
<div class="elementor-element elementor-element-80531c1 elementor-widget elementor-widget-gallery" data-e-type="widget" data-element_type="widget" data-id="80531c1" data-settings='{"gap":{"unit":"px","size":20,"sizes":[]},"aspect_ratio":"1:1","gap_tablet":{"unit":"px","size":25,"sizes":[]},"gap_mobile":{"unit":"px","size":20,"sizes":[]},"columns_tablet":3,"lazyload":"yes","gallery_layout":"grid","columns":4,"columns_mobile":1,"link_to":"file","overlay_background":"yes","content_hover_animation":"fade-in"}' data-widget_type="gallery.default">
<div class="elementor-gallery__container">
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc1LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0xLmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (1)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-1.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-1.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-1.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc2LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0yLmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (2)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-2.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-2.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-2.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc3LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0zLmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (3)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-3.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-3.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-3.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc4LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy00LmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (4)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-4.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-4.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-4.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjc5LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy01LmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (5)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-5.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-5.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-5.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MjgwLCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy02LmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (6)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-6.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-6.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-6.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MjgxLCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy03LmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (7)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-7.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-7.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-7.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MjgyLCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy04LmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (8)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-8.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-8.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-8.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MjgzLCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy05LmpwZyIsInNsaWRlc2hvdyI6IjgwNTMxYzEifQ%3D%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (9)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-9.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-9.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-9.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjg0LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0xMC5qcGciLCJzbGlkZXNob3ciOiI4MDUzMWMxIn0%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (10)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-10.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-10.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-10.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjg1LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0xMS5qcGciLCJzbGlkZXNob3ciOiI4MDUzMWMxIn0%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (11)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-11.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-11.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-11.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjg2LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0xMi5qcGciLCJzbGlkZXNob3ciOiI4MDUzMWMxIn0%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (12)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-12.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-12.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-12.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjg3LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0xMy5qcGciLCJzbGlkZXNob3ciOiI4MDUzMWMxIn0%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (13)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-13.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-13.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-13.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjg4LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0xNC5qcGciLCJzbGlkZXNob3ciOiI4MDUzMWMxIn0%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (14)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-14.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-14.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-14.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6Mjg5LCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0xNS5qcGciLCJzbGlkZXNob3ciOiI4MDUzMWMxIn0%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (15)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-15.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-15.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-15.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
<a class="e-gallery-item elementor-gallery-item elementor-animated-content" data-e-action-hash="#elementor-action%3Aaction%3Dlightbox%26settings%3DeyJpZCI6MjkwLCJ1cmwiOiJodHRwczpcL1wvY2FwYWx1LmZyXC93cC1jb250ZW50XC91cGxvYWRzXC8yMDI1XC8wOVwvY2FwLXJlYWxpc2F0aW9ucy0xNi5qcGciLCJzbGlkZXNob3ciOiI4MDUzMWMxIn0%3D" data-elementor-lightbox-slideshow="80531c1" data-elementor-lightbox-title="cap-realisations (16)" data-elementor-open-lightbox="yes" href="/images/cap-realisations-16.jpg">
<div aria-label="" class="e-gallery-image elementor-gallery-item__image" data-height="700" data-thumbnail="https://capalu.fr/wp-content/uploads/2025/09/cap-realisations-16.jpg" data-width="600" role="img" style="background-image: url('/images/cap-realisations-16.jpg'); min-height: 240px; background-size: cover; background-position: center;"></div>
<div class="elementor-gallery-item__overlay"></div>
</a>
</div>
</div>
</div>
</div>
</div>
</section>
<div class="elementor-element elementor-element-40e52bb9 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="40e52bb9" data-settings='{"background_background":"classic"}' id="avis">
<div class="e-con-inner">
<div class="elementor-element elementor-element-7894c821 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7894c821">
<div class="elementor-element elementor-element-7077335d elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="7077335d" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">98% de nos clients sont satisfaits et ils nous le font savoir</h2> </div>
<div class="elementor-element elementor-element-2069bf62 e-grid e-con-full e-con e-child" data-e-type="container" data-element_type="container" data-id="2069bf62">
<div class="elementor-element elementor-element-54076ea2 e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="54076ea2" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-43a4d1d9 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="43a4d1d9">
<div class="elementor-element elementor-element-3ffdb3ab elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="3ffdb3ab" data-widget_type="heading.default">
<h3 class="elementor-heading-title elementor-size-default">Didier D.</h3> </div>
<div class="elementor-element elementor-element-65a8f770 elementor-widget elementor-widget-rating" data-e-type="widget" data-element_type="widget" data-id="65a8f770" data-widget_type="rating.default">
<div class="e-rating" itemprop="reviewRating" itemscope="" itemtype="https://schema.org/Rating">
<meta content="0" itemprop="worstRating"/>
<meta content="5" itemprop="bestRating"/>
<div aria-label="Noté 5 sur 5" class="e-rating-wrapper" content="5" itemprop="ratingValue" role="img">
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-1bf4d442 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1bf4d442" data-widget_type="text-editor.default">
<p>Chantier pas facile, mais ATIDF a veillé à toujours être très réactif rapidement pour résoudre les problèmes qui ont pu survenir. Entreprise sérieuse, très bon contact.</p> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-2b3aec58 e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="2b3aec58" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-4fa8c3b4 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4fa8c3b4">
<div class="elementor-element elementor-element-47e789ea elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="47e789ea" data-widget_type="heading.default">
<h3 class="elementor-heading-title elementor-size-default">Dan V.</h3> </div>
<div class="elementor-element elementor-element-90cdebf elementor-widget elementor-widget-rating" data-e-type="widget" data-element_type="widget" data-id="90cdebf" data-widget_type="rating.default">
<div class="e-rating" itemprop="reviewRating" itemscope="" itemtype="https://schema.org/Rating">
<meta content="0" itemprop="worstRating"/>
<meta content="5" itemprop="bestRating"/>
<div aria-label="Noté 5 sur 5" class="e-rating-wrapper" content="5" itemprop="ratingValue" role="img">
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-1f7c56d0 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="1f7c56d0" data-widget_type="text-editor.default">
<p>Nous avons eu un souci dans notre maison d’un toilette bouché la société est venue sur place rapidement et a résolu le problème cela s’est très bien passé je voulais conseille c’est une équipe de professionnel</p> </div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-3d7a39a8 e-flex e-con-boxed e-con e-child" data-e-type="container" data-element_type="container" data-id="3d7a39a8" data-settings='{"background_background":"classic"}'>
<div class="e-con-inner">
<div class="elementor-element elementor-element-196e3399 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="196e3399">
<div class="elementor-element elementor-element-50611f98 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="50611f98" data-widget_type="heading.default">
<h3 class="elementor-heading-title elementor-size-default">Rémi</h3> </div>
<div class="elementor-element elementor-element-406daf94 elementor-widget elementor-widget-rating" data-e-type="widget" data-element_type="widget" data-id="406daf94" data-widget_type="rating.default">
<div class="e-rating" itemprop="reviewRating" itemscope="" itemtype="https://schema.org/Rating">
<meta content="0" itemprop="worstRating"/>
<meta content="5" itemprop="bestRating"/>
<div aria-label="Noté 5 sur 5" class="e-rating-wrapper" content="5" itemprop="ratingValue" role="img">
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
<div class="e-icon">
<div class="e-icon-wrapper e-icon-marked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
<div class="e-icon-wrapper e-icon-unmarked">
<svg aria-hidden="true" class="e-font-icon-svg e-eicon-star" viewbox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M450 75L338 312 88 350C46 354 25 417 58 450L238 633 196 896C188 942 238 975 275 954L500 837 725 954C767 975 813 942 804 896L763 633 942 450C975 417 954 358 913 350L663 312 550 75C529 33 471 33 450 75Z"></path></svg> </div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-74f5bb22 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="74f5bb22" data-widget_type="text-editor.default">
									Parfaitement satisfait. Dispo rapidement (évacuation principale refaite à neuf sur 13m), coût dans la moyenne basse des autres artisans, travail ultra propre et qualitatif. Merci encore!								</div>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-297365f4 e-con-full elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="297365f4">
<div class="elementor-element elementor-element-3900aa90 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="3900aa90" data-widget_type="button.default">
<a class="elementor-button elementor-button-link elementor-size-sm" href="http://+33745046175">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-volume" viewbox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg> </span>
<span class="elementor-button-text">J'appelle le +33 7 45 04 61 75</span>
</span>
</a>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-288f8780 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="288f8780" id="contact">
<div class="e-con-inner">
<div class="elementor-element elementor-element-347d9c78 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="347d9c78" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">Déroulement de notre prestation</h2> </div>
<div class="elementor-element elementor-element-7b886432 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7b886432">
<div class="elementor-element elementor-element-7d17ed47 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="7d17ed47" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-33" decoding="async" height="64" loading="lazy" src="/images/contact.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">1. Contact</h3><p class="elementor-image-box-description">Téléphone, e-mail ou formulaire de contact</p></div></div> </div>
<div class="elementor-element elementor-element-579abd6c elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="579abd6c" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-34" decoding="async" height="64" loading="lazy" src="/images/euro.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">2. Estimation GRATUITE</h3><p class="elementor-image-box-description">Une fois contacté, notre expert vous établira une première estimation selon votre situation</p></div></div> </div>
<div class="elementor-element elementor-element-69bcec22 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="69bcec22" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-35" decoding="async" height="64" loading="lazy" src="/images/validation.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">3. Visite chantier et devis définitif</h3><p class="elementor-image-box-description">Après visite du lieu d'intervention, notre équipe pourra alors vous établir un devis complet sans frais cachés</p></div></div> </div>
<div class="elementor-element elementor-element-7f816f71 elementor-position-left elementor-vertical-align-middle elementor-widget elementor-widget-image-box" data-e-type="widget" data-element_type="widget" data-id="7f816f71" data-widget_type="image-box.default">
<div class="elementor-image-box-wrapper"><figure class="elementor-image-box-img"><img alt="" class="attachment-full size-full wp-image-36" decoding="async" height="64" loading="lazy" src="/images/intervention.png" width="64"/></figure><div class="elementor-image-box-content"><h3 class="elementor-image-box-title">4. Validation du devis et intervention</h3><p class="elementor-image-box-description">Une fois que vous avez validé le devis, nos experts font le nécessaire pour une intervention efficace et 100% sécurisée</p></div></div> </div>
<div class="elementor-element elementor-element-75ba17da e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="75ba17da">
<div class="elementor-element elementor-element-435b98df elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="435b98df" data-widget_type="button.default">
<a class="elementor-button elementor-button-link elementor-size-sm" href="tel:+33745046175">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-volume" viewbox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg> </span>
<span class="elementor-button-text">J'appelle le +33 7 45 04 61 75</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>
<section class="elementor-section elementor-top-section elementor-element elementor-element-69e5b85e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-e-type="section" data-element_type="section" data-id="69e5b85e">
<div class="elementor-container elementor-column-gap-default">
</div>
</section>
<div class="elementor-element elementor-element-fcd46e6 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="fcd46e6" id="devis">
<div class="e-con-inner">
<div class="elementor-element elementor-element-4711fb69 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="4711fb69">
<div class="elementor-element elementor-element-7f4e21c6 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7f4e21c6">
<div class="elementor-element elementor-element-37c1c850 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="37c1c850">
<div class="elementor-element elementor-element-38058f35 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="38058f35" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">Contactez-nous maintenant</h2> </div>
<div class="elementor-element elementor-element-46e2047f elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="46e2047f" data-widget_type="text-editor.default">
<p>Nos professionnels expérimentés sont à votre disposition 24h/24, 7j/7 pour répondre à tous vos besoins. Vous pouvez choisir le moyen de contact qui vous convient.</p> </div>
</div>
<div class="elementor-element elementor-element-1db5b3a7 elementor-view-framed elementor-position-inline-start elementor-shape-circle elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="1db5b3a7" data-widget_type="icon-box.default">
<div class="elementor-icon-box-wrapper">
<div class="elementor-icon-box-icon">
<a aria-label="+33 7 45 04 61 75" class="elementor-icon" href="tel:+33745046175" tabindex="-1">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-volume" viewbox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg> </a>
</div>
<div class="elementor-icon-box-content">
<div class="elementor-icon-box-title">
<a href="tel:+33745046175">
							+33 7 45 04 61 75						</a>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-37bdb9bd elementor-view-framed elementor-position-inline-start elementor-tablet-position-inline-start elementor-mobile-position-inline-start elementor-shape-circle elementor-widget elementor-widget-icon-box" data-e-type="widget" data-element_type="widget" data-id="37bdb9bd" data-widget_type="icon-box.default">
<div class="elementor-icon-box-wrapper">
<div class="elementor-icon-box-icon">
<a aria-label="WhatsApp CapAlu" class="elementor-icon" href="https://wa.me/33745046175" target="_blank" rel="noopener noreferrer" tabindex="-1">
<svg aria-hidden="true" class="e-font-icon-svg e-fab-whatsapp" viewbox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg> </a>
</div>
<div class="elementor-icon-box-content">
<div class="elementor-icon-box-title">
<a href="https://wa.me/33745046175" target="_blank" rel="noopener noreferrer">
							WhatsApp : +33 7 45 04 61 75						</a>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-593238b8 e-con-full e-flex e-con e-child netlify-form-column-card" data-e-type="container" data-element_type="container" data-id="593238b8" data-settings='{"background_background":"classic"}'>
<div class="elementor-element elementor-element-37487750 elementor-widget elementor-widget-text-editor netlify-form-header" data-e-type="widget" data-element_type="widget" data-id="37487750" data-widget_type="text-editor.default">
<h3 class="netlify-form-title">Demande de devis gratuit</h3>
<p class="netlify-form-subtitle">Remplissez le formulaire ci-dessous et un expert vous contactera dans un délai d’une heure.</p> </div>
<div class="elementor-element elementor-element-74963f0 elementor-button-align-stretch elementor-widget elementor-widget-form" data-e-type="widget" data-element_type="widget" data-id="74963f0" data-widget_type="form.default">
<form aria-label="Demande de devis" class="netlify-modern-form elementor-form" method="post" name="devis" data-netlify="true" data-netlify-honeypot="bot-field">
<input name="form-name" type="hidden" value="devis"/>
<input name="subject" type="hidden" value="Nouvelle demande de devis"/>
<p style="display:none"><label>Ne pas remplir : <input name="bot-field"/></label></p>

<!-- Nom complet avec Floating Label -->
<div class="netlify-floating-group">
  <div class="netlify-input-icon">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  </div>
  <input class="netlify-floating-input" id="field-name" name="name" type="text" placeholder="Ex : Martin Dupont" required />
  <label class="netlify-floating-label" for="field-name">Votre nom complet*</label>
</div>

<!-- Email et Téléphone (Grille 2 colonnes) -->
<div class="netlify-grid-2">
  <div class="netlify-floating-group">
    <div class="netlify-input-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    </div>
    <input class="netlify-floating-input" id="field-email" name="email" type="email" placeholder="Ex : contact@exemple.fr" required />
    <label class="netlify-floating-label" for="field-email">Votre email*</label>
  </div>
  <div class="netlify-floating-group">
    <div class="netlify-input-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    </div>
    <input class="netlify-floating-input" id="field-phone" name="phone" type="tel" pattern="[0-9()#&amp;+*-=.]+" placeholder="Ex : 06 12 34 56 78" required title="Seuls les caractères de numéros de téléphone sont acceptés." />
    <label class="netlify-floating-label" for="field-phone">Votre téléphone*</label>
  </div>
</div>

<!-- Adresse et Code postal (Grille 2 colonnes) -->
<div class="netlify-grid-2">
  <div class="netlify-floating-group">
    <div class="netlify-input-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
    </div>
    <input class="netlify-floating-input" id="field-address" name="address" type="text" placeholder="Ex : 12 Avenue des Champs-Élysées" required />
    <label class="netlify-floating-label" for="field-address">Votre adresse*</label>
  </div>
  <div class="netlify-floating-group">
    <div class="netlify-input-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M8 10h.01"/><path d="M16 10h.01"/><path d="M8 14h.01"/><path d="M16 14h.01"/></svg>
    </div>
    <input class="netlify-floating-input" id="field-postal" name="postalCode" type="text" placeholder="Ex : 75008" required />
    <label class="netlify-floating-label" for="field-postal">Votre code postal*</label>
  </div>
</div>

<!-- Message avec Floating Label -->
<div class="netlify-floating-group" style="margin-bottom: 1.5rem;">
  <div class="netlify-input-icon textarea-icon">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  </div>
  <textarea class="netlify-floating-input netlify-floating-textarea" id="field-message" name="message" placeholder="Ex : Remplacement d'un double vitrage cassé..." rows="3"></textarea>
  <label class="netlify-floating-label textarea-label" for="field-message">Décrivez votre besoin (travaux, dimensions, urgence...)</label>
</div>

<!-- Bouton de soumission fidèle au style du site CapAlu (sans flèche ni transition artificielle) -->
<button class="elementor-button elementor-size-sm netlify-site-submit-btn" type="submit">
  <span class="elementor-button-content-wrapper">
    <span class="elementor-button-text">J'obtiens mon devis GRATUIT</span>
  </span>
</button>
</form>
</div>
</div>
</div>
</div>
</div>
<div class="elementor-element elementor-element-51005b69 e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="51005b69">
<div class="e-con-inner">
<div class="elementor-element elementor-element-76927203 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="76927203">
<div class="elementor-element elementor-element-5232af25 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="5232af25">
<div class="elementor-element elementor-element-477490e7 elementor-widget elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="477490e7" data-widget_type="image.default">
<img alt="" class="attachment-full size-full wp-image-294" decoding="async" height="1200" loading="lazy" sizes="(max-width: 800px) 100vw, 800px" src="/images/CAP-Vertical.jpg" srcset="/images/CAP-Vertical.jpg 800w, /images/CAP-Vertical.jpg 200w, /images/CAP-Vertical.jpg 683w, /images/CAP-Vertical.jpg 768w" width="800"/> </div>
</div>
<div class="elementor-element elementor-element-53e9ad3d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="53e9ad3d">
<div class="elementor-element elementor-element-280714e6 elementor-widget elementor-widget-heading" data-e-type="widget" data-element_type="widget" data-id="280714e6" data-widget_type="heading.default">
<h2 class="elementor-heading-title elementor-size-default">CapAlu, votre choix de confiance</h2> </div>
<div class="elementor-element elementor-element-7cb599d4 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="7cb599d4" data-widget_type="text-editor.default">
<p>CapAlu est une entreprise spécialisée dans les travaux de vitrerie et de menuiserie en Île-de-France.</p><p>Experts en fabrication et installation, nous réalisons avec précision et rapidité vos projets de fenêtres, portes, façades vitrées, vérandas et aménagements sur mesure. Notre équipe qualifiée maîtrise parfaitement les techniques modernes de vitrerie et de menuiserie (aluminium – PVC – métallique – bois), garantissant des réalisations esthétiques, solides et durables.</p><p>Notre objectif : vous offrir des solutions élégantes, fiables et adaptées à vos besoins, tout en assurant confort, sécurité et isolation optimale.</p> </div>
<div class="elementor-element elementor-element-3602cb1a elementor-align-start elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-e-type="widget" data-element_type="widget" data-id="3602cb1a" data-widget_type="icon-list.default">
<ul class="elementor-icon-list-items">
<li class="elementor-icon-list-item">
<span class="elementor-icon-list-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span class="elementor-icon-list-text">+1000 de projets et interventions réalisés</span>
</li>
<li class="elementor-icon-list-item">
<span class="elementor-icon-list-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-check" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg> </span>
<span class="elementor-icon-list-text">+900 de clients satisfaits</span>
</li>
</ul>
</div>
</div>
</div>
<div class="elementor-element elementor-element-7293e4d e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="7293e4d">
<div class="elementor-element elementor-element-3ccc105 elementor-align-left elementor-mobile-align-center elementor-widget elementor-widget-button" data-e-type="widget" data-element_type="widget" data-id="3ccc105" data-widget_type="button.default">
<a class="elementor-button elementor-button-link elementor-size-sm" href="tel:+33745046175">
<span class="elementor-button-content-wrapper">
<span class="elementor-button-icon">
<svg aria-hidden="true" class="e-font-icon-svg e-fas-phone-volume" viewbox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422zM247.126 95.473c11.832 20.047 11.832 45.008 0 65.055-3.95 6.693-13.108 7.959-18.718 2.581l-5.975-5.726c-3.911-3.748-4.793-9.622-2.261-14.41a32.063 32.063 0 0 0 0-29.945c-2.533-4.788-1.65-10.662 2.261-14.41l5.975-5.726c5.61-5.378 14.768-4.112 18.718 2.581zm91.787-91.187c60.14 71.604 60.092 175.882 0 247.428-4.474 5.327-12.53 5.746-17.552.933l-5.798-5.557c-4.56-4.371-4.977-11.529-.93-16.379 49.687-59.538 49.646-145.933 0-205.422-4.047-4.85-3.631-12.008.93-16.379l5.798-5.557c5.022-4.813 13.078-4.394 17.552.933zm-45.972 44.941c36.05 46.322 36.108 111.149 0 157.546-4.39 5.641-12.697 6.251-17.856 1.304l-5.818-5.579c-4.4-4.219-4.998-11.095-1.285-15.931 26.536-34.564 26.534-82.572 0-117.134-3.713-4.836-3.115-11.711 1.285-15.931l5.818-5.579c5.159-4.947 13.466-4.337 17.856 1.304z"></path></svg> </span>
<span class="elementor-button-text">J'appelle le +33 7 45 04 61 75</span>
</span>
</a>
</div>
</div>
</div>
</div>
</div>` }} />
      <footer dangerouslySetInnerHTML={{ __html: `<footer class="elementor elementor-111 elementor-location-footer" data-elementor-id="111" data-elementor-post-type="elementor_library" data-elementor-type="footer">
<div class="elementor-element elementor-element-2fa28f1b e-flex e-con-boxed e-con e-parent" data-e-type="container" data-element_type="container" data-id="2fa28f1b">
<div class="e-con-inner">
<div class="elementor-element elementor-element-5bd23b2 e-con-full e-flex e-con e-child" data-e-type="container" data-element_type="container" data-id="5bd23b2">
<div class="elementor-element elementor-element-438cb32b elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-e-type="widget" data-element_type="widget" data-id="438cb32b" data-widget_type="theme-site-logo.default">
<img alt="" class="attachment-medium size-medium wp-image-235" height="237" sizes="(max-width: 300px) 100vw, 300px" src="/images/logocapalu.jpg" srcset="/images/logocapalu.jpg 300w, /images/logocapalu.jpg 430w" width="300"/> </div>
<div class="elementor-element elementor-element-5ea20a19 elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="5ea20a19" data-widget_type="text-editor.default">
<p>Cap Alu, 44 rue Rébéval, 75019 Paris</p> </div>
<div class="elementor-element elementor-element-412919ea elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="412919ea" data-widget_type="text-editor.default">
									2026 © Tous droits réservés. 								</div>
<div class="elementor-element elementor-element-319b4e36 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-text-editor" data-e-type="widget" data-element_type="widget" data-id="319b4e36" data-widget_type="text-editor.default">
<p><a href="https://capalu.fr/mentions-legales/" rel="noopener" style="text-decoration: underline !important;" target="_blank">Mentions légales</a></p> </div>
</div>
</div>
</div>
</footer>` }} />
    </div>
  );
}
