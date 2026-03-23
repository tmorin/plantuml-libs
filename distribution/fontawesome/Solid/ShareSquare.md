# ShareSquare


```text
fontawesome/Solid/ShareSquare
```

```text
include('fontawesome/Solid/ShareSquare')
```



| Illustration | ShareSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ShareSquare.png) | ![illustration for ShareSquare](../../fontawesome/Solid/ShareSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ShareSquareXs>`
- `<$ShareSquareSm>`
- `<$ShareSquareMd>`
- `<$ShareSquareLg>`





## ShareSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ShareSquare
include('fontawesome/Solid/ShareSquare')

' renders the element
ShareSquare('ShareSquare', 'Share Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ShareSquare
include('fontawesome/Solid/ShareSquare')

' renders the element
ShareSquare('ShareSquare', 'Share Square', 'an optional tech label', 'an optional description')
@enduml
```

