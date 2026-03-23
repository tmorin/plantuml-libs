# HackerNewsSquare


```text
fontawesome/Brands/HackerNewsSquare
```

```text
include('fontawesome/Brands/HackerNewsSquare')
```



| Illustration | HackerNewsSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/HackerNewsSquare.png) | ![illustration for HackerNewsSquare](../../fontawesome/Brands/HackerNewsSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HackerNewsSquareXs>`
- `<$HackerNewsSquareSm>`
- `<$HackerNewsSquareMd>`
- `<$HackerNewsSquareLg>`





## HackerNewsSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HackerNewsSquare
include('fontawesome/Brands/HackerNewsSquare')

' renders the element
HackerNewsSquare('HackerNewsSquare', 'Hacker News Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HackerNewsSquare
include('fontawesome/Brands/HackerNewsSquare')

' renders the element
HackerNewsSquare('HackerNewsSquare', 'Hacker News Square', 'an optional tech label', 'an optional description')
@enduml
```

