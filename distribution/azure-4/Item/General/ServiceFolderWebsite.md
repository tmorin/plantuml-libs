# ServiceFolderWebsite


```text
azure-4/Item/General/ServiceFolderWebsite
```

```text
include('azure-4/Item/General/ServiceFolderWebsite')
```



| Illustration | ServiceFolderWebsite | ServiceFolderWebsiteCard | ServiceFolderWebsiteGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceFolderWebsite.png) | ![illustration for ServiceFolderWebsite](../../../azure-4/Item/General/ServiceFolderWebsite.Local.png) | ![illustration for ServiceFolderWebsiteCard](../../../azure-4/Item/General/ServiceFolderWebsiteCard.Local.png) | ![illustration for ServiceFolderWebsiteGroup](../../../azure-4/Item/General/ServiceFolderWebsiteGroup.Local.png) |




## ServiceFolderWebsite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceFolderWebsite
include('azure-4/Item/General/ServiceFolderWebsite')

' renders the element
ServiceFolderWebsite('ServiceFolderWebsite', 'Service Folder Website', 'an optional tech label')
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

' loads the Item which embeds the element ServiceFolderWebsite
include('azure-4/Item/General/ServiceFolderWebsite')

' renders the element
ServiceFolderWebsite('ServiceFolderWebsite', 'Service Folder Website', 'an optional tech label')
@enduml
```

## ServiceFolderWebsiteCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceFolderWebsiteCard
include('azure-4/Item/General/ServiceFolderWebsite')

' renders the element
ServiceFolderWebsiteCard('ServiceFolderWebsiteCard', 'Service Folder Website Card', 'an optional description')
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

' loads the Item which embeds the element ServiceFolderWebsiteCard
include('azure-4/Item/General/ServiceFolderWebsite')

' renders the element
ServiceFolderWebsiteCard('ServiceFolderWebsiteCard', 'Service Folder Website Card', 'an optional description')
@enduml
```

## ServiceFolderWebsiteGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceFolderWebsiteGroup
include('azure-4/Item/General/ServiceFolderWebsite')

' renders the element
ServiceFolderWebsiteGroup('ServiceFolderWebsiteGroup', 'Service Folder Website Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceFolderWebsiteGroup
include('azure-4/Item/General/ServiceFolderWebsite')

' renders the element
ServiceFolderWebsiteGroup('ServiceFolderWebsiteGroup', 'Service Folder Website Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

