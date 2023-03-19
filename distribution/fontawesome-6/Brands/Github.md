# Github


```text
fontawesome-6/Brands/Github
```

```text
include('fontawesome-6/Brands/Github')
```



| Illustration | Github |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Github.png) | ![illustration for Github](../../fontawesome-6/Brands/Github.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GithubXs>`
- `<$GithubSm>`
- `<$GithubMd>`
- `<$GithubLg>`





## Github

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Github
include('fontawesome-6/Brands/Github')

' renders the element
Github('Github', 'Github', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Github
include('fontawesome-6/Brands/Github')

' renders the element
Github('Github', 'Github', 'an optional tech label', 'an optional description')
@enduml
```

