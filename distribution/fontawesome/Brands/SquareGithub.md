# SquareGithub


```text
fontawesome/Brands/SquareGithub
```

```text
include('fontawesome/Brands/SquareGithub')
```



| Illustration | SquareGithub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareGithub.png) | ![illustration for SquareGithub](../../fontawesome/Brands/SquareGithub.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareGithubXs>`
- `<$SquareGithubSm>`
- `<$SquareGithubMd>`
- `<$SquareGithubLg>`





## SquareGithub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareGithub
include('fontawesome/Brands/SquareGithub')

' renders the element
SquareGithub('SquareGithub', 'Square Github', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareGithub
include('fontawesome/Brands/SquareGithub')

' renders the element
SquareGithub('SquareGithub', 'Square Github', 'an optional tech label', 'an optional description')
@enduml
```

