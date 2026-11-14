# shivangitripathi2712.github.io

My academic website. GitHub Pages builds it automatically with Jekyll. **You never edit HTML.**
Edit one text file on GitHub, click *Commit changes*, and the site updates in about a minute.

| To change…                         | Edit this file              |
|------------------------------------|-----------------------------|
| Updates                            | `_data/news.yml`            |
| Papers                             | `_data/publications.yml`    |
| Research                           | `_data/research.yml`        |
| Teaching                           | `_data/teaching.yml`        |
| Experience                         | `_data/experience.yml`      |
| Education                          | `_data/education.yml`       |
| Name, email, links, CV PDF         | `_config.yml`               |
| Photo                              | replace `assets/img/profile.jpg` |

## Add an update
Open `_data/news.yml`, click the pencil icon, and paste this anywhere in the list:

```yaml
- date: 2027-01
  text: >-
    Presented **MS-CAPS** at EACL 2027 in Athens.
```
Items are sorted by date automatically. Only the month is shown.

## Add a paper
Copy one block in `_data/publications.yml` and edit it. Add `pdf:` or `code:` links to show those buttons.


## Tip
YAML is picky about spaces: keep the same indentation as the other items, and do not use tabs.
If the site stops updating, open the repo's **Actions** tab to see the error message.

## Pages
- `index.html` — home (bio, latest 6 news, 3 newest papers)
- `publications.html`, `research.html`, `teaching.html`, `cv.html`, `news.html`
- To change the bio text, edit `index.html` (the paragraphs near the top).
