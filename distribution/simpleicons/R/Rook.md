# Rook


```text
simpleicons/R/Rook
```

```text
include('simpleicons/R/Rook')
```



| Illustration | Rook |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/R/Rook.png) | ![illustration for Rook](../../simpleicons/R/Rook.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RookXs>`
- `<$RookSm>`
- `<$RookMd>`
- `<$RookLg>`





## Rook

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rook
include('simpleicons/R/Rook')

' renders the element
Rook('Rook', 'Rook', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Rook
include('simpleicons/R/Rook')

' renders the element
Rook('Rook', 'Rook', 'an optional tech label', 'an optional description')
@enduml
```

