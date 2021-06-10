# AwsCloudMapService


```text
aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService
```

```text
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService')
```



| Illustration | AwsCloudMapService | AwsCloudMapServiceCard | AwsCloudMapServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService.png) | ![illustration for AwsCloudMapService](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService.Local.png) | ![illustration for AwsCloudMapServiceCard](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapServiceCard.Local.png) | ![illustration for AwsCloudMapServiceGroup](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapServiceGroup.Local.png) |




## AwsCloudMapService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudMapService
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService')

' renders the element
AwsCloudMapService('AwsCloudMapService', 'Aws Cloud Map Service', 'an optional tech label')
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

' loads the Item which embeds the element AwsCloudMapService
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService')

' renders the element
AwsCloudMapService('AwsCloudMapService', 'Aws Cloud Map Service', 'an optional tech label')
@enduml
```

## AwsCloudMapServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudMapServiceCard
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService')

' renders the element
AwsCloudMapServiceCard('AwsCloudMapServiceCard', 'Aws Cloud Map Service Card', 'an optional description')
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

' loads the Item which embeds the element AwsCloudMapServiceCard
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService')

' renders the element
AwsCloudMapServiceCard('AwsCloudMapServiceCard', 'Aws Cloud Map Service Card', 'an optional description')
@enduml
```

## AwsCloudMapServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCloudMapServiceGroup
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService')

' renders the element
AwsCloudMapServiceGroup('AwsCloudMapServiceGroup', 'Aws Cloud Map Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsCloudMapServiceGroup
include('aws-20210131/Resource/NetworkingAndContentDelivery/AwsCloudMapService')

' renders the element
AwsCloudMapServiceGroup('AwsCloudMapServiceGroup', 'Aws Cloud Map Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

