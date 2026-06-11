fetch('http://localhost:5000/projects')
.then(response => response.json())
.then(data => {
    const container = document.getElementById('project-list');

    data.forEach(project => {
        container.innerHTML += `
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>${project.technologies}</p>

                <a href="${project.github}">
                    GitHub
                </a>

                |
                
                <a href="${project.demo}">
                    Live Demo
                </a>
            </div>
        `;
    });
});