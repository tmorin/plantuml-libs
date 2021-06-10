# Wifi


```text
fontawesome-5/Solid/Wifi
```

```text
include('fontawesome-5/Solid/Wifi')
```



| Illustration | Wifi |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Wifi.png) | ![illustration for Wifi](../../fontawesome-5/Solid/Wifi.Local.png) |




## Wifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Wifi
include('fontawesome-5/Solid/Wifi')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Wifi
include('fontawesome-5/Solid/Wifi')

' renders the element
Wifi('Wifi', 'Wifi', 'an optional tech label')
@enduml
```

