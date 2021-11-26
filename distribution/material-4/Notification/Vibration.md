# Vibration


```text
material-4/Notification/Vibration
```

```text
include('material-4/Notification/Vibration')
```



| Illustration | Vibration |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/Vibration.png) | ![illustration for Vibration](../../material-4/Notification/Vibration.Local.png) |




## Vibration

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Vibration
include('material-4/Notification/Vibration')

' renders the element
Vibration('Vibration', 'Vibration', 'an optional tech label')
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

' loads the Item which embeds the element Vibration
include('material-4/Notification/Vibration')

' renders the element
Vibration('Vibration', 'Vibration', 'an optional tech label')
@enduml
```

