/**
 * Projects JSON Validation Script
 * 
 * Run: node scripts/validate-projects.js
 * 
 * Validates that data/projects.json conforms to the expected schema.
 * Checks for required fields, correct types, and data integrity.
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECTS_PATH = join(__dirname, '..', 'data', 'projects.json');

const REQUIRED_FIELDS = ['id', 'title', 'description', 'techStack', 'category', 'year', 'featured'];
const VALID_CATEGORIES = ['Web', 'IoT', 'Embedded', 'Algorithms', 'Mobile', 'Security', 'Other'];

let errors = [];
let warnings = [];

function validate() {
  console.log('🔍 Validating projects.json...\n');

  let data;
  try {
    const raw = readFileSync(PROJECTS_PATH, 'utf-8');
    data = JSON.parse(raw);
  } catch (err) {
    console.error(`❌ Failed to read or parse ${PROJECTS_PATH}:`);
    console.error(`   ${err.message}`);
    process.exit(1);
  }

  if (!data.projects || !Array.isArray(data.projects)) {
    console.error('❌ projects.json must contain a "projects" array.');
    process.exit(1);
  }

  const { projects } = data;
  console.log(`   Found ${projects.length} project(s).\n`);

  const ids = new Set();

  projects.forEach((project, index) => {
    const location = `projects[${index}] (id: ${project.id || 'missing'})`;

    // Check required fields
    for (const field of REQUIRED_FIELDS) {
      if (project[field] === undefined || project[field] === null) {
        errors.push(`${location}: Missing required field "${field}".`);
      }
    }

    // Validate id uniqueness
    if (project.id) {
      if (ids.has(project.id)) {
        errors.push(`${location}: Duplicate id "${project.id}".`);
      }
      ids.add(project.id);
    }

    // Validate category
    if (project.category && !VALID_CATEGORIES.includes(project.category)) {
      warnings.push(`${location}: Category "${project.category}" is not in the standard list. Valid: ${VALID_CATEGORIES.join(', ')}`);
    }

    // Validate year
    if (project.year !== undefined) {
      const yearNum = Number(project.year);
      if (isNaN(yearNum) || yearNum < 2000 || yearNum > 2100) {
        errors.push(`${location}: year "${project.year}" is not a valid year (2000-2100).`);
      }
    }

    // Validate featured
    if (project.featured !== undefined && typeof project.featured !== 'boolean') {
      errors.push(`${location}: featured must be a boolean.`);
    }

    // Validate techStack
    if (project.techStack !== undefined) {
      if (!Array.isArray(project.techStack)) {
        errors.push(`${location}: techStack must be an array.`);
      } else if (project.techStack.length === 0) {
        warnings.push(`${location}: techStack is empty.`);
      }
    }

    // Validate URLs
    if (project.githubUrl && typeof project.githubUrl === 'string' && !project.githubUrl.startsWith('http')) {
      warnings.push(`${location}: githubUrl should be a full URL (http/https).`);
    }
    if (project.liveUrl && typeof project.liveUrl === 'string' && !project.liveUrl.startsWith('http')) {
      warnings.push(`${location}: liveUrl should be a full URL (http/https).`);
    }
  });

  // Report results
  if (errors.length > 0) {
    console.log('❌ ERRORS:');
    errors.forEach(e => console.log(`   • ${e}`));
    console.log('\n');
  }

  if (warnings.length > 0) {
    console.log('⚠️  WARNINGS:');
    warnings.forEach(w => console.log(`   • ${w}`));
    console.log('\n');
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log('✅ All projects validated successfully!');
  } else if (errors.length === 0) {
    console.log('✅ Schema valid with warnings.');
  }

  process.exit(errors.length > 0 ? 1 : 0);
}

validate();