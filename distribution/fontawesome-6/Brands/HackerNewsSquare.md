# HackerNewsSquare


```text
fontawesome-6/Brands/HackerNewsSquare
```

```text
include('fontawesome-6/Brands/HackerNewsSquare')
```



| Illustration | HackerNewsSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/HackerNewsSquare.png) | ![illustration for HackerNewsSquare](../../fontawesome-6/Brands/HackerNewsSquare.Local.png) |




## HackerNewsSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element HackerNewsSquare
include('fontawesome-6/Brands/HackerNewsSquare')

' renders the element
HackerNewsSquare('HackerNewsSquare', 'Hacker News Square', 'an optional tech label')
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

' loads the Item which embeds the element HackerNewsSquare
include('fontawesome-6/Brands/HackerNewsSquare')

' renders the element
HackerNewsSquare('HackerNewsSquare', 'Hacker News Square', 'an optional tech label')
@enduml
```

