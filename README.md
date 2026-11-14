# shivangitripathi2712.github.io

My academic website. GitHub Pages builds it automatically with Jekyll. **You never edit HTML.**
Edit one text file on GitHub, click *Commit changes*, and the site updates in about a minute.

| To change…                         | Edit this file              |
|------------------------------------|-----------------------------|
| News                               | `_data/news.yml`            |
| Papers                             | `_data/publications.yml`    |
| Research cards and pop-ups         | `_data/research.yml`        |
| Background timeline                | `_data/timeline.yml`        |
| Name, email, links, photo, status  | `_config.yml`               |
| Photo                              | replace `assets/img/profile.jpg` |

## Add a news item
Open `_data/news.yml`, click the pencil icon, and paste this anywhere in the list:

```yaml
- date: 2027-01
  type: paper          # paper | teaching | milestone | award
  text: >-
    Presented **MS-CAPS** at EACL 2027 in Athens.
```
Items are sorted by date automatically. Only the month is shown.

## Add a paper
Copy one block in `_data/publications.yml` and edit it. Add `pdf:` or `code:` links to show those buttons.
The **Cite** button builds BibTeX from the title, authors, venue, and year.

## Tip
YAML is picky about spaces: keep the same indentation as the other items, and do not use tabs.
If the site stops updating, open the repo's **Actions** tab to see the error message.
