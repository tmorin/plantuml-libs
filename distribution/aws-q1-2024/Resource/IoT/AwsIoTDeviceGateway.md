# AwsIoTDeviceGateway


```text
aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway
```

```text
include('aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway')
```



| Illustration | AwsIoTDeviceGateway | AwsIoTDeviceGatewayCard | AwsIoTDeviceGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway.png) | ![illustration for AwsIoTDeviceGateway](../../../aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway.Local.png) | ![illustration for AwsIoTDeviceGatewayCard](../../../aws-q1-2024/Resource/IoT/AwsIoTDeviceGatewayCard.Local.png) | ![illustration for AwsIoTDeviceGatewayGroup](../../../aws-q1-2024/Resource/IoT/AwsIoTDeviceGatewayGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsIoTDeviceGatewayXs>`
- `<$AwsIoTDeviceGatewaySm>`
- `<$AwsIoTDeviceGatewayMd>`
- `<$AwsIoTDeviceGatewayLg>`





## AwsIoTDeviceGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGateway
include('aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway')

' renders the element
AwsIoTDeviceGateway('AwsIoTDeviceGateway', 'Aws Io T Device Gateway', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGateway
include('aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway')

' renders the element
AwsIoTDeviceGateway('AwsIoTDeviceGateway', 'Aws Io T Device Gateway', 'an optional tech label', 'an optional description')
@enduml
```

## AwsIoTDeviceGatewayCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGatewayCard
include('aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway')

' renders the element
AwsIoTDeviceGatewayCard('AwsIoTDeviceGatewayCard', 'Aws Io T Device Gateway Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGatewayCard
include('aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway')

' renders the element
AwsIoTDeviceGatewayCard('AwsIoTDeviceGatewayCard', 'Aws Io T Device Gateway Card', 'an optional description')
@enduml
```

## AwsIoTDeviceGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGatewayGroup
include('aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway')

' renders the element
AwsIoTDeviceGatewayGroup('AwsIoTDeviceGatewayGroup', 'Aws Io T Device Gateway Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGatewayGroup
include('aws-q1-2024/Resource/IoT/AwsIoTDeviceGateway')

' renders the element
AwsIoTDeviceGatewayGroup('AwsIoTDeviceGatewayGroup', 'Aws Io T Device Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

