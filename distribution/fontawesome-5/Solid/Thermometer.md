# Thermometer


```text
fontawesome-5/Solid/Thermometer
```

```text
include('fontawesome-5/Solid/Thermometer')
```



| Illustration | Thermometer |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Thermometer.png) | ![illustration for Thermometer](../../fontawesome-5/Solid/Thermometer.Local.png) |




## Thermometer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Thermometer
include('fontawesome-5/Solid/Thermometer')

' renders the element
Thermometer('Thermometer', 'Thermometer', 'an optional tech label')
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

' loads the Item which embeds the element Thermometer
include('fontawesome-5/Solid/Thermometer')

' renders the element
Thermometer('Thermometer', 'Thermometer', 'an optional tech label')
@enduml
```

