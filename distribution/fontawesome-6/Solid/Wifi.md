# Wifi


```text
fontawesome-6/Solid/Wifi
```

```text
include('fontawesome-6/Solid/Wifi')
```



| Illustration | Wifi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Wifi.png) | ![illustration for Wifi](../../fontawesome-6/Solid/Wifi.Local.png) |




## Wifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Wifi
include('fontawesome-6/Solid/Wifi')

' renders the element
Wifi('Wifi', 'Wifi', 'an optional tech label')
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

' loads the Item which embeds the element Wifi
include('fontawesome-6/Solid/Wifi')

' renders the element
Wifi('Wifi', 'Wifi', 'an optional tech label')
@enduml
```

