# Vue 3 JSON Resume: [Live Demo](https://lgrimsley.com)

### Site Details
This sites utilizes AWS Code Build, Code Pipeline, S3

## Project Setup

```sh
npm install
```
### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### Environment Setup

Before running the application, you need to create an `.env` file in the project root with the following content:

```env
VITE_JSON_RESUME_URL="path/to/resume.json"
VITE_GA_ID="G-XXXXXXXXXX"
```

Replace `"path/to/resume.json"` with the actual path to your JSON resume file.
Replace `"G-XXXXXXXXXX"` with your Google Analytics Measurement ID (Optional)


### JSON Resume Structure

Create a .json file with your resume data using this format. 

*Tip: Copy/paste your resume along with the following format into ChatGPT, it does a good job of filling in most details.*

```JSON
{
  "basics": {
    "name": "Full Name",
    "label": "Job Title",
    "email": "email@example.com",
    "phone": "phone number",
    "url": "personal website URL",
    "resume_url": "URL to downloadable resume",
    "summary": "Brief professional summary",
    "status": "Current professional status",
    "information": {
      "location": "City, State",
      "yearsOfExperience": "Years of experience",
      "availability": "Availability status",
      "relocation": "Relocation preference",
      "remote": "Remote work preference"
    },
    "profiles": [
      {
        "network": "Social Network",
        "username": "username",
        "url": "profile URL",
        "icon": "icon class name"
      },
      // More profiles...
    ],
    "image": "URL to profile image"
  },
  "work": [
    {
      "company": "Company Name",
      "summary": "Brief company summary",
      "url": "company website URL",
      "logo_url": "URL to company logo",
      "bullets": [
        "Key responsibility or achievement",
        // More bullet points...
      ],
      "location": "Location of work",
      "positions": [
        {
          "position": "Job Title",
          "startDate": "YYYY-MM",
          "endDate": "YYYY-MM or 'Present'",
          "summary": "Optional summary of the role"
        },
        // More positions...
      ]
    },
    // More work experiences...
  ],
  "projects": [
    {
      "name": "Project Name",
      "summary": "Project summary",
      "url": "project URL",
      "image_url": "URL to project image",
      "bullets": [
        "Key feature or responsibility",
        // More bullet points...
      ],
      "keywords": ["Keyword", "Keyword", "Keyword"]
    },
    // More projects...
  ],
  "education": [
    {
      "institution": "Educational Institution",
      "area": "Field of Study",
      "studyType": "Degree Type",
      "startDate": "YYYY-MM",
      "endDate": "YYYY-MM",
      "gpa": "GPA",
      "courses": [
        "Course Name",
        // More courses...
      ]
    }
    // More educational experiences...
  ],
  "references": [
    {
      "name": "Reference Name",
      "position": "Reference's Position",
      "company": "Reference's Company",
      "email": "reference@example.com",
      "phone": "reference's phone number",
      "relationship": "Relationship to reference",
      "reference_type": "Type of reference (Professional/Personal)"
    },
    // More references...
  ],
  "recommendations": [
    {
      "name": "Recommender's Name",
      "position": "Recommender's Position",
      "company": "Recommender's Company",
      "email": "recommender@example.com",
      "linkedin": "Recommender's LinkedIn profile URL",
      "summary": "Brief recommendation summary"
    },
    // More recommendations...
  ],
  "skills": {
    "languages": ["Programming Language", "Programming Language", "Programming Language"],
    "technologies": ["Technology", "Technology", "Technology"],
    "services": ["Service", "Service", "Service"],
    "tools": ["Tool", "Tool", "Tool"]
  },
  "softSkills": ["Soft Skill", "Soft Skill", "Soft Skill"]
}
```

Ensure your resume data conforms to this structure for proper rendering in the application.