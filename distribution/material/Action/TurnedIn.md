# TurnedIn


```text
material/Action/TurnedIn
```

```text
include('material/Action/TurnedIn')
```



| Illustration | TurnedIn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/TurnedIn.png) | ![illustration for TurnedIn](../../material/Action/TurnedIn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurnedInXs>`
- `<$TurnedInSm>`
- `<$TurnedInMd>`
- `<$TurnedInLg>`





## TurnedIn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element TurnedIn
include('material/Action/TurnedIn')

' renders the element
TurnedIn('TurnedIn', 'Turned In', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element TurnedIn
include('material/Action/TurnedIn')

' renders the element
TurnedIn('TurnedIn', 'Turned In', 'an optional tech label', 'an optional description')
@enduml
```

