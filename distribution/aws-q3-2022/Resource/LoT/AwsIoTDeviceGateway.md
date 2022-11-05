# AwsIoTDeviceGateway


```text
aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway
```

```text
include('aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway')
```



| Illustration | AwsIoTDeviceGateway | AwsIoTDeviceGatewayCard | AwsIoTDeviceGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway.png) | ![illustration for AwsIoTDeviceGateway](../../../aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway.Local.png) | ![illustration for AwsIoTDeviceGatewayCard](../../../aws-q3-2022/Resource/LoT/AwsIoTDeviceGatewayCard.Local.png) | ![illustration for AwsIoTDeviceGatewayGroup](../../../aws-q3-2022/Resource/LoT/AwsIoTDeviceGatewayGroup.Local.png) |




## AwsIoTDeviceGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGateway
include('aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGateway
include('aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGatewayCard
include('aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGatewayCard
include('aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGatewayGroup
include('aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway')

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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AwsIoTDeviceGatewayGroup
include('aws-q3-2022/Resource/LoT/AwsIoTDeviceGateway')

' renders the element
AwsIoTDeviceGatewayGroup('AwsIoTDeviceGatewayGroup', 'Aws Io T Device Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

