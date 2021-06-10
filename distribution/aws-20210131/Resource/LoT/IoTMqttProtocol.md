# IoTMqttProtocol


```text
aws-20210131/Resource/LoT/IoTMqttProtocol
```

```text
include('aws-20210131/Resource/LoT/IoTMqttProtocol')
```



| Illustration | IoTMqttProtocol | IoTMqttProtocolCard | IoTMqttProtocolGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/LoT/IoTMqttProtocol.png) | ![illustration for IoTMqttProtocol](../../../aws-20210131/Resource/LoT/IoTMqttProtocol.Local.png) | ![illustration for IoTMqttProtocolCard](../../../aws-20210131/Resource/LoT/IoTMqttProtocolCard.Local.png) | ![illustration for IoTMqttProtocolGroup](../../../aws-20210131/Resource/LoT/IoTMqttProtocolGroup.Local.png) |




## IoTMqttProtocol

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTMqttProtocol
include('aws-20210131/Resource/LoT/IoTMqttProtocol')

' renders the element
IoTMqttProtocol('IoTMqttProtocol', 'Io T Mqtt Protocol', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTMqttProtocol
include('aws-20210131/Resource/LoT/IoTMqttProtocol')

' renders the element
IoTMqttProtocol('IoTMqttProtocol', 'Io T Mqtt Protocol', 'an optional tech label')
@enduml
```

## IoTMqttProtocolCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTMqttProtocolCard
include('aws-20210131/Resource/LoT/IoTMqttProtocol')

' renders the element
IoTMqttProtocolCard('IoTMqttProtocolCard', 'Io T Mqtt Protocol Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTMqttProtocolCard
include('aws-20210131/Resource/LoT/IoTMqttProtocol')

' renders the element
IoTMqttProtocolCard('IoTMqttProtocolCard', 'Io T Mqtt Protocol Card', 'an optional description')
@enduml
```

## IoTMqttProtocolGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTMqttProtocolGroup
include('aws-20210131/Resource/LoT/IoTMqttProtocol')

' renders the element
IoTMqttProtocolGroup('IoTMqttProtocolGroup', 'Io T Mqtt Protocol Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element IoTMqttProtocolGroup
include('aws-20210131/Resource/LoT/IoTMqttProtocol')

' renders the element
IoTMqttProtocolGroup('IoTMqttProtocolGroup', 'Io T Mqtt Protocol Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

