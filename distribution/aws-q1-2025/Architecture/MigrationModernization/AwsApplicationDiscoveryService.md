# AwsApplicationDiscoveryService


```text
aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService
```

```text
include('aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService')
```



| Illustration | AwsApplicationDiscoveryService | AwsApplicationDiscoveryServiceCard | AwsApplicationDiscoveryServiceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService.png) | ![illustration for AwsApplicationDiscoveryService](../../../aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService.Local.png) | ![illustration for AwsApplicationDiscoveryServiceCard](../../../aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryServiceCard.Local.png) | ![illustration for AwsApplicationDiscoveryServiceGroup](../../../aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryServiceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AwsApplicationDiscoveryServiceXs>`
- `<$AwsApplicationDiscoveryServiceSm>`
- `<$AwsApplicationDiscoveryServiceMd>`
- `<$AwsApplicationDiscoveryServiceLg>`





## AwsApplicationDiscoveryService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryService
include('aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryService('AwsApplicationDiscoveryService', 'Aws Application Discovery Service', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryService
include('aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryService('AwsApplicationDiscoveryService', 'Aws Application Discovery Service', 'an optional tech label', 'an optional description')
@enduml
```

## AwsApplicationDiscoveryServiceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryServiceCard
include('aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService')

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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryServiceCard
include('aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryServiceCard('AwsApplicationDiscoveryServiceCard', 'Aws Application Discovery Service Card', 'an optional description')
@enduml
```

## AwsApplicationDiscoveryServiceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryServiceGroup
include('aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService')

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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AwsApplicationDiscoveryServiceGroup
include('aws-q1-2025/Architecture/MigrationModernization/AwsApplicationDiscoveryService')

' renders the element
AwsApplicationDiscoveryServiceGroup('AwsApplicationDiscoveryServiceGroup', 'Aws Application Discovery Service Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

