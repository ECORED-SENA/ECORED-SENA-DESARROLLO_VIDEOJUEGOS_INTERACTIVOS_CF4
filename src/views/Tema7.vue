<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-down")
      .titulo-principal__numero
        span 7
      h1 Interfaz
    .row.justify-content-center
      .col-lg-10.col-md-12(data-aos="fade-down-right")
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.cambioimg(
            :style="{'background-image': `url(${require('@/assets/curso/tema7/imagen1.jpg')})`}"
          )
          .bloque-texto-g__texto.cambiotexto.p-4
            p.mb-0 La interfaz en los videojuegos es muy importante, ya que es la antesala del juego en proceso, esta permite al usuario navegar, buscar información, tener objetivos claros, ajustar diversas opciones como el sonido, los gráficos, los efectos, los controles, pero también está presente durante el desarrollo del juego. Todo depende del tipo de historia que se quiera contar.
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 7.1 Interfaz del videojuego
    p.mb-4(data-aos="fade-down-right") Hay unos objetivos claros a tener en cuenta para el desarrollo de una interfaz. Es necesario tener en cuenta la narrativa que es la historia que se cuenta en el juego, y lo que se puede encontrar en él, como elementos externos que apoyan la jugabilidad. Para esto hay que preguntarse si estos componentes estarán presentes en el desarrollo del juego; hay cuatro elementos súper importantes a tener en cuenta: interfaz no diegética, diegética, espacial y meta.
    .row.justify-content-center.mb-4(data-aos="fade-down-right")
      .col-lg-10.col-11
        .tarjeta.fondo-1.p-3.mb-5
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema1/figura1.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 <em>Unity</em> Luces
                  p.text-small En el siguiente documento puede consultar información y ejemplos de los tipos de interfaz enunciados previamente.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-down-right")
      h2 7.2 Diseño de interfaz del videojuego
    p.mb-4(data-aos="fade-down-right") Los elementos de información e interactividad dentro del juego, tales como barra de energía, menús de opciones y demás son llamados interfaz de usuario o UI (<em>User interface</em>). Es así como la interfaz es muy importante en el proyecto de videojuego, puesto que es la que brinda información del estatus del personaje.
    img.mb-4(src='@/assets/curso/tema7/imagen2.jpg')
    AcordionA(data-aos="fade-down-right").mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-around(titulo="Paso 1: <em>image</em>")
        .col-lg-6.mb-4.mb-lg-0
          p Para empezar, lo primero que se debe hacer es ir a la pestaña <em>GameObject – UI – Image</em>, como se muestra en la siguiente figura.  En la pestaña <em>hierarchy</em> aparece un nuevo elemento llamado canvas, el cual contiene el elemento <em>image</em> y el evento <em>system</em>.
          p.mb-4 Los pasos anteriores crearán un rectángulo transparente, el cual es el canvas de la UI, así por ende este es el espacio donde se van a poner los elementos, luego se crea el botón desde <em>GameObjects – UI</em> – Boton
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen3.jpg')
            figcaption Nota. Ejemplo creación interfaz.
      .row.justify-content-around(titulo="Paso 2: canva")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 El canva en render mode se asigna a world space para que la interfaz aparezca siempre delante de los objetos que están en escena, como se muestra en la siguiente figura.
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen4.jpg')
            figcaption Nota. Ejemplo creación interfaz – render mode.
      .row.justify-content-around(titulo="Paso 3: texto botón")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 Seleccionando en hierachi el elemento botón, se selecciona el Inspector y se agrega el texto que se quiere que aparezca en el botón, en este caso será el de comenzar juego, como se muestra a continuación:
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen5.jpg')
            figcaption Nota. Ejemplo creación interfaz – texto botón.
      .row.justify-content-around(titulo="Paso 4: barra vida")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 Para poner una barra de vida se crea el objeto <em>Slider</em> accediendo a la barra de menú principal <em>GameObject - UI - Slider</em>. Una vez puesto y seleccionado aparecerá una barra <em>Slider</em>, se despliega y tendrá <em>background</em>, luego se selecciona el Inspector, se da clic en <em>image – color</em> y se asigna rojo, como se muestra en la siguiente figura.
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen6.jpg')
            figcaption  Nota. Ejemplo creación interfaz – barra vida.
      .row.justify-content-around(titulo="Paso 5. <em>Slider – fill area</em>")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 Luego, en el Slider se despliega <em>fill area – fill</em> y se cambia el color a verde para mostrar la barra de vida cuando está llena, como se muestra en la siguiente figura.
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen7.jpg')
            figcaption  Nota. Ejemplo creación interfaz – <em>fill</em> área.
      .row.justify-content-around(titulo="Paso 6: <em>Slider - handle slide area</em>")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 Ahora, en la tercera opción <em>handle</em> slide area se despliega y en <em>handle</em> se agrega un icono en file <em>source</em> para la barra de vida, como se muestra a continuación:
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen8.jpg')
            figcaption Nota. Ejemplo creación interfaz – handle slide área.
      .row.justify-content-around(titulo="Paso 7: <em>Slider - value</em>")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 Ahora para ver el <em>Slider</em> en funcionamiento se puede volver a <em>Slider</em> y en Inspector aumentar el valor para ver cómo se va llenando la barra de vida, como se muestra a continuación:
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen9.jpg')
            figcaption Nota. Ejemplo creación interfaz – slider.
      .row.justify-content-around(titulo="Paso 8: título")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 Finalmente, se va a <em>GameObject – UI - Text</em> para crear el título que acompañará la interfaz, como lo muestra la figura a continuación:
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen10.jpg')
            figcaption Nota. Ejemplo creación interfaz – título.
      .row.justify-content-around(titulo="Paso 9: interfaz final")
        .col-lg-6.mb-4.mb-lg-0
          p.mb-4 Con esto se tienen listos los elementos de la interfaz para iniciar el juego, como se ilustra en la siguiente figura:
          .row
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('downloads/prueba.pdf')" target="_blank")
                span Ampliar imagen
                i.fas.fa-file-download
        .col-lg-5.mb-5
          figure
            img(src='@/assets/curso/tema7/imagen11.jpg')
            figcaption Nota. Ejemplo creación interfaz – elementos agregados.

</template>

<script>
export default {
  name: 'Tema7',
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
