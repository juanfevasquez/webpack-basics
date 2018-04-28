import '../css/styles.css';

import {secretButton, secretMessage} from './dom-loader';

var showSecret = false;

secretButton.addEventListener('click', toggleSecretState);
udpateSecretMessage();

function toggleSecretState() {
    showSecret = !showSecret;
    udpateSecretMessage();
    updateSecretButton();
}

function updateSecretButton() {
    if (showSecret) {
        secretButton.textContent = 'Hide the Secret';
    } else {
        secretButton.textContent = 'Show the Secret';
    }
}

function udpateSecretMessage() {
    if (showSecret) {
        secretMessage.style.display = 'block';
    } else {
        secretMessage.style.display = 'none';
    }
}

console.log('Ok');
