# SquareGitlab


```text
fontawesome/Brands/SquareGitlab
```

```text
include('fontawesome/Brands/SquareGitlab')
```



| Illustration | SquareGitlab |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/SquareGitlab.png) | ![illustration for SquareGitlab](../../fontawesome/Brands/SquareGitlab.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareGitlabXs>`
- `<$SquareGitlabSm>`
- `<$SquareGitlabMd>`
- `<$SquareGitlabLg>`





## SquareGitlab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SquareGitlab
include('fontawesome/Brands/SquareGitlab')

' renders the element
SquareGitlab('SquareGitlab', 'Square Gitlab', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareGitlab
include('fontawesome/Brands/SquareGitlab')

' renders the element
SquareGitlab('SquareGitlab', 'Square Gitlab', 'an optional tech label', 'an optional description')
@enduml
```

