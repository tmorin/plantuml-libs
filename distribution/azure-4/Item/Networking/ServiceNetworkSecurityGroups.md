# ServiceNetworkSecurityGroups


```text
azure-4/Item/Networking/ServiceNetworkSecurityGroups
```

```text
include('azure-4/Item/Networking/ServiceNetworkSecurityGroups')
```



| Illustration | ServiceNetworkSecurityGroups | ServiceNetworkSecurityGroupsCard | ServiceNetworkSecurityGroupsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Networking/ServiceNetworkSecurityGroups.png) | ![illustration for ServiceNetworkSecurityGroups](../../../azure-4/Item/Networking/ServiceNetworkSecurityGroups.Local.png) | ![illustration for ServiceNetworkSecurityGroupsCard](../../../azure-4/Item/Networking/ServiceNetworkSecurityGroupsCard.Local.png) | ![illustration for ServiceNetworkSecurityGroupsGroup](../../../azure-4/Item/Networking/ServiceNetworkSecurityGroupsGroup.Local.png) |




## ServiceNetworkSecurityGroups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceNetworkSecurityGroups
include('azure-4/Item/Networking/ServiceNetworkSecurityGroups')

' renders the element
ServiceNetworkSecurityGroups('ServiceNetworkSecurityGroups', 'Service Network Security Groups', 'an optional tech label')
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

' loads the Item which embeds the element ServiceNetworkSecurityGroups
include('azure-4/Item/Networking/ServiceNetworkSecurityGroups')

' renders the element
ServiceNetworkSecurityGroups('ServiceNetworkSecurityGroups', 'Service Network Security Groups', 'an optional tech label')
@enduml
```

## ServiceNetworkSecurityGroupsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceNetworkSecurityGroupsCard
include('azure-4/Item/Networking/ServiceNetworkSecurityGroups')

' renders the element
ServiceNetworkSecurityGroupsCard('ServiceNetworkSecurityGroupsCard', 'Service Network Security Groups Card', 'an optional description')
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

' loads the Item which embeds the element ServiceNetworkSecurityGroupsCard
include('azure-4/Item/Networking/ServiceNetworkSecurityGroups')

' renders the element
ServiceNetworkSecurityGroupsCard('ServiceNetworkSecurityGroupsCard', 'Service Network Security Groups Card', 'an optional description')
@enduml
```

## ServiceNetworkSecurityGroupsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceNetworkSecurityGroupsGroup
include('azure-4/Item/Networking/ServiceNetworkSecurityGroups')

' renders the element
ServiceNetworkSecurityGroupsGroup('ServiceNetworkSecurityGroupsGroup', 'Service Network Security Groups Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceNetworkSecurityGroupsGroup
include('azure-4/Item/Networking/ServiceNetworkSecurityGroups')

' renders the element
ServiceNetworkSecurityGroupsGroup('ServiceNetworkSecurityGroupsGroup', 'Service Network Security Groups Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

