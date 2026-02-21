# BusSimple


```text
fontawesome/Solid/BusSimple
```

```text
include('fontawesome/Solid/BusSimple')
```



| Illustration | BusSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BusSimple.png) | ![illustration for BusSimple](../../fontawesome/Solid/BusSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BusSimpleXs>`
- `<$BusSimpleSm>`
- `<$BusSimpleMd>`
- `<$BusSimpleLg>`





## BusSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BusSimple
include('fontawesome/Solid/BusSimple')

' renders the element
BusSimple('BusSimple', 'Bus Simple', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element BusSimple
include('fontawesome/Solid/BusSimple')

' renders the element
BusSimple('BusSimple', 'Bus Simple', 'an optional tech label', 'an optional description')
@enduml
```

