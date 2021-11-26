# ServiceUsers


```text
azure-4/Item/Identity/ServiceUsers
```

```text
include('azure-4/Item/Identity/ServiceUsers')
```



| Illustration | ServiceUsers | ServiceUsersCard | ServiceUsersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Identity/ServiceUsers.png) | ![illustration for ServiceUsers](../../../azure-4/Item/Identity/ServiceUsers.Local.png) | ![illustration for ServiceUsersCard](../../../azure-4/Item/Identity/ServiceUsersCard.Local.png) | ![illustration for ServiceUsersGroup](../../../azure-4/Item/Identity/ServiceUsersGroup.Local.png) |




## ServiceUsers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceUsers
include('azure-4/Item/Identity/ServiceUsers')

' renders the element
ServiceUsers('ServiceUsers', 'Service Users', 'an optional tech label')
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

' loads the Item which embeds the element ServiceUsers
include('azure-4/Item/Identity/ServiceUsers')

' renders the element
ServiceUsers('ServiceUsers', 'Service Users', 'an optional tech label')
@enduml
```

## ServiceUsersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceUsersCard
include('azure-4/Item/Identity/ServiceUsers')

' renders the element
ServiceUsersCard('ServiceUsersCard', 'Service Users Card', 'an optional description')
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

' loads the Item which embeds the element ServiceUsersCard
include('azure-4/Item/Identity/ServiceUsers')

' renders the element
ServiceUsersCard('ServiceUsersCard', 'Service Users Card', 'an optional description')
@enduml
```

## ServiceUsersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceUsersGroup
include('azure-4/Item/Identity/ServiceUsers')

' renders the element
ServiceUsersGroup('ServiceUsersGroup', 'Service Users Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceUsersGroup
include('azure-4/Item/Identity/ServiceUsers')

' renders the element
ServiceUsersGroup('ServiceUsersGroup', 'Service Users Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

