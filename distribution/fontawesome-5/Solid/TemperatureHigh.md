# TemperatureHigh


```text
fontawesome-5/Solid/TemperatureHigh
```

```text
include('fontawesome-5/Solid/TemperatureHigh')
```



| Illustration | TemperatureHigh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TemperatureHigh.png) | ![illustration for TemperatureHigh](../../fontawesome-5/Solid/TemperatureHigh.Local.png) |




## TemperatureHigh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TemperatureHigh
include('fontawesome-5/Solid/TemperatureHigh')

' renders the element
TemperatureHigh('TemperatureHigh', 'Temperature High', 'an optional tech label')
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

' loads the Item which embeds the element TemperatureHigh
include('fontawesome-5/Solid/TemperatureHigh')

' renders the element
TemperatureHigh('TemperatureHigh', 'Temperature High', 'an optional tech label')
@enduml
```

