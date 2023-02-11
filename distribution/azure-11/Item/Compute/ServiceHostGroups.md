# ServiceHostGroups


```text
azure-11/Item/Compute/ServiceHostGroups
```

```text
include('azure-11/Item/Compute/ServiceHostGroups')
```



| Illustration | ServiceHostGroups | ServiceHostGroupsCard | ServiceHostGroupsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Compute/ServiceHostGroups.png) | ![illustration for ServiceHostGroups](../../../azure-11/Item/Compute/ServiceHostGroups.Local.png) | ![illustration for ServiceHostGroupsCard](../../../azure-11/Item/Compute/ServiceHostGroupsCard.Local.png) | ![illustration for ServiceHostGroupsGroup](../../../azure-11/Item/Compute/ServiceHostGroupsGroup.Local.png) |




## ServiceHostGroups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceHostGroups
include('azure-11/Item/Compute/ServiceHostGroups')

' renders the element
ServiceHostGroups('ServiceHostGroups', 'Service Host Groups', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceHostGroups
include('azure-11/Item/Compute/ServiceHostGroups')

' renders the element
ServiceHostGroups('ServiceHostGroups', 'Service Host Groups', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceHostGroupsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceHostGroupsCard
include('azure-11/Item/Compute/ServiceHostGroups')

' renders the element
ServiceHostGroupsCard('ServiceHostGroupsCard', 'Service Host Groups Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceHostGroupsCard
include('azure-11/Item/Compute/ServiceHostGroups')

' renders the element
ServiceHostGroupsCard('ServiceHostGroupsCard', 'Service Host Groups Card', 'an optional description')
@enduml
```

## ServiceHostGroupsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceHostGroupsGroup
include('azure-11/Item/Compute/ServiceHostGroups')

' renders the element
ServiceHostGroupsGroup('ServiceHostGroupsGroup', 'Service Host Groups Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceHostGroupsGroup
include('azure-11/Item/Compute/ServiceHostGroups')

' renders the element
ServiceHostGroupsGroup('ServiceHostGroupsGroup', 'Service Host Groups Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

