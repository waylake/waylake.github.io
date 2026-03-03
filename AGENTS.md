# Agents

This file documents the agents used in the waylake.github.io project, a static website built with Jekyll for sharing insights on cognitive science, psychology, and philosophy.

## Project Overview

- **Project Name**: waylake.github.io
- **Type**: Static website
- **Framework**: Jekyll
- **Purpose**: A space to explore the intersection of cognitive science, psychology, and philosophy.

## Vibe Blogging Guidelines

### Categories
- **Cognition**: Insights into cognitive processes, thinking patterns, and decision-making.
- **Psychology**: Explorations of human behavior, mental processes, and emotional dynamics.
- **Philosophy**: Reflections on fundamental questions, ethics, and the nature of knowledge.

### Tone and Style
- **Thoughtful and Reflective**: Encourages deep thinking and introspection.
- **Analytical and Precise**: Values clarity and precision in questioning and reasoning.
- **Critical and Provocative**: Challenges assumptions and prompts readers to think differently.
- **Practical and Actionable**: Provides insights that can be applied in real-world scenarios.

### Content Themes
- **Questioning and Inquiry**: Emphasizes the importance of asking the right questions.
- **Human-AI Interaction**: Explores the impact of technology, especially AI, on human cognition and communication.
- **Collaboration and Workflow**: Discusses strategies for effective teamwork and workflow optimization.
- **Craft and Discipline**: Highlights the value of discipline in thinking, writing, and problem-solving.

## Available Agents

### 1. Mistral Vibe
- **Type**: CLI coding agent
- **Description**: Built by Mistral AI, this agent interacts with the local codebase through tools. It can read, write, and modify files, run commands, and perform various tasks related to code management.

### 2. Subagents
- **Type**: Exploration and research agents
- **Description**: These agents are spawned for independent execution of tasks such as codebase exploration, research, or parallel work that doesn't require user interaction.

## Optimization Achievements

### Code Reduction Results
- **Total Lines Reduced**: 629 lines (76% reduction)
- **Category Pages**: 4 pages × (111 → 10 lines) = 404 lines saved
- **Index Page**: 190 → 8 lines (-182 lines)
- **Post Layout**: 44 → 1 line (-43 lines)

### Key Optimizations
1. **Modularization**: Extracted common CSS/HTML into `_includes/`
2. **Jekyll Includes**: Used `{% include %}` for code reuse
3. **CSS Consolidation**: Shared styles between category and index pages
4. **Responsive Design**: Maintained visual consistency across all pages

## Enhanced Usage Patterns

### Code Management
- **Before**: Duplicate code across 4 category pages (444 lines)
- **After**: Single template + shared styles (46 lines)
- **Maintenance**: Change once, apply everywhere

### Theme Consistency
- **Dark/Light Mode**: Unified gradient overlays
- **Image Handling**: Consistent 200px height with smart cropping
- **Typography**: Standardized text shadows and colors

## Updated Examples

### Mistral Vibe - Advanced Usage
```markdown
1. Code Analysis: Identified 4 identical category pages
2. Refactoring: Created reusable templates
3. Verification: Reduced 444 → 46 lines while maintaining functionality
```

### Subagents - Specialized Tasks
```markdown
1. CSS Audit: Found duplicate styles across pages
2. HTML Validation: Verified proper tag nesting
3. Render Testing: Confirmed visual consistency
```

## Technical Notes

- **Jekyll Best Practices**: All includes use `relative_url` filter
- **CSS Optimization**: Reduced specificity, increased reusability
- **Performance**: Smaller files = faster build times
- **Maintainability**: Clear separation of structure (HTML) and presentation (CSS)

## Future Directions

1. **Further Modularization**: Extract header/footer into includes
2. **CSS Variables**: Replace hardcoded colors with variables
3. **Automated Testing**: Add HTML validation to build process
4. **Documentation**: Generate style guide from shared components
