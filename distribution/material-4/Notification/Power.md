# Power


```text
material-4/Notification/Power
```

```text
include('material-4/Notification/Power')
```



| Illustration | Power |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/Power.png) | ![illustration for Power](../../material-4/Notification/Power.Local.png) |




## Power

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Power
include('material-4/Notification/Power')

' renders the element
Power('Power', 'Power', 'an optional tech label')
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

' loads the Item which embeds the element Power
include('material-4/Notification/Power')

' renders the element
Power('Power', 'Power', 'an optional tech label')
@enduml
```

