# TemperatureFull


```text
fontawesome-6/Solid/TemperatureFull
```

```text
include('fontawesome-6/Solid/TemperatureFull')
```



| Illustration | TemperatureFull |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TemperatureFull.png) | ![illustration for TemperatureFull](../../fontawesome-6/Solid/TemperatureFull.Local.png) |




## TemperatureFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TemperatureFull
include('fontawesome-6/Solid/TemperatureFull')

' renders the element
TemperatureFull('TemperatureFull', 'Temperature Full', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TemperatureFull
include('fontawesome-6/Solid/TemperatureFull')

' renders the element
TemperatureFull('TemperatureFull', 'Temperature Full', 'an optional tech label', 'an optional description')
@enduml
```

