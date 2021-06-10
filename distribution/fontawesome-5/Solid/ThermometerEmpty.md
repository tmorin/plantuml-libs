# ThermometerEmpty


```text
fontawesome-5/Solid/ThermometerEmpty
```

```text
include('fontawesome-5/Solid/ThermometerEmpty')
```



| Illustration | ThermometerEmpty |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ThermometerEmpty.png) | ![illustration for ThermometerEmpty](../../fontawesome-5/Solid/ThermometerEmpty.Local.png) |




## ThermometerEmpty

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ThermometerEmpty
include('fontawesome-5/Solid/ThermometerEmpty')

' renders the element
ThermometerEmpty('ThermometerEmpty', 'Thermometer Empty', 'an optional tech label')
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

' loads the Item which embeds the element ThermometerEmpty
include('fontawesome-5/Solid/ThermometerEmpty')

' renders the element
ThermometerEmpty('ThermometerEmpty', 'Thermometer Empty', 'an optional tech label')
@enduml
```

