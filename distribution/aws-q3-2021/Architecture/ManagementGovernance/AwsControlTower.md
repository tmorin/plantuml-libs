# AwsControlTower


```text
aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower
```

```text
include('aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower')
```



| Illustration | AwsControlTower | AwsControlTowerCard | AwsControlTowerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower.png) | ![illustration for AwsControlTower](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower.Local.png) | ![illustration for AwsControlTowerCard](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsControlTowerCard.Local.png) | ![illustration for AwsControlTowerGroup](../../../aws-q3-2021/Architecture/ManagementGovernance/AwsControlTowerGroup.Local.png) |




## AwsControlTower

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsControlTower
include('aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower')

' renders the element
AwsControlTower('AwsControlTower', 'Aws Control Tower', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsControlTower
include('aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower')

' renders the element
AwsControlTower('AwsControlTower', 'Aws Control Tower', 'an optional tech label')
@enduml
```

## AwsControlTowerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsControlTowerCard
include('aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower')

' renders the element
AwsControlTowerCard('AwsControlTowerCard', 'Aws Control Tower Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsControlTowerCard
include('aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower')

' renders the element
AwsControlTowerCard('AwsControlTowerCard', 'Aws Control Tower Card', 'an optional description')
@enduml
```

## AwsControlTowerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsControlTowerGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower')

' renders the element
AwsControlTowerGroup('AwsControlTowerGroup', 'Aws Control Tower Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AwsControlTowerGroup
include('aws-q3-2021/Architecture/ManagementGovernance/AwsControlTower')

' renders the element
AwsControlTowerGroup('AwsControlTowerGroup', 'Aws Control Tower Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

