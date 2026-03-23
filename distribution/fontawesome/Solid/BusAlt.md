# BusAlt


```text
fontawesome/Solid/BusAlt
```

```text
include('fontawesome/Solid/BusAlt')
```



| Illustration | BusAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BusAlt.png) | ![illustration for BusAlt](../../fontawesome/Solid/BusAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BusAltXs>`
- `<$BusAltSm>`
- `<$BusAltMd>`
- `<$BusAltLg>`





## BusAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BusAlt
include('fontawesome/Solid/BusAlt')

' renders the element
BusAlt('BusAlt', 'Bus Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BusAlt
include('fontawesome/Solid/BusAlt')

' renders the element
BusAlt('BusAlt', 'Bus Alt', 'an optional tech label', 'an optional description')
@enduml
```

