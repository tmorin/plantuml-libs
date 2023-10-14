# ServiceDDoSProtectionPlans


```text
azure-17/Item/Networking/ServiceDDoSProtectionPlans
```

```text
include('azure-17/Item/Networking/ServiceDDoSProtectionPlans')
```



| Illustration | ServiceDDoSProtectionPlans | ServiceDDoSProtectionPlansCard | ServiceDDoSProtectionPlansGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Networking/ServiceDDoSProtectionPlans.png) | ![illustration for ServiceDDoSProtectionPlans](../../../azure-17/Item/Networking/ServiceDDoSProtectionPlans.Local.png) | ![illustration for ServiceDDoSProtectionPlansCard](../../../azure-17/Item/Networking/ServiceDDoSProtectionPlansCard.Local.png) | ![illustration for ServiceDDoSProtectionPlansGroup](../../../azure-17/Item/Networking/ServiceDDoSProtectionPlansGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDDoSProtectionPlansXs>`
- `<$ServiceDDoSProtectionPlansSm>`
- `<$ServiceDDoSProtectionPlansMd>`
- `<$ServiceDDoSProtectionPlansLg>`





## ServiceDDoSProtectionPlans

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDDoSProtectionPlans
include('azure-17/Item/Networking/ServiceDDoSProtectionPlans')

' renders the element
ServiceDDoSProtectionPlans('ServiceDDoSProtectionPlans', 'Service D Do S Protection Plans', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDDoSProtectionPlans
include('azure-17/Item/Networking/ServiceDDoSProtectionPlans')

' renders the element
ServiceDDoSProtectionPlans('ServiceDDoSProtectionPlans', 'Service D Do S Protection Plans', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDDoSProtectionPlansCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDDoSProtectionPlansCard
include('azure-17/Item/Networking/ServiceDDoSProtectionPlans')

' renders the element
ServiceDDoSProtectionPlansCard('ServiceDDoSProtectionPlansCard', 'Service D Do S Protection Plans Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDDoSProtectionPlansCard
include('azure-17/Item/Networking/ServiceDDoSProtectionPlans')

' renders the element
ServiceDDoSProtectionPlansCard('ServiceDDoSProtectionPlansCard', 'Service D Do S Protection Plans Card', 'an optional description')
@enduml
```

## ServiceDDoSProtectionPlansGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDDoSProtectionPlansGroup
include('azure-17/Item/Networking/ServiceDDoSProtectionPlans')

' renders the element
ServiceDDoSProtectionPlansGroup('ServiceDDoSProtectionPlansGroup', 'Service D Do S Protection Plans Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDDoSProtectionPlansGroup
include('azure-17/Item/Networking/ServiceDDoSProtectionPlans')

' renders the element
ServiceDDoSProtectionPlansGroup('ServiceDDoSProtectionPlansGroup', 'Service D Do S Protection Plans Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

