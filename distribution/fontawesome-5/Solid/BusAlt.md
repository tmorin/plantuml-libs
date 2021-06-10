# BusAlt


```text
fontawesome-5/Solid/BusAlt
```

```text
include('fontawesome-5/Solid/BusAlt')
```



| Illustration | BusAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BusAlt.png) | ![illustration for BusAlt](../../fontawesome-5/Solid/BusAlt.Local.png) |




## BusAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BusAlt
include('fontawesome-5/Solid/BusAlt')

' renders the element
BusAlt('BusAlt', 'Bus Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BusAlt
include('fontawesome-5/Solid/BusAlt')

' renders the element
BusAlt('BusAlt', 'Bus Alt', 'an optional tech label')
@enduml
```

