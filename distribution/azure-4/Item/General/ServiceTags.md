# ServiceTags


```text
azure-4/Item/General/ServiceTags
```

```text
include('azure-4/Item/General/ServiceTags')
```



| Illustration | ServiceTags | ServiceTagsCard | ServiceTagsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceTags.png) | ![illustration for ServiceTags](../../../azure-4/Item/General/ServiceTags.Local.png) | ![illustration for ServiceTagsCard](../../../azure-4/Item/General/ServiceTagsCard.Local.png) | ![illustration for ServiceTagsGroup](../../../azure-4/Item/General/ServiceTagsGroup.Local.png) |




## ServiceTags

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTags
include('azure-4/Item/General/ServiceTags')

' renders the element
ServiceTags('ServiceTags', 'Service Tags', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceTags
include('azure-4/Item/General/ServiceTags')

' renders the element
ServiceTags('ServiceTags', 'Service Tags', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceTagsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTagsCard
include('azure-4/Item/General/ServiceTags')

' renders the element
ServiceTagsCard('ServiceTagsCard', 'Service Tags Card', 'an optional description')
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

' loads the Item which embeds the element ServiceTagsCard
include('azure-4/Item/General/ServiceTags')

' renders the element
ServiceTagsCard('ServiceTagsCard', 'Service Tags Card', 'an optional description')
@enduml
```

## ServiceTagsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceTagsGroup
include('azure-4/Item/General/ServiceTags')

' renders the element
ServiceTagsGroup('ServiceTagsGroup', 'Service Tags Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceTagsGroup
include('azure-4/Item/General/ServiceTags')

' renders the element
ServiceTagsGroup('ServiceTagsGroup', 'Service Tags Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

