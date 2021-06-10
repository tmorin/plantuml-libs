# AwsProton


```text
aws-20210131/Architecture/ManagementGovernance/AwsProton
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')
```



| Illustration | AwsProton | AwsProtonCard | AwsProtonGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/ManagementGovernance/AwsProton.png) | ![illustration for AwsProton](../../../aws-20210131/Architecture/ManagementGovernance/AwsProton.Local.png) | ![illustration for AwsProtonCard](../../../aws-20210131/Architecture/ManagementGovernance/AwsProtonCard.Local.png) | ![illustration for AwsProtonGroup](../../../aws-20210131/Architecture/ManagementGovernance/AwsProtonGroup.Local.png) |




## AwsProton

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsProton
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')

' renders the element
AwsProton('AwsProton', 'Aws Proton', 'an optional tech label')
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

' loads the Item which embeds the element AwsProton
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')

' renders the element
AwsProton('AwsProton', 'Aws Proton', 'an optional tech label')
@enduml
```

## AwsProtonCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsProtonCard
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')

' renders the element
AwsProtonCard('AwsProtonCard', 'Aws Proton Card', 'an optional description')
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

' loads the Item which embeds the element AwsProtonCard
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')

' renders the element
AwsProtonCard('AwsProtonCard', 'Aws Proton Card', 'an optional description')
@enduml
```

## AwsProtonGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsProtonGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')

' renders the element
AwsProtonGroup('AwsProtonGroup', 'Aws Proton Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsProtonGroup
include('aws-20210131/Architecture/ManagementGovernance/AwsProton')

' renders the element
AwsProtonGroup('AwsProtonGroup', 'Aws Proton Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

