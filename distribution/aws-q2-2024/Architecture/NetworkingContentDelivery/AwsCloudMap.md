# AwsCloudMap


```text
aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap
```

```text
include('aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap')
```



| Illustration | AwsCloudMap | AwsCloudMapCard | AwsCloudMapGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap.png) | ![illustration for AwsCloudMap](../../../aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap.Local.png) | ![illustration for AwsCloudMapCard](../../../aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMapCard.Local.png) | ![illustration for AwsCloudMapGroup](../../../aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMapGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsCloudMapXs>`
- `<$AwsCloudMapSm>`
- `<$AwsCloudMapMd>`
- `<$AwsCloudMapLg>`





## AwsCloudMap

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsCloudMap
include('aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap')

' renders the element
AwsCloudMap('AwsCloudMap', 'Aws Cloud Map', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsCloudMap
include('aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap')

' renders the element
AwsCloudMap('AwsCloudMap', 'Aws Cloud Map', 'an optional tech label', 'an optional description')
@enduml
```

## AwsCloudMapCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsCloudMapCard
include('aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap')

' renders the element
AwsCloudMapCard('AwsCloudMapCard', 'Aws Cloud Map Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsCloudMapCard
include('aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap')

' renders the element
AwsCloudMapCard('AwsCloudMapCard', 'Aws Cloud Map Card', 'an optional description')
@enduml
```

## AwsCloudMapGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsCloudMapGroup
include('aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap')

' renders the element
AwsCloudMapGroup('AwsCloudMapGroup', 'Aws Cloud Map Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AwsCloudMapGroup
include('aws-q2-2024/Architecture/NetworkingContentDelivery/AwsCloudMap')

' renders the element
AwsCloudMapGroup('AwsCloudMapGroup', 'Aws Cloud Map Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

