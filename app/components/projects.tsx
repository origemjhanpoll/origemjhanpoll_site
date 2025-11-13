import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="flex flex-1 flex-col bg-[var(--color-card-bg)] text-[var(--color-text-primary)] rounded-3xl p-4 font-sans md:overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[var(--color-tag-bg)] rounded-lg p-4 hover:bg-[var(--color-tag-bg)]/80 transition-colors"
          >
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-32 object-cover rounded-md mb-3"
              />
            )}

            <div className="flex items-start justify-between mb-2">
              <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">
                {project.title}
              </h3>
              <div className="flex gap-2 ml-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label="GitHub"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label="Live Demo"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-[var(--color-text-secondary)] text-sm mb-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-[var(--color-card-bg)] text-[var(--color-text-primary)] rounded text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--color-card-bg);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--color-tag-bg);
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--color-text-secondary);
        }
      `}</style>
    </section>
  );
};

export default Projects;
