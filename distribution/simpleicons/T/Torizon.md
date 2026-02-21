# Torizon


```text
simpleicons/T/Torizon
```

```text
include('simpleicons/T/Torizon')
```



| Illustration | Torizon |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Torizon.png) | ![illustration for Torizon](../../simpleicons/T/Torizon.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TorizonXs>`
- `<$TorizonSm>`
- `<$TorizonMd>`
- `<$TorizonLg>`





## Torizon

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Torizon
include('simpleicons/T/Torizon')

' renders the element
Torizon('Torizon', 'Torizon', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Torizon
include('simpleicons/T/Torizon')

' renders the element
Torizon('Torizon', 'Torizon', 'an optional tech label', 'an optional description')
@enduml
```

