# ServiceCdnProfiles


```text
azure-4/Item/AppServices/ServiceCdnProfiles
```

```text
include('azure-4/Item/AppServices/ServiceCdnProfiles')
```



| Illustration | ServiceCdnProfiles | ServiceCdnProfilesCard | ServiceCdnProfilesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/AppServices/ServiceCdnProfiles.png) | ![illustration for ServiceCdnProfiles](../../../azure-4/Item/AppServices/ServiceCdnProfiles.Local.png) | ![illustration for ServiceCdnProfilesCard](../../../azure-4/Item/AppServices/ServiceCdnProfilesCard.Local.png) | ![illustration for ServiceCdnProfilesGroup](../../../azure-4/Item/AppServices/ServiceCdnProfilesGroup.Local.png) |




## ServiceCdnProfiles

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCdnProfiles
include('azure-4/Item/AppServices/ServiceCdnProfiles')

' renders the element
ServiceCdnProfiles('ServiceCdnProfiles', 'Service Cdn Profiles', 'an optional tech label')
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

' loads the Item which embeds the element ServiceCdnProfiles
include('azure-4/Item/AppServices/ServiceCdnProfiles')

' renders the element
ServiceCdnProfiles('ServiceCdnProfiles', 'Service Cdn Profiles', 'an optional tech label')
@enduml
```

## ServiceCdnProfilesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCdnProfilesCard
include('azure-4/Item/AppServices/ServiceCdnProfiles')

' renders the element
ServiceCdnProfilesCard('ServiceCdnProfilesCard', 'Service Cdn Profiles Card', 'an optional description')
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

' loads the Item which embeds the element ServiceCdnProfilesCard
include('azure-4/Item/AppServices/ServiceCdnProfiles')

' renders the element
ServiceCdnProfilesCard('ServiceCdnProfilesCard', 'Service Cdn Profiles Card', 'an optional description')
@enduml
```

## ServiceCdnProfilesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCdnProfilesGroup
include('azure-4/Item/AppServices/ServiceCdnProfiles')

' renders the element
ServiceCdnProfilesGroup('ServiceCdnProfilesGroup', 'Service Cdn Profiles Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceCdnProfilesGroup
include('azure-4/Item/AppServices/ServiceCdnProfiles')

' renders the element
ServiceCdnProfilesGroup('ServiceCdnProfilesGroup', 'Service Cdn Profiles Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

