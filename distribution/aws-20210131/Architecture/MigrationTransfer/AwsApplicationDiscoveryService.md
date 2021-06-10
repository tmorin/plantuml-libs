# AwsApplicationDiscoveryService


```text
aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService
```

```text
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')
```



| Illustration | AwsApplicationDiscoveryService | AwsApplicationDiscoveryServiceCard | AwsApplicationDiscoveryServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService.png) | ![illustration for AwsApplicationDiscoveryService](../../../aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService.Local.png) | ![illustration for AwsApplicationDiscoveryServiceCard](../../../aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryServiceCard.Local.png) | ![illustration for AwsApplicationDiscoveryServiceGroup](../../../aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryServiceGroup.Local.png) |




## AwsApplicationDiscoveryService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryService
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryService('AwsApplicationDiscoveryService', 'Aws Application Discovery Service', 'an optional tech label')
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

' loads the Item which embeds the element AwsApplicationDiscoveryService
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryService('AwsApplicationDiscoveryService', 'Aws Application Discovery Service', 'an optional tech label')
@enduml
```

## AwsApplicationDiscoveryServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryServiceCard
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryServiceCard('AwsApplicationDiscoveryServiceCard', 'Aws Application Discovery Service Card', 'an optional description')
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

' loads the Item which embeds the element AwsApplicationDiscoveryServiceCard
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryServiceCard('AwsApplicationDiscoveryServiceCard', 'Aws Application Discovery Service Card', 'an optional description')
@enduml
```

## AwsApplicationDiscoveryServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryServiceGroup
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryServiceGroup('AwsApplicationDiscoveryServiceGroup', 'Aws Application Discovery Service Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsApplicationDiscoveryServiceGroup
include('aws-20210131/Architecture/MigrationTransfer/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryServiceGroup('AwsApplicationDiscoveryServiceGroup', 'Aws Application Discovery Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

