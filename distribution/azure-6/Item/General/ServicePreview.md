# ServicePreview


```text
azure-6/Item/General/ServicePreview
```

```text
include('azure-6/Item/General/ServicePreview')
```



| Illustration | ServicePreview | ServicePreviewCard | ServicePreviewGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/General/ServicePreview.png) | ![illustration for ServicePreview](../../../azure-6/Item/General/ServicePreview.Local.png) | ![illustration for ServicePreviewCard](../../../azure-6/Item/General/ServicePreviewCard.Local.png) | ![illustration for ServicePreviewGroup](../../../azure-6/Item/General/ServicePreviewGroup.Local.png) |




## ServicePreview

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreview
include('azure-6/Item/General/ServicePreview')

' renders the element
ServicePreview('ServicePreview', 'Service Preview', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreview
include('azure-6/Item/General/ServicePreview')

' renders the element
ServicePreview('ServicePreview', 'Service Preview', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePreviewCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreviewCard
include('azure-6/Item/General/ServicePreview')

' renders the element
ServicePreviewCard('ServicePreviewCard', 'Service Preview Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreviewCard
include('azure-6/Item/General/ServicePreview')

' renders the element
ServicePreviewCard('ServicePreviewCard', 'Service Preview Card', 'an optional description')
@enduml
```

## ServicePreviewGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreviewGroup
include('azure-6/Item/General/ServicePreview')

' renders the element
ServicePreviewGroup('ServicePreviewGroup', 'Service Preview Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreviewGroup
include('azure-6/Item/General/ServicePreview')

' renders the element
ServicePreviewGroup('ServicePreviewGroup', 'Service Preview Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

