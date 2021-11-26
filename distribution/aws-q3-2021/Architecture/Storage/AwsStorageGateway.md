# AwsStorageGateway


```text
aws-q3-2021/Architecture/Storage/AwsStorageGateway
```

```text
include('aws-q3-2021/Architecture/Storage/AwsStorageGateway')
```



| Illustration | AwsStorageGateway | AwsStorageGatewayCard | AwsStorageGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Storage/AwsStorageGateway.png) | ![illustration for AwsStorageGateway](../../../aws-q3-2021/Architecture/Storage/AwsStorageGateway.Local.png) | ![illustration for AwsStorageGatewayCard](../../../aws-q3-2021/Architecture/Storage/AwsStorageGatewayCard.Local.png) | ![illustration for AwsStorageGatewayGroup](../../../aws-q3-2021/Architecture/Storage/AwsStorageGatewayGroup.Local.png) |




## AwsStorageGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStorageGateway
include('aws-q3-2021/Architecture/Storage/AwsStorageGateway')

' renders the element
AwsStorageGateway('AwsStorageGateway', 'Aws Storage Gateway', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStorageGateway
include('aws-q3-2021/Architecture/Storage/AwsStorageGateway')

' renders the element
AwsStorageGateway('AwsStorageGateway', 'Aws Storage Gateway', 'an optional tech label')
@enduml
```

## AwsStorageGatewayCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStorageGatewayCard
include('aws-q3-2021/Architecture/Storage/AwsStorageGateway')

' renders the element
AwsStorageGatewayCard('AwsStorageGatewayCard', 'Aws Storage Gateway Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStorageGatewayCard
include('aws-q3-2021/Architecture/Storage/AwsStorageGateway')

' renders the element
AwsStorageGatewayCard('AwsStorageGatewayCard', 'Aws Storage Gateway Card', 'an optional description')
@enduml
```

## AwsStorageGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStorageGatewayGroup
include('aws-q3-2021/Architecture/Storage/AwsStorageGateway')

' renders the element
AwsStorageGatewayGroup('AwsStorageGatewayGroup', 'Aws Storage Gateway Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsStorageGatewayGroup
include('aws-q3-2021/Architecture/Storage/AwsStorageGateway')

' renders the element
AwsStorageGatewayGroup('AwsStorageGatewayGroup', 'Aws Storage Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

