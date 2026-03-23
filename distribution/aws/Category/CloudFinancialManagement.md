# CloudFinancialManagement


```text
aws/Category/CloudFinancialManagement
```

```text
include('aws/Category/CloudFinancialManagement')
```



| Illustration | CloudFinancialManagement | CloudFinancialManagementCard | CloudFinancialManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../aws/Category/CloudFinancialManagement.png) | ![illustration for CloudFinancialManagement](../../aws/Category/CloudFinancialManagement.Local.png) | ![illustration for CloudFinancialManagementCard](../../aws/Category/CloudFinancialManagementCard.Local.png) | ![illustration for CloudFinancialManagementGroup](../../aws/Category/CloudFinancialManagementGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudFinancialManagementXs>`
- `<$CloudFinancialManagementSm>`
- `<$CloudFinancialManagementMd>`
- `<$CloudFinancialManagementLg>`





## CloudFinancialManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element CloudFinancialManagement
include('aws/Category/CloudFinancialManagement')

' renders the element
CloudFinancialManagement('CloudFinancialManagement', 'Cloud Financial Management', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element CloudFinancialManagement
include('aws/Category/CloudFinancialManagement')

' renders the element
CloudFinancialManagement('CloudFinancialManagement', 'Cloud Financial Management', 'an optional tech label', 'an optional description')
@enduml
```

## CloudFinancialManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element CloudFinancialManagementCard
include('aws/Category/CloudFinancialManagement')

' renders the element
CloudFinancialManagementCard('CloudFinancialManagementCard', 'Cloud Financial Management Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element CloudFinancialManagementCard
include('aws/Category/CloudFinancialManagement')

' renders the element
CloudFinancialManagementCard('CloudFinancialManagementCard', 'Cloud Financial Management Card', 'an optional description')
@enduml
```

## CloudFinancialManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element CloudFinancialManagementGroup
include('aws/Category/CloudFinancialManagement')

' renders the element
CloudFinancialManagementGroup('CloudFinancialManagementGroup', 'Cloud Financial Management Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element CloudFinancialManagementGroup
include('aws/Category/CloudFinancialManagement')

' renders the element
CloudFinancialManagementGroup('CloudFinancialManagementGroup', 'Cloud Financial Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

