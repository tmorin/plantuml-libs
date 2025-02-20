# ServiceFolderBlank


```text
azure-20/Item/General/ServiceFolderBlank
```

```text
include('azure-20/Item/General/ServiceFolderBlank')
```



| Illustration | ServiceFolderBlank | ServiceFolderBlankCard | ServiceFolderBlankGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/General/ServiceFolderBlank.png) | ![illustration for ServiceFolderBlank](../../../azure-20/Item/General/ServiceFolderBlank.Local.png) | ![illustration for ServiceFolderBlankCard](../../../azure-20/Item/General/ServiceFolderBlankCard.Local.png) | ![illustration for ServiceFolderBlankGroup](../../../azure-20/Item/General/ServiceFolderBlankGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceFolderBlankXs>`
- `<$ServiceFolderBlankSm>`
- `<$ServiceFolderBlankMd>`
- `<$ServiceFolderBlankLg>`





## ServiceFolderBlank

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFolderBlank
include('azure-20/Item/General/ServiceFolderBlank')

' renders the element
ServiceFolderBlank('ServiceFolderBlank', 'Service Folder Blank', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFolderBlank
include('azure-20/Item/General/ServiceFolderBlank')

' renders the element
ServiceFolderBlank('ServiceFolderBlank', 'Service Folder Blank', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceFolderBlankCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFolderBlankCard
include('azure-20/Item/General/ServiceFolderBlank')

' renders the element
ServiceFolderBlankCard('ServiceFolderBlankCard', 'Service Folder Blank Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFolderBlankCard
include('azure-20/Item/General/ServiceFolderBlank')

' renders the element
ServiceFolderBlankCard('ServiceFolderBlankCard', 'Service Folder Blank Card', 'an optional description')
@enduml
```

## ServiceFolderBlankGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFolderBlankGroup
include('azure-20/Item/General/ServiceFolderBlank')

' renders the element
ServiceFolderBlankGroup('ServiceFolderBlankGroup', 'Service Folder Blank Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceFolderBlankGroup
include('azure-20/Item/General/ServiceFolderBlank')

' renders the element
ServiceFolderBlankGroup('ServiceFolderBlankGroup', 'Service Folder Blank Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

