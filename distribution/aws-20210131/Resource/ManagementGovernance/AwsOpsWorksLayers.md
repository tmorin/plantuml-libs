# AwsOpsWorksLayers


```text
aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers
```

```text
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers')
```



| Illustration | AwsOpsWorksLayers | AwsOpsWorksLayersCard | AwsOpsWorksLayersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers.png) | ![illustration for AwsOpsWorksLayers](../../../aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers.Local.png) | ![illustration for AwsOpsWorksLayersCard](../../../aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayersCard.Local.png) | ![illustration for AwsOpsWorksLayersGroup](../../../aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayersGroup.Local.png) |




## AwsOpsWorksLayers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksLayers
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers')

' renders the element
AwsOpsWorksLayers('AwsOpsWorksLayers', 'Aws Ops Works Layers', 'an optional tech label')
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

' loads the Item which embeds the element AwsOpsWorksLayers
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers')

' renders the element
AwsOpsWorksLayers('AwsOpsWorksLayers', 'Aws Ops Works Layers', 'an optional tech label')
@enduml
```

## AwsOpsWorksLayersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksLayersCard
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers')

' renders the element
AwsOpsWorksLayersCard('AwsOpsWorksLayersCard', 'Aws Ops Works Layers Card', 'an optional description')
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

' loads the Item which embeds the element AwsOpsWorksLayersCard
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers')

' renders the element
AwsOpsWorksLayersCard('AwsOpsWorksLayersCard', 'Aws Ops Works Layers Card', 'an optional description')
@enduml
```

## AwsOpsWorksLayersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsOpsWorksLayersGroup
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers')

' renders the element
AwsOpsWorksLayersGroup('AwsOpsWorksLayersGroup', 'Aws Ops Works Layers Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsOpsWorksLayersGroup
include('aws-20210131/Resource/ManagementGovernance/AwsOpsWorksLayers')

' renders the element
AwsOpsWorksLayersGroup('AwsOpsWorksLayersGroup', 'Aws Ops Works Layers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

