const inventos = [
    {
        id: 1,
        titulo: "La Rueda",
        año: 3500,
        inventor: "Mesopotamios",
        categoria: "herramientas",
        imagen: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
        descripcion: "La rueda es uno de los inventos más importantes de la humanidad. Revolucionó el transporte y permitió el desarrollo de máquinas complejas.",
        impacto: 10
    },
    {
        id: 2,
        titulo: "La Imprenta",
        año: 1440,
        inventor: "Johannes Gutenberg",
        categoria: "comunicacion",
        imagen: "https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop",
        descripcion: "Permitió la reproducción masiva de libros y documentos, revolucionando la difusión del conocimiento.",
        impacto: 9
    },
    {
        id: 3,
        titulo: "La Bombilla",
        año: 1879,
        inventor: "Thomas Edison",
        categoria: "energia",
        imagen: "https://images.unsplash.com/photo-1634712202770-375fcf798af2?w=500&h=500&fit=crop",
        descripcion: "Revolucionó la iluminación artificial y permitió extender el día laboral, transformando la sociedad.",
        impacto: 10
    },
    {
        id: 4,
        titulo: "El Teléfono",
        año: 1876,
        inventor: "Alexander Graham Bell",
        categoria: "comunicacion",
        imagen: "https://images.unsplash.com/photo-1591047990867-f3db2c37daf2?w=500&h=500&fit=crop",
        descripcion: "Revolucionó la comunicación a distancia, conectando personas alrededor del mundo.",
        impacto: 9
    },
    {
        id: 5,
        titulo: "El Automóvil",
        año: 1885,
        inventor: "Karl Benz",
        categoria: "transporte",
        imagen: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=500&h=500&fit=crop",
        descripcion: "Transformó el transporte personal y revolucionó la sociedad moderna.",
        impacto: 9
    },
    {
        id: 6,
        titulo: "El Avión",
        año: 1903,
        inventor: "Wright Brothers",
        categoria: "transporte",
        imagen: "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=500&h=500&fit=crop",
        descripcion: "Permitió el transporte aéreo y conectó el mundo de manera sin precedentes.",
        impacto: 10
    },
    {
        id: 7,
        titulo: "La Radio",
        año: 1906,
        inventor: "Reginald Fessenden",
        categoria: "comunicacion",
        imagen: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
        descripcion: "Revolucionó la comunicación de masas, permitiendo transmisiones a larga distancia.",
        impacto: 8
    },
    {
        id: 8,
        titulo: "La Penicilina",
        año: 1928,
        inventor: "Alexander Fleming",
        categoria: "medicina",
        imagen: "https://images.unsplash.com/photo-1581333694269-91c0b6e62d47?w=500&h=500&fit=crop",
        descripcion: "El primer antibiótico que revolucionó la medicina moderna y salvó millones de vidas.",
        impacto: 10
    },
    {
        id: 9,
        titulo: "La Televisión",
        año: 1927,
        inventor: "Philo Farnsworth",
        categoria: "comunicacion",
        imagen: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500&h=500&fit=crop",
        descripcion: "Transformó el entretenimiento y la información, permitiendo ver eventos en vivo desde casa.",
        impacto: 9
    },
    {
        id: 10,
        titulo: "La Computadora",
        año: 1946,
        inventor: "ENIAC Team",
        categoria: "tecnologia",
        imagen: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=500&fit=crop",
        descripcion: "Revolucionó el procesamiento de información y sentó las bases para la era digital.",
        impacto: 10
    },
    {
        id: 11,
        titulo: "Internet",
        año: 1969,
        inventor: "ARPANET Team",
        categoria: "comunicacion",
        imagen: "https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=500&h=500&fit=crop",
        descripcion: "Conectó el mundo entero, revolucionando la comunicación, el comercio y el acceso a la información.",
        impacto: 10
    },
    {
        id: 12,
        titulo: "El Smartphone",
        año: 2007,
        inventor: "Steve Jobs / Apple",
        categoria: "tecnologia",
        imagen: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=500&fit=crop",
        descripcion: "Revolucionó la tecnología móvil, permitiendo acceso a internet en el bolsillo.",
        impacto: 10
    },
    {
        id: 13,
        titulo: "Inteligencia Artificial",
        año: 2022,
        inventor: "OpenAI y otros",
        categoria: "tecnologia",
        imagen: "https://images.unsplash.com/photo-1677442d019cecf74da287acb87134f49609a8c38?w=500&h=500&fit=crop",
        descripcion: "La IA está revolucionando todos los aspectos de la sociedad, desde medicina hasta educación.",
        impacto: 10
    },
    {
        id: 14,
        titulo: "El Microscopio",
        año: 1595,
        inventor: "Zacharias Janssen",
        categoria: "herramientas",
        imagen: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=500&h=500&fit=crop",
        descripcion: "Permitió observar el mundo microscópico, revolucionando la biología y la medicina.",
        impacto: 9
    },
    {
        id: 15,
        titulo: "La Brújula",
        año: 1100,
        inventor: "Chinos",
        categoria: "herramientas",
        imagen: "https://images.unsplash.com/photo-1569163139394-de4798aa62b2?w=500&h=500&fit=crop",
        descripcion: "Permitió la navegación precisa, facilitando los viajes y la exploración.",
        impacto: 8
    },
    {
        id: 16,
        titulo: "La Máquina de Vapor",
        año: 1769,
        inventor: "James Watt",
        categoria: "energia",
        imagen: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=500&fit=crop",
        descripcion: "Impulsó la Revolución Industrial y transformó la sociedad, la economía y la tecnología.",
        impacto: 10
    },
    {
        id: 17,
        titulo: "La Cámara Fotográfica",
        año: 1839,
        inventor: "Louis Daguerre",
        categoria: "tecnologia",
        imagen: "https://images.unsplash.com/photo-1606933248051-5ce89adc5ecf?w=500&h=500&fit=crop",
        descripcion: "Revolucionó la forma en que capturamos y compartimos momentos en el tiempo.",
        impacto: 8
    },
    {
        id: 18,
        titulo: "El Microscopio Electrónico",
        año: 1931,
        inventor: "Ernst Ruska",
        categoria: "tecnologia",
        imagen: "https://images.unsplash.com/photo-1576091160399-3173ee6f60e9?w=500&h=500&fit=crop",
        descripcion: "Permitió ver moléculas y átomos, revolucionando la investigación científica.",
        impacto: 9
    },
    {
        id: 19,
        titulo: "La Insulina Artificial",
        año: 1978,
        inventor: "Genentech Team",
        categoria: "medicina",
        imagen: "https://images.unsplash.com/photo-1585864299861-7d5c6f0d3d73?w=500&h=500&fit=crop",
        descripcion: "Permitió tratar la diabetes de manera revolucionaria, salvando millones de vidas.",
        impacto: 9
    },
    {
        id: 20,
        titulo: "La Energía Solar",
        año: 1954,
        inventor: "Bell Labs",
        categoria: "energia",
        imagen: "https://images.unsplash.com/photo-1509391366360-2e938d440dbb?w=500&h=500&fit=crop",
        descripcion: "Revolucionó las fuentes de energía renovable y sostenible.",
        impacto: 8
    }
];

let inventosFiltrados = [...inventos];
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');

document.addEventListener('DOMContentLoaded', function() {
    renderizarInventos();
    configurarEventos();
});

function renderizarInventos() {
    const container = document.querySelector('.timeline-container');
    container.innerHTML = '';

    inventosFiltrados.forEach((invento, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.1}s`;

        timelineItem.innerHTML = `
            <div class="timeline-dot" title="Click para más información">
                💡
            </div>
            <div class="timeline-content">
                <div class="timeline-year">${invento.año} d.C.</div>
                <h3 class="timeline-title">${invento.titulo}</h3>
                <span class="timeline-category">${invento.categoria}</span>
                <p class="timeline-text">${invento.descripcion.substring(0, 100)}...</p>
                <p class="timeline-inventor">Por: ${invento.inventor}</p>
            </div>
        `;

        timelineItem.addEventListener('click', () => abrirModal(invento));
        container.appendChild(timelineItem);
    });
}

function configurarEventos() {
    document.getElementById('searchInput').addEventListener('input', function(e) {
        const termino = e.target.value.toLowerCase();
        inventosFiltrados = inventos.filter(invento =>
            invento.titulo.toLowerCase().includes(termino) ||
            invento.inventor.toLowerCase().includes(termino) ||
            invento.descripcion.toLowerCase().includes(termino)
        );
        renderizarInventos();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filtro = this.getAttribute('data-filter');
            if (filtro === 'all') {
                inventosFiltrados = [...inventos];
            } else {
                inventosFiltrados = inventos.filter(invento => invento.categoria === filtro);
            }
            renderizarInventos();
        });
    });

    closeBtn.addEventListener('click', cerrarModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) cerrarModal();
    });
}

function abrirModal(invento) {
    document.getElementById('modalImage').src = invento.imagen;
    document.getElementById('modalTitle').textContent = invento.titulo;
    document.getElementById('modalYear').textContent = `Año: ${invento.año} d.C.`;
    document.getElementById('modalInventor').textContent = `Inventor: ${invento.inventor}`;
    document.getElementById('modalCategory').textContent = invento.categoria.toUpperCase();
    document.getElementById('modalDescription').textContent = invento.descripcion;
    document.getElementById('modalImpact').textContent = invento.impacto;
    document.getElementById('impactFill').style.width = `${invento.impacto * 10}%`;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
