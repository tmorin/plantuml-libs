# ServiceMobile


```text
azure-6/Item/General/ServiceMobile
```

```text
include('azure-6/Item/General/ServiceMobile')
```



| Illustration | ServiceMobile | ServiceMobileCard | ServiceMobileGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/General/ServiceMobile.png) | ![illustration for ServiceMobile](../../../azure-6/Item/General/ServiceMobile.Local.png) | ![illustration for ServiceMobileCard](../../../azure-6/Item/General/ServiceMobileCard.Local.png) | ![illustration for ServiceMobileGroup](../../../azure-6/Item/General/ServiceMobileGroup.Local.png) |




## ServiceMobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMobile
include('azure-6/Item/General/ServiceMobile')

' renders the element
ServiceMobile('ServiceMobile', 'Service Mobile', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMobile
include('azure-6/Item/General/ServiceMobile')

' renders the element
ServiceMobile('ServiceMobile', 'Service Mobile', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMobileCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMobileCard
include('azure-6/Item/General/ServiceMobile')

' renders the element
ServiceMobileCard('ServiceMobileCard', 'Service Mobile Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMobileCard
include('azure-6/Item/General/ServiceMobile')

' renders the element
ServiceMobileCard('ServiceMobileCard', 'Service Mobile Card', 'an optional description')
@enduml
```

## ServiceMobileGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMobileGroup
include('azure-6/Item/General/ServiceMobile')

' renders the element
ServiceMobileGroup('ServiceMobileGroup', 'Service Mobile Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMobileGroup
include('azure-6/Item/General/ServiceMobile')

' renders the element
ServiceMobileGroup('ServiceMobileGroup', 'Service Mobile Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

