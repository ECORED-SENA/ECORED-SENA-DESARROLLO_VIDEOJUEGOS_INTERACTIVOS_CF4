<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down-right")
      .titulo-principal__numero.text-white
        span 1
      h1 Interfaz y flujo de integración de <em>Unity 3D</em>
    p.mb-5(data-aos="fade-down-right") A continuación, se describen los pasos requeridos para la instalación de Unity 3D e información general de la forma de operar y/o utilizar algunas de sus funcionalidades básicas.
    img.mb-5(data-aos="fade-down-right")(src='@/assets/curso/tema1/imagen1.jpg')
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.1 Instalación de <em>Unity 3D</em>
    p.mb-5(data-aos="fade-down-right") En este caso se utilizará la versión gratuita que puede descargar desde de 
      a.mb-4(:href="('https://unity.com/es')" target="_blank") 
        span.fuente-link https://unity.com/es
    .row.justify-content-center(data-aos="fade-down-right")
      .col-10
        .tarjeta.fondo-1.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 <em>Unity</em> Instalacion
                  p.text-small En el siguiente documento puede consultar el detalle con los pasos de instalación, creación de <em>Unity ID</em> y el tipo de microjuego inicial.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/CF004_Anexo_UnityInstalacion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 1.2 Navegación en <em>Unity 3D</em>
    p(data-aos="fade-down-right") Después de finalizada la creación del proyecto se muestra la interfaz de Unity como se ve en la siguiente imagen.  
    p.mb-5(data-aos="fade-down-right") En dicha pantalla se puede ver el entorno 3D y las pestañas, desde allí se puede configurar la interfaz según la necesidad requerida.
    .titulo-sexto.color-acento-contenido(data-aos="fade-down-right")
      h5 Figura 1. 
      span Interfaz <em>Unity</em>.
    figure.mb-5
      img(src='@/assets/curso/tema1/imagen2.png', alt='Interfaz')
      figcaption  Nota. Pantalla principal proyecto <em>Unity</em>.
    p.mb-5 Además, puede configurar la interfaz de Unity 3D según la necesidad requerida a través de las siguientes opciones:
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
