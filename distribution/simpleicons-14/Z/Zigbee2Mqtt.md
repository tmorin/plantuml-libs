# Zigbee2Mqtt


```text
simpleicons-14/Z/Zigbee2Mqtt
```

```text
include('simpleicons-14/Z/Zigbee2Mqtt')
```



| Illustration | Zigbee2Mqtt |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/Z/Zigbee2Mqtt.png) | ![illustration for Zigbee2Mqtt](../../simpleicons-14/Z/Zigbee2Mqtt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Zigbee2MqttXs>`
- `<$Zigbee2MqttSm>`
- `<$Zigbee2MqttMd>`
- `<$Zigbee2MqttLg>`





## Zigbee2Mqtt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zigbee2Mqtt
include('simpleicons-14/Z/Zigbee2Mqtt')

' renders the element
Zigbee2Mqtt('Zigbee2Mqtt', 'Zigbee2 Mqtt', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Zigbee2Mqtt
include('simpleicons-14/Z/Zigbee2Mqtt')

' renders the element
Zigbee2Mqtt('Zigbee2Mqtt', 'Zigbee2 Mqtt', 'an optional tech label', 'an optional description')
@enduml
```

