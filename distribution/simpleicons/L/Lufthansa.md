# Lufthansa


```text
simpleicons/L/Lufthansa
```

```text
include('simpleicons/L/Lufthansa')
```



| Illustration | Lufthansa |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Lufthansa.png) | ![illustration for Lufthansa](../../simpleicons/L/Lufthansa.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LufthansaXs>`
- `<$LufthansaSm>`
- `<$LufthansaMd>`
- `<$LufthansaLg>`





## Lufthansa

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Lufthansa
include('simpleicons/L/Lufthansa')

' renders the element
Lufthansa('Lufthansa', 'Lufthansa', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Lufthansa
include('simpleicons/L/Lufthansa')

' renders the element
Lufthansa('Lufthansa', 'Lufthansa', 'an optional tech label', 'an optional description')
@enduml
```

