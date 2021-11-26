# ThermometerQuarter


```text
fontawesome-5/Solid/ThermometerQuarter
```

```text
include('fontawesome-5/Solid/ThermometerQuarter')
```



| Illustration | ThermometerQuarter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ThermometerQuarter.png) | ![illustration for ThermometerQuarter](../../fontawesome-5/Solid/ThermometerQuarter.Local.png) |




## ThermometerQuarter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThermometerQuarter
include('fontawesome-5/Solid/ThermometerQuarter')

' renders the element
ThermometerQuarter('ThermometerQuarter', 'Thermometer Quarter', 'an optional tech label')
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

' loads the Item which embeds the element ThermometerQuarter
include('fontawesome-5/Solid/ThermometerQuarter')

' renders the element
ThermometerQuarter('ThermometerQuarter', 'Thermometer Quarter', 'an optional tech label')
@enduml
```

