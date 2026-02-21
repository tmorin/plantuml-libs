# Wine


```text
simpleicons/W/Wine
```

```text
include('simpleicons/W/Wine')
```



| Illustration | Wine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/W/Wine.png) | ![illustration for Wine](../../simpleicons/W/Wine.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$WineXs>`
- `<$WineSm>`
- `<$WineMd>`
- `<$WineLg>`





## Wine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Wine
include('simpleicons/W/Wine')

' renders the element
Wine('Wine', 'Wine', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wine
include('simpleicons/W/Wine')

' renders the element
Wine('Wine', 'Wine', 'an optional tech label', 'an optional description')
@enduml
```

