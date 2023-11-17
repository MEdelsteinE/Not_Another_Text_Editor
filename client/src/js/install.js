const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
event.preventDefault();
window.deferredPrompt = event;
butInstall.style.display = 'block';
})

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if (!window.deferredPrompt) {
        console.log('The install prompt is not available yet.');
        return;
    }
    butInstall.style.display = 'none';
    window.deferredPrompt.prompt();    
    const { outcome } = await window.deferredPrompt.userChoice;
});
// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App installed');
});
