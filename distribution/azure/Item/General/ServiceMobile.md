# ServiceMobile


```text
azure/Item/General/ServiceMobile
```

```text
include('azure/Item/General/ServiceMobile')
```



| Illustration | ServiceMobile | ServiceMobileCard | ServiceMobileGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/General/ServiceMobile.png) | ![illustration for ServiceMobile](../../../azure/Item/General/ServiceMobile.Local.png) | ![illustration for ServiceMobileCard](../../../azure/Item/General/ServiceMobileCard.Local.png) | ![illustration for ServiceMobileGroup](../../../azure/Item/General/ServiceMobileGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMobileXs>`
- `<$ServiceMobileSm>`
- `<$ServiceMobileMd>`
- `<$ServiceMobileLg>`





## ServiceMobile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMobile
include('azure/Item/General/ServiceMobile')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMobile
include('azure/Item/General/ServiceMobile')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMobileCard
include('azure/Item/General/ServiceMobile')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMobileCard
include('azure/Item/General/ServiceMobile')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMobileGroup
include('azure/Item/General/ServiceMobile')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMobileGroup
include('azure/Item/General/ServiceMobile')

' renders the element
ServiceMobileGroup('ServiceMobileGroup', 'Service Mobile Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

