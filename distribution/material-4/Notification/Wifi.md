# Wifi


```text
material-4/Notification/Wifi
```

```text
include('material-4/Notification/Wifi')
```



| Illustration | Wifi |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/Wifi.png) | ![illustration for Wifi](../../material-4/Notification/Wifi.Local.png) |




## Wifi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Wifi
include('material-4/Notification/Wifi')

' renders the element
Wifi('Wifi', 'Wifi', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element Wifi
include('material-4/Notification/Wifi')

' renders the element
Wifi('Wifi', 'Wifi', 'an optional tech label', 'an optional description')
@enduml
```

