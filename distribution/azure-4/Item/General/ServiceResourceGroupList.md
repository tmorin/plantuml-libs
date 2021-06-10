# ServiceResourceGroupList


```text
azure-4/Item/General/ServiceResourceGroupList
```

```text
include('azure-4/Item/General/ServiceResourceGroupList')
```



| Illustration | ServiceResourceGroupList | ServiceResourceGroupListCard | ServiceResourceGroupListGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceResourceGroupList.png) | ![illustration for ServiceResourceGroupList](../../../azure-4/Item/General/ServiceResourceGroupList.Local.png) | ![illustration for ServiceResourceGroupListCard](../../../azure-4/Item/General/ServiceResourceGroupListCard.Local.png) | ![illustration for ServiceResourceGroupListGroup](../../../azure-4/Item/General/ServiceResourceGroupListGroup.Local.png) |




## ServiceResourceGroupList

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceGroupList
include('azure-4/Item/General/ServiceResourceGroupList')

' renders the element
ServiceResourceGroupList('ServiceResourceGroupList', 'Service Resource Group List', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceGroupList
include('azure-4/Item/General/ServiceResourceGroupList')

' renders the element
ServiceResourceGroupList('ServiceResourceGroupList', 'Service Resource Group List', 'an optional tech label')
@enduml
```

## ServiceResourceGroupListCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceGroupListCard
include('azure-4/Item/General/ServiceResourceGroupList')

' renders the element
ServiceResourceGroupListCard('ServiceResourceGroupListCard', 'Service Resource Group List Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceGroupListCard
include('azure-4/Item/General/ServiceResourceGroupList')

' renders the element
ServiceResourceGroupListCard('ServiceResourceGroupListCard', 'Service Resource Group List Card', 'an optional description')
@enduml
```

## ServiceResourceGroupListGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceGroupListGroup
include('azure-4/Item/General/ServiceResourceGroupList')

' renders the element
ServiceResourceGroupListGroup('ServiceResourceGroupListGroup', 'Service Resource Group List Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceGroupListGroup
include('azure-4/Item/General/ServiceResourceGroupList')

' renders the element
ServiceResourceGroupListGroup('ServiceResourceGroupListGroup', 'Service Resource Group List Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

