# AwsCostManagement


```text
aws-q1-2022/Category/AwsCostManagement
```

```text
include('aws-q1-2022/Category/AwsCostManagement')
```



| Illustration | AwsCostManagement | AwsCostManagementCard | AwsCostManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-q1-2022/Category/AwsCostManagement.png) | ![illustration for AwsCostManagement](../../aws-q1-2022/Category/AwsCostManagement.Local.png) | ![illustration for AwsCostManagementCard](../../aws-q1-2022/Category/AwsCostManagementCard.Local.png) | ![illustration for AwsCostManagementGroup](../../aws-q1-2022/Category/AwsCostManagementGroup.Local.png) |




## AwsCostManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsCostManagement
include('aws-q1-2022/Category/AwsCostManagement')

' renders the element
AwsCostManagement('AwsCostManagement', 'Aws Cost Management', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsCostManagement
include('aws-q1-2022/Category/AwsCostManagement')

' renders the element
AwsCostManagement('AwsCostManagement', 'Aws Cost Management', 'an optional tech label', 'an optional description')
@enduml
```

## AwsCostManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsCostManagementCard
include('aws-q1-2022/Category/AwsCostManagement')

' renders the element
AwsCostManagementCard('AwsCostManagementCard', 'Aws Cost Management Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsCostManagementCard
include('aws-q1-2022/Category/AwsCostManagement')

' renders the element
AwsCostManagementCard('AwsCostManagementCard', 'Aws Cost Management Card', 'an optional description')
@enduml
```

## AwsCostManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsCostManagementGroup
include('aws-q1-2022/Category/AwsCostManagement')

' renders the element
AwsCostManagementGroup('AwsCostManagementGroup', 'Aws Cost Management Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AwsCostManagementGroup
include('aws-q1-2022/Category/AwsCostManagement')

' renders the element
AwsCostManagementGroup('AwsCostManagementGroup', 'Aws Cost Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

