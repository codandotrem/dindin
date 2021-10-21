<template>
            <main>
            <section class="content">
                <div class="info">
                    <h1>Investimento <br> para iniciantes</h1>
                    <p id="texto">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.  
                    </p>
                </div>
                <img src="../assets/imgs-lista-cursos/imagemdois.png">
            </section>

            <section class="videos">
                <div class="video">
                    <video width="462" height="261" controls>
                        <source src="assets/media/doogg.mp4" type="video/mp4">
                        <source src="assets/media/doogg.ogg" type="video/ogg">
                      Seu navegador n~~ao suporta tags de vídeo.
                    </video>
                    <div class="video_descrition">
                        <h2>Aula 1</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br> <br> Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    </div>
                </div>
                <div class="linha"></div>
                <div class="video">
                    <video width="462" height="261" controls>
                        <source src="assets/media/doogg.mp4" type="video/mp4">
                        <source src="assets/media/doogg.ogg" type="video/ogg">
                      Seu navegador n~~ao suporta tags de vídeo.
                    </video>
                    <div class="video_descrition">
                        <h2>Aula 2</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br> <br> Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    </div>
                </div>
                <div class="linha"></div>
                <div class="video">
                    <video width="462" height="261" controls>
                        <source src="assets/media/do.mp4" type="video/mp4">
                        <source src="assets/media/do.ogg" type="video/ogg">
                      Seu navegador n~~ao suporta tags de vídeo.
                    </video>
                    <div class="video_descrition">
                        <h2>Aula 3</h2>
                        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. <br> <br> Ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                    </div>
                </div>
            </section>
        </main>      
</template>
<script>


export default {
  name: "AulasComponente",
  props: {
    msg: String,
  },  
};

</script>

<style scoped>


.videos{
    position: relative;
    width: auto;
    height: 100%;
    background: #F7F7F7;
    background-size:cover
}

.video_descrition{
    position:relative;
    margin-left:76px;
    margin-bottom:75px;
}

.video{
    position:relative;
    display:flex;
    margin-left:213px;
}

video{
    width:100%;
}

.video .video_descrition, video{
    margin-top:75px;
}


.video h2{
    position: relative;
    width:100%;
    height:auto;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    color: #FF4081;
}


.video p{
    position: relative;
    margin-top:26px;
    width: 70%;
    height: 195px;
    font-style: normal;
    font-weight: auto;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #000000;
}
</style>
