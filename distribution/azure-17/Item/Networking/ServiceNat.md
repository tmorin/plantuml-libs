# ServiceNat


```text
azure-17/Item/Networking/ServiceNat
```

```text
include('azure-17/Item/Networking/ServiceNat')
```



| Illustration | ServiceNat | ServiceNatCard | ServiceNatGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Networking/ServiceNat.png) | ![illustration for ServiceNat](../../../azure-17/Item/Networking/ServiceNat.Local.png) | ![illustration for ServiceNatCard](../../../azure-17/Item/Networking/ServiceNatCard.Local.png) | ![illustration for ServiceNatGroup](../../../azure-17/Item/Networking/ServiceNatGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceNatXs>`
- `<$ServiceNatSm>`
- `<$ServiceNatMd>`
- `<$ServiceNatLg>`





## ServiceNat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceNat
include('azure-17/Item/Networking/ServiceNat')

' renders the element
ServiceNat('ServiceNat', 'Service Nat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceNat
include('azure-17/Item/Networking/ServiceNat')

' renders the element
ServiceNat('ServiceNat', 'Service Nat', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceNatCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceNatCard
include('azure-17/Item/Networking/ServiceNat')

' renders the element
ServiceNatCard('ServiceNatCard', 'Service Nat Card', 'an optional description')
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

' loads the Item which embeds the element ServiceNatCard
include('azure-17/Item/Networking/ServiceNat')

' renders the element
ServiceNatCard('ServiceNatCard', 'Service Nat Card', 'an optional description')
@enduml
```

## ServiceNatGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceNatGroup
include('azure-17/Item/Networking/ServiceNat')

' renders the element
ServiceNatGroup('ServiceNatGroup', 'Service Nat Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceNatGroup
include('azure-17/Item/Networking/ServiceNat')

' renders the element
ServiceNatGroup('ServiceNatGroup', 'Service Nat Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

