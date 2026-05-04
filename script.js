// TODO: Update WhatsApp number in all wa.me links
// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav ul');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Custom form submission
const customForm = document.getElementById('custom-form');
if (customForm) {
    document.getElementById('submit-custom').addEventListener('click', (e) => {
        e.preventDefault();

        const style = document.getElementById('style').value;
        const occasion = document.getElementById('occasion').value;
        const recipient = document.getElementById('recipient').value || 'Not specified';
        const message = document.getElementById('message').value;
        const upload = document.getElementById('upload').files;

        if (!style || !occasion || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        let uploadsText = upload.length > 0 ? `${upload.length} file(s) uploaded` : 'No uploads';

        const whatsappMessage = `Hello Lovely Box, I’d like a custom gift box. Style: ${style}. Occasion: ${occasion}. Recipient: ${recipient}. Message: ${message}. Uploads: ${uploadsText}. Please advise.`;

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappLink = `https://wa.me/201234567890?text=${encodedMessage}`;

        document.getElementById('whatsapp-link').href = whatsappLink;
        document.getElementById('whatsapp-section').style.display = 'block';

        // Scroll to the section
        document.getElementById('whatsapp-section').scrollIntoView({ behavior: 'smooth' });
    });
}