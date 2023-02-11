# ServiceEnterpriseApplications


```text
azure-11/Item/Identity/ServiceEnterpriseApplications
```

```text
include('azure-11/Item/Identity/ServiceEnterpriseApplications')
```



| Illustration | ServiceEnterpriseApplications | ServiceEnterpriseApplicationsCard | ServiceEnterpriseApplicationsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Identity/ServiceEnterpriseApplications.png) | ![illustration for ServiceEnterpriseApplications](../../../azure-11/Item/Identity/ServiceEnterpriseApplications.Local.png) | ![illustration for ServiceEnterpriseApplicationsCard](../../../azure-11/Item/Identity/ServiceEnterpriseApplicationsCard.Local.png) | ![illustration for ServiceEnterpriseApplicationsGroup](../../../azure-11/Item/Identity/ServiceEnterpriseApplicationsGroup.Local.png) |




## ServiceEnterpriseApplications

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceEnterpriseApplications
include('azure-11/Item/Identity/ServiceEnterpriseApplications')

' renders the element
ServiceEnterpriseApplications('ServiceEnterpriseApplications', 'Service Enterprise Applications', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceEnterpriseApplications
include('azure-11/Item/Identity/ServiceEnterpriseApplications')

' renders the element
ServiceEnterpriseApplications('ServiceEnterpriseApplications', 'Service Enterprise Applications', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceEnterpriseApplicationsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceEnterpriseApplicationsCard
include('azure-11/Item/Identity/ServiceEnterpriseApplications')

' renders the element
ServiceEnterpriseApplicationsCard('ServiceEnterpriseApplicationsCard', 'Service Enterprise Applications Card', 'an optional description')
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

' loads the Item which embeds the element ServiceEnterpriseApplicationsCard
include('azure-11/Item/Identity/ServiceEnterpriseApplications')

' renders the element
ServiceEnterpriseApplicationsCard('ServiceEnterpriseApplicationsCard', 'Service Enterprise Applications Card', 'an optional description')
@enduml
```

## ServiceEnterpriseApplicationsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceEnterpriseApplicationsGroup
include('azure-11/Item/Identity/ServiceEnterpriseApplications')

' renders the element
ServiceEnterpriseApplicationsGroup('ServiceEnterpriseApplicationsGroup', 'Service Enterprise Applications Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceEnterpriseApplicationsGroup
include('azure-11/Item/Identity/ServiceEnterpriseApplications')

' renders the element
ServiceEnterpriseApplicationsGroup('ServiceEnterpriseApplicationsGroup', 'Service Enterprise Applications Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

