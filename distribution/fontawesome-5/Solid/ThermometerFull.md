# ThermometerFull


```text
fontawesome-5/Solid/ThermometerFull
```

```text
include('fontawesome-5/Solid/ThermometerFull')
```



| Illustration | ThermometerFull |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ThermometerFull.png) | ![illustration for ThermometerFull](../../fontawesome-5/Solid/ThermometerFull.Local.png) |




## ThermometerFull

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThermometerFull
include('fontawesome-5/Solid/ThermometerFull')

' renders the element
ThermometerFull('ThermometerFull', 'Thermometer Full', 'an optional tech label')
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

' loads the Item which embeds the element ThermometerFull
include('fontawesome-5/Solid/ThermometerFull')

' renders the element
ThermometerFull('ThermometerFull', 'Thermometer Full', 'an optional tech label')
@enduml
```

