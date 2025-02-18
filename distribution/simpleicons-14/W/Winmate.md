# Winmate


```text
simpleicons-14/W/Winmate
```

```text
include('simpleicons-14/W/Winmate')
```



| Illustration | Winmate |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/W/Winmate.png) | ![illustration for Winmate](../../simpleicons-14/W/Winmate.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WinmateXs>`
- `<$WinmateSm>`
- `<$WinmateMd>`
- `<$WinmateLg>`





## Winmate

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Winmate
include('simpleicons-14/W/Winmate')

' renders the element
Winmate('Winmate', 'Winmate', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Winmate
include('simpleicons-14/W/Winmate')

' renders the element
Winmate('Winmate', 'Winmate', 'an optional tech label', 'an optional description')
@enduml
```

