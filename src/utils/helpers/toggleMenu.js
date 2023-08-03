export const showContainerLinks = () => {
      const containerLinksElement = document.getElementById('container-links');
      const containerShadowBox = document.getElementById('shadow-box');
      containerLinksElement.style.left = '0px';
      containerShadowBox.style.display = 'block'  
}

export const hideContainerLinks = () => {     
      const containerLinksElement = document.getElementById('container-links');
      const containerShadowBox = document.getElementById('shadow-box');
      containerLinksElement.style.left = '-250px';
      containerShadowBox.style.display = 'none'  
}