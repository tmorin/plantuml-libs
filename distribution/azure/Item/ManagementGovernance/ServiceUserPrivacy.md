# ServiceUserPrivacy


```text
azure/Item/ManagementGovernance/ServiceUserPrivacy
```

```text
include('azure/Item/ManagementGovernance/ServiceUserPrivacy')
```



| Illustration | ServiceUserPrivacy | ServiceUserPrivacyCard | ServiceUserPrivacyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/ManagementGovernance/ServiceUserPrivacy.png) | ![illustration for ServiceUserPrivacy](../../../azure/Item/ManagementGovernance/ServiceUserPrivacy.Local.png) | ![illustration for ServiceUserPrivacyCard](../../../azure/Item/ManagementGovernance/ServiceUserPrivacyCard.Local.png) | ![illustration for ServiceUserPrivacyGroup](../../../azure/Item/ManagementGovernance/ServiceUserPrivacyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceUserPrivacyXs>`
- `<$ServiceUserPrivacySm>`
- `<$ServiceUserPrivacyMd>`
- `<$ServiceUserPrivacyLg>`





## ServiceUserPrivacy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceUserPrivacy
include('azure/Item/ManagementGovernance/ServiceUserPrivacy')

' renders the element
ServiceUserPrivacy('ServiceUserPrivacy', 'Service User Privacy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceUserPrivacy
include('azure/Item/ManagementGovernance/ServiceUserPrivacy')

' renders the element
ServiceUserPrivacy('ServiceUserPrivacy', 'Service User Privacy', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceUserPrivacyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceUserPrivacyCard
include('azure/Item/ManagementGovernance/ServiceUserPrivacy')

' renders the element
ServiceUserPrivacyCard('ServiceUserPrivacyCard', 'Service User Privacy Card', 'an optional description')
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

' loads the Item which embeds the element ServiceUserPrivacyCard
include('azure/Item/ManagementGovernance/ServiceUserPrivacy')

' renders the element
ServiceUserPrivacyCard('ServiceUserPrivacyCard', 'Service User Privacy Card', 'an optional description')
@enduml
```

## ServiceUserPrivacyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceUserPrivacyGroup
include('azure/Item/ManagementGovernance/ServiceUserPrivacy')

' renders the element
ServiceUserPrivacyGroup('ServiceUserPrivacyGroup', 'Service User Privacy Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceUserPrivacyGroup
include('azure/Item/ManagementGovernance/ServiceUserPrivacy')

' renders the element
ServiceUserPrivacyGroup('ServiceUserPrivacyGroup', 'Service User Privacy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

