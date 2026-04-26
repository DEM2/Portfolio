function createTechList(tech = []) {
    return tech
        .map((item) => `<span class="project-card__tech-item">${item}</span>`)
        .join("");
}

function createProjectCard(project) {
    const article = document.createElement("article");
    article.className = "project-item";

    article.innerHTML = `
        <div class="project-item__id">
            <span>${project.id}</span>
        </div>

        <div class="project-card">
            <span class="project-card__slogan">${project.slogan}</span>
            <h3>${project.name}</h3>
            <p>${project.description}</p>

            <div class="project-card__details">
                <div class="project-card__detail">
                    <h4>Problema</h4>
                    <p>${project.problem}</p>
                </div>

                <div class="project-card__detail">
                    <h4>Solución</h4>
                    <p>${project.solution}</p>
                </div>
            </div>

            <div class="project-card__footer">
                <div class="project-card__tech">
                    ${createTechList(project.tech)}
                </div>

                <div class="project-card__action">
                    <a href="${project.url}" target="_blank" rel="noreferrer">
                        ${project.linkLabel}
                    </a>
                </div>
            </div>
        </div>
    `;

    return article;
}

export function renderProjects(container, projects) {
    if (!container) {
        return;
    }

    const fragment = document.createDocumentFragment();

    projects.forEach((project) => {
        fragment.appendChild(createProjectCard(project));
    });

    container.appendChild(fragment);
}