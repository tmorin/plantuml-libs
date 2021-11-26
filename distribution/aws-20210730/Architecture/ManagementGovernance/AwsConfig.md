# AwsConfig


```text
aws-20210730/Architecture/ManagementGovernance/AwsConfig
```

```text
include('aws-20210730/Architecture/ManagementGovernance/AwsConfig')
```



| Illustration | AwsConfig | AwsConfigCard | AwsConfigGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/ManagementGovernance/AwsConfig.png) | ![illustration for AwsConfig](../../../aws-20210730/Architecture/ManagementGovernance/AwsConfig.Local.png) | ![illustration for AwsConfigCard](../../../aws-20210730/Architecture/ManagementGovernance/AwsConfigCard.Local.png) | ![illustration for AwsConfigGroup](../../../aws-20210730/Architecture/ManagementGovernance/AwsConfigGroup.Local.png) |




## AwsConfig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsConfig
include('aws-20210730/Architecture/ManagementGovernance/AwsConfig')

' renders the element
AwsConfig('AwsConfig', 'Aws Config', 'an optional tech label')
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

' loads the Item which embeds the element AwsConfig
include('aws-20210730/Architecture/ManagementGovernance/AwsConfig')

' renders the element
AwsConfig('AwsConfig', 'Aws Config', 'an optional tech label')
@enduml
```

## AwsConfigCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsConfigCard
include('aws-20210730/Architecture/ManagementGovernance/AwsConfig')

' renders the element
AwsConfigCard('AwsConfigCard', 'Aws Config Card', 'an optional description')
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

' loads the Item which embeds the element AwsConfigCard
include('aws-20210730/Architecture/ManagementGovernance/AwsConfig')

' renders the element
AwsConfigCard('AwsConfigCard', 'Aws Config Card', 'an optional description')
@enduml
```

## AwsConfigGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AwsConfigGroup
include('aws-20210730/Architecture/ManagementGovernance/AwsConfig')

' renders the element
AwsConfigGroup('AwsConfigGroup', 'Aws Config Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsConfigGroup
include('aws-20210730/Architecture/ManagementGovernance/AwsConfig')

' renders the element
AwsConfigGroup('AwsConfigGroup', 'Aws Config Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

