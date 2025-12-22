# ServiceAzureLocal


```text
azure-23/Item/NewIcons/ServiceAzureLocal
```

```text
include('azure-23/Item/NewIcons/ServiceAzureLocal')
```



| Illustration | ServiceAzureLocal | ServiceAzureLocalCard | ServiceAzureLocalGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-23/Item/NewIcons/ServiceAzureLocal.png) | ![illustration for ServiceAzureLocal](../../../azure-23/Item/NewIcons/ServiceAzureLocal.Local.png) | ![illustration for ServiceAzureLocalCard](../../../azure-23/Item/NewIcons/ServiceAzureLocalCard.Local.png) | ![illustration for ServiceAzureLocalGroup](../../../azure-23/Item/NewIcons/ServiceAzureLocalGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureLocalXs>`
- `<$ServiceAzureLocalSm>`
- `<$ServiceAzureLocalMd>`
- `<$ServiceAzureLocalLg>`





## ServiceAzureLocal

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceAzureLocal
include('azure-23/Item/NewIcons/ServiceAzureLocal')

' renders the element
ServiceAzureLocal('ServiceAzureLocal', 'Service Azure Local', 'an optional tech label', 'an optional description')
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceAzureLocal
include('azure-23/Item/NewIcons/ServiceAzureLocal')

' renders the element
ServiceAzureLocal('ServiceAzureLocal', 'Service Azure Local', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureLocalCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceAzureLocalCard
include('azure-23/Item/NewIcons/ServiceAzureLocal')

' renders the element
ServiceAzureLocalCard('ServiceAzureLocalCard', 'Service Azure Local Card', 'an optional description')
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceAzureLocalCard
include('azure-23/Item/NewIcons/ServiceAzureLocal')

' renders the element
ServiceAzureLocalCard('ServiceAzureLocalCard', 'Service Azure Local Card', 'an optional description')
@enduml
```

## ServiceAzureLocalGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceAzureLocalGroup
include('azure-23/Item/NewIcons/ServiceAzureLocal')

' renders the element
ServiceAzureLocalGroup('ServiceAzureLocalGroup', 'Service Azure Local Group', 'an optional tech label') {
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceAzureLocalGroup
include('azure-23/Item/NewIcons/ServiceAzureLocal')

' renders the element
ServiceAzureLocalGroup('ServiceAzureLocalGroup', 'Service Azure Local Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

