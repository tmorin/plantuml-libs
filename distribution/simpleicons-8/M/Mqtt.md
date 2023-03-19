# Mqtt


```text
simpleicons-8/M/Mqtt
```

```text
include('simpleicons-8/M/Mqtt')
```



| Illustration | Mqtt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/M/Mqtt.png) | ![illustration for Mqtt](../../simpleicons-8/M/Mqtt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MqttXs>`
- `<$MqttSm>`
- `<$MqttMd>`
- `<$MqttLg>`





## Mqtt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mqtt
include('simpleicons-8/M/Mqtt')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Mqtt
include('simpleicons-8/M/Mqtt')

' renders the element
Mqtt('Mqtt', 'Mqtt', 'an optional tech label', 'an optional description')
@enduml
```

