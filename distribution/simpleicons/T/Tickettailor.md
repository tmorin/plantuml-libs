# Tickettailor


```text
simpleicons/T/Tickettailor
```

```text
include('simpleicons/T/Tickettailor')
```



| Illustration | Tickettailor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Tickettailor.png) | ![illustration for Tickettailor](../../simpleicons/T/Tickettailor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TickettailorXs>`
- `<$TickettailorSm>`
- `<$TickettailorMd>`
- `<$TickettailorLg>`





## Tickettailor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Tickettailor
include('simpleicons/T/Tickettailor')

' renders the element
Tickettailor('Tickettailor', 'Tickettailor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Tickettailor
include('simpleicons/T/Tickettailor')

' renders the element
Tickettailor('Tickettailor', 'Tickettailor', 'an optional tech label', 'an optional description')
@enduml
```

