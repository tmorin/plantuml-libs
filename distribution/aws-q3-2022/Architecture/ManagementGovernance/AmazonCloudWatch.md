# AmazonCloudWatch


```text
aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch
```

```text
include('aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch')
```



| Illustration | AmazonCloudWatch | AmazonCloudWatchCard | AmazonCloudWatchGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch.png) | ![illustration for AmazonCloudWatch](../../../aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch.Local.png) | ![illustration for AmazonCloudWatchCard](../../../aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatchCard.Local.png) | ![illustration for AmazonCloudWatchGroup](../../../aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatchGroup.Local.png) |




## AmazonCloudWatch

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudWatch
include('aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch')

' renders the element
AmazonCloudWatch('AmazonCloudWatch', 'Amazon Cloud Watch', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonCloudWatch
include('aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch')

' renders the element
AmazonCloudWatch('AmazonCloudWatch', 'Amazon Cloud Watch', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonCloudWatchCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchCard
include('aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch')

' renders the element
AmazonCloudWatchCard('AmazonCloudWatchCard', 'Amazon Cloud Watch Card', 'an optional description')
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

' loads the Item which embeds the element AmazonCloudWatchCard
include('aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch')

' renders the element
AmazonCloudWatchCard('AmazonCloudWatchCard', 'Amazon Cloud Watch Card', 'an optional description')
@enduml
```

## AmazonCloudWatchGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonCloudWatchGroup
include('aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch')

' renders the element
AmazonCloudWatchGroup('AmazonCloudWatchGroup', 'Amazon Cloud Watch Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonCloudWatchGroup
include('aws-q3-2022/Architecture/ManagementGovernance/AmazonCloudWatch')

' renders the element
AmazonCloudWatchGroup('AmazonCloudWatchGroup', 'Amazon Cloud Watch Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

