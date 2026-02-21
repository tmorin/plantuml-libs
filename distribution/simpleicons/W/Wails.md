# Wails


```text
simpleicons/W/Wails
```

```text
include('simpleicons/W/Wails')
```



| Illustration | Wails |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wails.png) | ![illustration for Wails](../../simpleicons/W/Wails.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WailsXs>`
- `<$WailsSm>`
- `<$WailsMd>`
- `<$WailsLg>`





## Wails

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wails
include('simpleicons/W/Wails')

' renders the element
Wails('Wails', 'Wails', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wails
include('simpleicons/W/Wails')

' renders the element
Wails('Wails', 'Wails', 'an optional tech label', 'an optional description')
@enduml
```

