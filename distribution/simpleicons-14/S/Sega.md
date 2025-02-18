# Sega


```text
simpleicons-14/S/Sega
```

```text
include('simpleicons-14/S/Sega')
```



| Illustration | Sega |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Sega.png) | ![illustration for Sega](../../simpleicons-14/S/Sega.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SegaXs>`
- `<$SegaSm>`
- `<$SegaMd>`
- `<$SegaLg>`





## Sega

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sega
include('simpleicons-14/S/Sega')

' renders the element
Sega('Sega', 'Sega', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Sega
include('simpleicons-14/S/Sega')

' renders the element
Sega('Sega', 'Sega', 'an optional tech label', 'an optional description')
@enduml
```

