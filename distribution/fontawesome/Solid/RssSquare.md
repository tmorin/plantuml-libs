# RssSquare


```text
fontawesome/Solid/RssSquare
```

```text
include('fontawesome/Solid/RssSquare')
```



| Illustration | RssSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RssSquare.png) | ![illustration for RssSquare](../../fontawesome/Solid/RssSquare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RssSquareXs>`
- `<$RssSquareSm>`
- `<$RssSquareMd>`
- `<$RssSquareLg>`





## RssSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RssSquare
include('fontawesome/Solid/RssSquare')

' renders the element
RssSquare('RssSquare', 'Rss Square', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RssSquare
include('fontawesome/Solid/RssSquare')

' renders the element
RssSquare('RssSquare', 'Rss Square', 'an optional tech label', 'an optional description')
@enduml
```

