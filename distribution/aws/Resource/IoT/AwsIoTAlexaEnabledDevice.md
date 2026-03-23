# AwsIoTAlexaEnabledDevice


```text
aws/Resource/IoT/AwsIoTAlexaEnabledDevice
```

```text
include('aws/Resource/IoT/AwsIoTAlexaEnabledDevice')
```



| Illustration | AwsIoTAlexaEnabledDevice | AwsIoTAlexaEnabledDeviceCard | AwsIoTAlexaEnabledDeviceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/IoT/AwsIoTAlexaEnabledDevice.png) | ![illustration for AwsIoTAlexaEnabledDevice](../../../aws/Resource/IoT/AwsIoTAlexaEnabledDevice.Local.png) | ![illustration for AwsIoTAlexaEnabledDeviceCard](../../../aws/Resource/IoT/AwsIoTAlexaEnabledDeviceCard.Local.png) | ![illustration for AwsIoTAlexaEnabledDeviceGroup](../../../aws/Resource/IoT/AwsIoTAlexaEnabledDeviceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTAlexaEnabledDeviceXs>`
- `<$AwsIoTAlexaEnabledDeviceSm>`
- `<$AwsIoTAlexaEnabledDeviceMd>`
- `<$AwsIoTAlexaEnabledDeviceLg>`





## AwsIoTAlexaEnabledDevice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaEnabledDevice
include('aws/Resource/IoT/AwsIoTAlexaEnabledDevice')

' renders the element
AwsIoTAlexaEnabledDevice('AwsIoTAlexaEnabledDevice', 'Aws Io T Alexa Enabled Device', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaEnabledDevice
include('aws/Resource/IoT/AwsIoTAlexaEnabledDevice')

' renders the element
AwsIoTAlexaEnabledDevice('AwsIoTAlexaEnabledDevice', 'Aws Io T Alexa Enabled Device', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTAlexaEnabledDeviceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaEnabledDeviceCard
include('aws/Resource/IoT/AwsIoTAlexaEnabledDevice')

' renders the element
AwsIoTAlexaEnabledDeviceCard('AwsIoTAlexaEnabledDeviceCard', 'Aws Io T Alexa Enabled Device Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaEnabledDeviceCard
include('aws/Resource/IoT/AwsIoTAlexaEnabledDevice')

' renders the element
AwsIoTAlexaEnabledDeviceCard('AwsIoTAlexaEnabledDeviceCard', 'Aws Io T Alexa Enabled Device Card', 'an optional description')
@enduml
```

## AwsIoTAlexaEnabledDeviceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaEnabledDeviceGroup
include('aws/Resource/IoT/AwsIoTAlexaEnabledDevice')

' renders the element
AwsIoTAlexaEnabledDeviceGroup('AwsIoTAlexaEnabledDeviceGroup', 'Aws Io T Alexa Enabled Device Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AwsIoTAlexaEnabledDeviceGroup
include('aws/Resource/IoT/AwsIoTAlexaEnabledDevice')

' renders the element
AwsIoTAlexaEnabledDeviceGroup('AwsIoTAlexaEnabledDeviceGroup', 'Aws Io T Alexa Enabled Device Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

