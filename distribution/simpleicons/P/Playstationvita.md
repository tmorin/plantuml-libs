# Playstationvita


```text
simpleicons/P/Playstationvita
```

```text
include('simpleicons/P/Playstationvita')
```



| Illustration | Playstationvita |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Playstationvita.png) | ![illustration for Playstationvita](../../simpleicons/P/Playstationvita.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaystationvitaXs>`
- `<$PlaystationvitaSm>`
- `<$PlaystationvitaMd>`
- `<$PlaystationvitaLg>`





## Playstationvita

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Playstationvita
include('simpleicons/P/Playstationvita')

' renders the element
Playstationvita('Playstationvita', 'Playstationvita', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Playstationvita
include('simpleicons/P/Playstationvita')

' renders the element
Playstationvita('Playstationvita', 'Playstationvita', 'an optional tech label', 'an optional description')
@enduml
```

