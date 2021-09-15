# AwsAppConfig


```text
aws-20210730/Architecture/ManagementGovernance/AwsAppConfig
```

```text
include('aws-20210730/Architecture/ManagementGovernance/AwsAppConfig')
```



| Illustration | AwsAppConfig | AwsAppConfigCard | AwsAppConfigGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/ManagementGovernance/AwsAppConfig.png) | ![illustration for AwsAppConfig](../../../aws-20210730/Architecture/ManagementGovernance/AwsAppConfig.Local.png) | ![illustration for AwsAppConfigCard](../../../aws-20210730/Architecture/ManagementGovernance/AwsAppConfigCard.Local.png) | ![illustration for AwsAppConfigGroup](../../../aws-20210730/Architecture/ManagementGovernance/AwsAppConfigGroup.Local.png) |




## AwsAppConfig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppConfig
include('aws-20210730/Architecture/ManagementGovernance/AwsAppConfig')

' renders the element
AwsAppConfig('AwsAppConfig', 'Aws App Config', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppConfig
include('aws-20210730/Architecture/ManagementGovernance/AwsAppConfig')

' renders the element
AwsAppConfig('AwsAppConfig', 'Aws App Config', 'an optional tech label')
@enduml
```

## AwsAppConfigCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppConfigCard
include('aws-20210730/Architecture/ManagementGovernance/AwsAppConfig')

' renders the element
AwsAppConfigCard('AwsAppConfigCard', 'Aws App Config Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppConfigCard
include('aws-20210730/Architecture/ManagementGovernance/AwsAppConfig')

' renders the element
AwsAppConfigCard('AwsAppConfigCard', 'Aws App Config Card', 'an optional description')
@enduml
```

## AwsAppConfigGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppConfigGroup
include('aws-20210730/Architecture/ManagementGovernance/AwsAppConfig')

' renders the element
AwsAppConfigGroup('AwsAppConfigGroup', 'Aws App Config Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsAppConfigGroup
include('aws-20210730/Architecture/ManagementGovernance/AwsAppConfig')

' renders the element
AwsAppConfigGroup('AwsAppConfigGroup', 'Aws App Config Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

