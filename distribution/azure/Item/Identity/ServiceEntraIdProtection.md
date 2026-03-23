# ServiceEntraIdProtection


```text
azure/Item/Identity/ServiceEntraIdProtection
```

```text
include('azure/Item/Identity/ServiceEntraIdProtection')
```



| Illustration | ServiceEntraIdProtection | ServiceEntraIdProtectionCard | ServiceEntraIdProtectionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Identity/ServiceEntraIdProtection.png) | ![illustration for ServiceEntraIdProtection](../../../azure/Item/Identity/ServiceEntraIdProtection.Local.png) | ![illustration for ServiceEntraIdProtectionCard](../../../azure/Item/Identity/ServiceEntraIdProtectionCard.Local.png) | ![illustration for ServiceEntraIdProtectionGroup](../../../azure/Item/Identity/ServiceEntraIdProtectionGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceEntraIdProtectionXs>`
- `<$ServiceEntraIdProtectionSm>`
- `<$ServiceEntraIdProtectionMd>`
- `<$ServiceEntraIdProtectionLg>`





## ServiceEntraIdProtection

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceEntraIdProtection
include('azure/Item/Identity/ServiceEntraIdProtection')

' renders the element
ServiceEntraIdProtection('ServiceEntraIdProtection', 'Service Entra Id Protection', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceEntraIdProtection
include('azure/Item/Identity/ServiceEntraIdProtection')

' renders the element
ServiceEntraIdProtection('ServiceEntraIdProtection', 'Service Entra Id Protection', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceEntraIdProtectionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceEntraIdProtectionCard
include('azure/Item/Identity/ServiceEntraIdProtection')

' renders the element
ServiceEntraIdProtectionCard('ServiceEntraIdProtectionCard', 'Service Entra Id Protection Card', 'an optional description')
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

' loads the Item which embeds the element ServiceEntraIdProtectionCard
include('azure/Item/Identity/ServiceEntraIdProtection')

' renders the element
ServiceEntraIdProtectionCard('ServiceEntraIdProtectionCard', 'Service Entra Id Protection Card', 'an optional description')
@enduml
```

## ServiceEntraIdProtectionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceEntraIdProtectionGroup
include('azure/Item/Identity/ServiceEntraIdProtection')

' renders the element
ServiceEntraIdProtectionGroup('ServiceEntraIdProtectionGroup', 'Service Entra Id Protection Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceEntraIdProtectionGroup
include('azure/Item/Identity/ServiceEntraIdProtection')

' renders the element
ServiceEntraIdProtectionGroup('ServiceEntraIdProtectionGroup', 'Service Entra Id Protection Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

