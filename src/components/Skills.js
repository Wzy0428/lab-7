import React, { useState } from 'react';

//The array of objects containing skill data
const skillsData = [
  { id: 1, skill: 'React', category: 'Frontend' },
  { id: 2, skill: 'Node.js', category: 'Backend' },
  { id: 3, skill: 'CSS', category: 'Frontend' },
  { id: 4, skill: 'Express.js', category: 'Backend' },
  { id: 5, skill: 'SQL', category: 'Database' },
  { id: 6, skill: 'JavaScript', category: 'Frontend' },
  { id: 7, skill: 'Java', category: 'Backend' },
  { id: 8, skill: 'HTML', category: 'Frontend' },
  { id: 9, skill: 'Firebase', category: 'Database' },
  { id: 10, skill: 'MySQL', category: 'Database' },
  { id: 11, skill: 'Cloud', category: 'Database' },
  { id: 12, skill: 'server', category: 'Backend' },
  { id: 13, skill: 'API', category: 'Backend' },
];

//searchTerm stores the text input value from the user, and
//selectedCategories stores which categories (Frontend, Backend, Database) are checked.
const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState({
    Frontend: false,
    Backend: false,
    Database: false,
  });

  //Update search term dynamically as the user types in real-time
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

//Triggered when the user selects/unselects a category checkbox.
const handleCategoryChange = (e) => {
    const { name, checked } = e.target;
    setSelectedCategories((prev) => ({
      ...prev, //Copy the previous state object
      [name]: checked, //Update the category that was checked/unchecked
    }));
  };

//Resets both the searchTerm and selectedCategories to their default values.
const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategories({
      Frontend: false,
      Backend: false,
      Database: false,
    });
  };

  //Checks if the skill name includes the search term (case-insensitive).
  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch =
      skill.skill.toLowerCase().includes(searchTerm.toLowerCase());

    //Checks if the skill category includes the search term (case-insensitive).
    const matchesCategory =
      searchTerm.length > 0 && skill.category.toLowerCase().includes(searchTerm.toLowerCase());

    //If a category is selected, only show matching skills from that category
    const matchesSelectedCategory =
      selectedCategories[skill.category] || Object.values(selectedCategories).every((value) => !value);

    return (matchesSearch || matchesCategory) && matchesSelectedCategory;
  });

  return (
    <div className="skills-container">
      <h2 className="skills-title">Skills</h2>

      <input
        type="text"
        placeholder="Search for a skill or category"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />

      <button onClick={clearFilters} className="clear-filters-button">
        Clear Filters
      </button>

      <div className="category-filters">
        <label>
          <input
            type="checkbox"
            name="Frontend"
            checked={selectedCategories.Frontend}
            onChange={handleCategoryChange}
          />
          Frontend
        </label>
        <label style={{ marginLeft: '15px' }}>
          <input
            type="checkbox"
            name="Backend"
            checked={selectedCategories.Backend}
            onChange={handleCategoryChange}
          />
          Backend
        </label>
        <label style={{ marginLeft: '15px' }}>
          <input
            type="checkbox"
            name="Database"
            checked={selectedCategories.Database}
            onChange={handleCategoryChange}
          />
          Database
        </label>
      </div>

      <div>
        {filteredSkills.length > 0 ? ( 
          filteredSkills.map((skill) => ( 
            <div key={skill.id} className="filtered-skill">
              <strong>{skill.skill}</strong> ({skill.category})
            </div>
          ))
        ) : (
          <p>No skills found matching your search or selected categories.</p>
        )}
      </div>
    </div>
  );
};

export default Skills;
