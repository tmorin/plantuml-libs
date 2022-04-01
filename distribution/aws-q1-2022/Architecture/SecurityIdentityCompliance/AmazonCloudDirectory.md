# AmazonCloudDirectory


```text
aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory
```

```text
include('aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory')
```



| Illustration | AmazonCloudDirectory | AmazonCloudDirectoryCard | AmazonCloudDirectoryGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory.png) | ![illustration for AmazonCloudDirectory](../../../aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory.Local.png) | ![illustration for AmazonCloudDirectoryCard](../../../aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectoryCard.Local.png) | ![illustration for AmazonCloudDirectoryGroup](../../../aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectoryGroup.Local.png) |




## AmazonCloudDirectory

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudDirectory
include('aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory')

' renders the element
AmazonCloudDirectory('AmazonCloudDirectory', 'Amazon Cloud Directory', 'an optional tech label')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudDirectory
include('aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory')

' renders the element
AmazonCloudDirectory('AmazonCloudDirectory', 'Amazon Cloud Directory', 'an optional tech label')
@enduml
```

## AmazonCloudDirectoryCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudDirectoryCard
include('aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory')

' renders the element
AmazonCloudDirectoryCard('AmazonCloudDirectoryCard', 'Amazon Cloud Directory Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudDirectoryCard
include('aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory')

' renders the element
AmazonCloudDirectoryCard('AmazonCloudDirectoryCard', 'Amazon Cloud Directory Card', 'an optional description')
@enduml
```

## AmazonCloudDirectoryGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudDirectoryGroup
include('aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory')

' renders the element
AmazonCloudDirectoryGroup('AmazonCloudDirectoryGroup', 'Amazon Cloud Directory Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudDirectoryGroup
include('aws-q1-2022/Architecture/SecurityIdentityCompliance/AmazonCloudDirectory')

' renders the element
AmazonCloudDirectoryGroup('AmazonCloudDirectoryGroup', 'Amazon Cloud Directory Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

