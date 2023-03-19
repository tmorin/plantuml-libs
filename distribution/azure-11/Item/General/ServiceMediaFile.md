# ServiceMediaFile


```text
azure-11/Item/General/ServiceMediaFile
```

```text
include('azure-11/Item/General/ServiceMediaFile')
```



| Illustration | ServiceMediaFile | ServiceMediaFileCard | ServiceMediaFileGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/General/ServiceMediaFile.png) | ![illustration for ServiceMediaFile](../../../azure-11/Item/General/ServiceMediaFile.Local.png) | ![illustration for ServiceMediaFileCard](../../../azure-11/Item/General/ServiceMediaFileCard.Local.png) | ![illustration for ServiceMediaFileGroup](../../../azure-11/Item/General/ServiceMediaFileGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMediaFileXs>`
- `<$ServiceMediaFileSm>`
- `<$ServiceMediaFileMd>`
- `<$ServiceMediaFileLg>`





## ServiceMediaFile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceMediaFile
include('azure-11/Item/General/ServiceMediaFile')

' renders the element
ServiceMediaFile('ServiceMediaFile', 'Service Media File', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMediaFile
include('azure-11/Item/General/ServiceMediaFile')

' renders the element
ServiceMediaFile('ServiceMediaFile', 'Service Media File', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMediaFileCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceMediaFileCard
include('azure-11/Item/General/ServiceMediaFile')

' renders the element
ServiceMediaFileCard('ServiceMediaFileCard', 'Service Media File Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMediaFileCard
include('azure-11/Item/General/ServiceMediaFile')

' renders the element
ServiceMediaFileCard('ServiceMediaFileCard', 'Service Media File Card', 'an optional description')
@enduml
```

## ServiceMediaFileGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceMediaFileGroup
include('azure-11/Item/General/ServiceMediaFile')

' renders the element
ServiceMediaFileGroup('ServiceMediaFileGroup', 'Service Media File Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMediaFileGroup
include('azure-11/Item/General/ServiceMediaFile')

' renders the element
ServiceMediaFileGroup('ServiceMediaFileGroup', 'Service Media File Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

