# SquareGithub


```text
fontawesome-6/Brands/SquareGithub
```

```text
include('fontawesome-6/Brands/SquareGithub')
```



| Illustration | SquareGithub |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareGithub.png) | ![illustration for SquareGithub](../../fontawesome-6/Brands/SquareGithub.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareGithub
include('fontawesome-6/Brands/SquareGithub')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareGithub
include('fontawesome-6/Brands/SquareGithub')

' renders the element
SquareGithub('SquareGithub', 'Square Github', 'an optional tech label', 'an optional description')
@enduml
```

