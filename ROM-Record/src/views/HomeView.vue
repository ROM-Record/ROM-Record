<script>

</script>

<template>
  <main>
    <TheWelcome />
    <h1>This is home page</h1>
  </main>
</template>

<script>
export default {
  name: 'Home',
  props: {},
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.home-desktop1 {
  width: 100%;
  height: 1080px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.home-desktop2 {
  top: 0px;
  left: 0px;
  width: 1600px;
  height: 1079px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 0;
  background-color: rgba(44, 155, 102, 1);
}
.home-text {
  top: var(--dl-space-space-oneandhalfunits);
  left: 0px;
  color: rgb(255, 255, 255);
  right: 0px;
  width: 359px;
  height: auto;
  margin: auto;
  position: absolute;
  font-size: 48px;
  font-style: Regular;
  text-align: left;
  font-family: Dela Gothic One;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-group10 {
  top: 0px;
  right: 0px;
  width: 527.2380981445312px;
  height: 37.96875px;
  margin: 108px;
  display: flex;
  position: absolute;
  align-items: flex-start;
  flex-shrink: 1;
  border-radius: 9px;
  background-color: rgba(219, 7, 7, 1);
}
.home-text1 {
  top: 2.109375px;
  left: 205.20635986328125px;
  color: rgba(255, 255, 255, 1);
  width: 118px;
  height: auto;
  position: absolute;
  font-size: 17px;
  font-style: B;
  text-align: left;
  font-family: FOT-NewRodin Pro;
  font-weight: 400;
  line-height: normal;
  font-stretch: normal;
  text-decoration: none;
}
.home-frame-search-bar {
  gap: 10px;
  top: 0px;
  left: 0px;
  width: 535px;
  height: 35px;
  margin: 108px;
  display: flex;
  overflow: hidden;
  position: absolute;
  align-self: stretch;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 9px;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 1);
}
.home-content {
  display: flex;
  padding: 8px;
  align-self: stretch;
  align-items: center;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: var(--dl-color-systemmaterials-smlthick);
}
.home-frame-magnifyingglass {
  width: 28px;
  border: 2px dashed rgba(120, 120, 120, 0.4);
  height: 28px;
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: flex-start;
  flex-shrink: 0;
}
.home-text3 {
  color: var(--dl-color-labelcolors-lclsecondary);
  height: auto;
  flex-grow: 1;
  font-size: 17px;
  font-style: B;
  text-align: left;
  font-family: FOT-NewRodin Pro;
  font-weight: 400;
  line-height: 22px;
  font-stretch: normal;
  text-decoration: none;
}
</style>
