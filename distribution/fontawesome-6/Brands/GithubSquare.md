# GithubSquare


```text
fontawesome-6/Brands/GithubSquare
```

```text
include('fontawesome-6/Brands/GithubSquare')
```



| Illustration | GithubSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/GithubSquare.png) | ![illustration for GithubSquare](../../fontawesome-6/Brands/GithubSquare.Local.png) |




## GithubSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element GithubSquare
include('fontawesome-6/Brands/GithubSquare')

' renders the element
GithubSquare('GithubSquare', 'Github Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element GithubSquare
include('fontawesome-6/Brands/GithubSquare')

' renders the element
GithubSquare('GithubSquare', 'Github Square', 'an optional tech label', 'an optional description')
@enduml
```

