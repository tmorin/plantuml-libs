# Git


```text
fontawesome/Brands/Git
```

```text
include('fontawesome/Brands/Git')
```



| Illustration | Git |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Git.png) | ![illustration for Git](../../fontawesome/Brands/Git.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GitXs>`
- `<$GitSm>`
- `<$GitMd>`
- `<$GitLg>`





## Git

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Git
include('fontawesome/Brands/Git')

' renders the element
Git('Git', 'Git', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Git
include('fontawesome/Brands/Git')

' renders the element
Git('Git', 'Git', 'an optional tech label', 'an optional description')
@enduml
```

