# AwsCostManagement


```text
aws-20210131/Category/AwsCostManagement
```

```text
include('aws-20210131/Category/AwsCostManagement')
```



| Illustration | AwsCostManagement | AwsCostManagementCard | AwsCostManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Category/AwsCostManagement.png) | ![illustration for AwsCostManagement](../../aws-20210131/Category/AwsCostManagement.Local.png) | ![illustration for AwsCostManagementCard](../../aws-20210131/Category/AwsCostManagementCard.Local.png) | ![illustration for AwsCostManagementGroup](../../aws-20210131/Category/AwsCostManagementGroup.Local.png) |




## AwsCostManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCostManagement
include('aws-20210131/Category/AwsCostManagement')

' renders the element
AwsCostManagement('AwsCostManagement', 'Aws Cost Management', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCostManagement
include('aws-20210131/Category/AwsCostManagement')

' renders the element
AwsCostManagement('AwsCostManagement', 'Aws Cost Management', 'an optional tech label')
@enduml
```

## AwsCostManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCostManagementCard
include('aws-20210131/Category/AwsCostManagement')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCostManagementCard
include('aws-20210131/Category/AwsCostManagement')

' renders the element
AwsCostManagementCard('AwsCostManagementCard', 'Aws Cost Management Card', 'an optional description')
@enduml
```

## AwsCostManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCostManagementGroup
include('aws-20210131/Category/AwsCostManagement')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsCostManagementGroup
include('aws-20210131/Category/AwsCostManagement')

' renders the element
AwsCostManagementGroup('AwsCostManagementGroup', 'Aws Cost Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

