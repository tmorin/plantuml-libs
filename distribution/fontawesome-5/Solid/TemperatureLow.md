# TemperatureLow


```text
fontawesome-5/Solid/TemperatureLow
```

```text
include('fontawesome-5/Solid/TemperatureLow')
```



| Illustration | TemperatureLow |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TemperatureLow.png) | ![illustration for TemperatureLow](../../fontawesome-5/Solid/TemperatureLow.Local.png) |




## TemperatureLow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TemperatureLow
include('fontawesome-5/Solid/TemperatureLow')

' renders the element
TemperatureLow('TemperatureLow', 'Temperature Low', 'an optional tech label')
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

' loads the Item which embeds the element TemperatureLow
include('fontawesome-5/Solid/TemperatureLow')

' renders the element
TemperatureLow('TemperatureLow', 'Temperature Low', 'an optional tech label')
@enduml
```

