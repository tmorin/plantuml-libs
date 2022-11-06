# Mqtt


```text
simpleicons-7/M/Mqtt
```

```text
include('simpleicons-7/M/Mqtt')
```



| Illustration | Mqtt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mqtt.png) | ![illustration for Mqtt](../../simpleicons-7/M/Mqtt.Local.png) |




## Mqtt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mqtt
include('simpleicons-7/M/Mqtt')

' renders the element
Mqtt('Mqtt', 'Mqtt', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mqtt
include('simpleicons-7/M/Mqtt')

' renders the element
Mqtt('Mqtt', 'Mqtt', 'an optional tech label', 'an optional description')
@enduml
```

