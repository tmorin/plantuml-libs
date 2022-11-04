# ServicePreviewFeatures


```text
azure-6/Item/General/ServicePreviewFeatures
```

```text
include('azure-6/Item/General/ServicePreviewFeatures')
```



| Illustration | ServicePreviewFeatures | ServicePreviewFeaturesCard | ServicePreviewFeaturesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/General/ServicePreviewFeatures.png) | ![illustration for ServicePreviewFeatures](../../../azure-6/Item/General/ServicePreviewFeatures.Local.png) | ![illustration for ServicePreviewFeaturesCard](../../../azure-6/Item/General/ServicePreviewFeaturesCard.Local.png) | ![illustration for ServicePreviewFeaturesGroup](../../../azure-6/Item/General/ServicePreviewFeaturesGroup.Local.png) |




## ServicePreviewFeatures

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreviewFeatures
include('azure-6/Item/General/ServicePreviewFeatures')

' renders the element
ServicePreviewFeatures('ServicePreviewFeatures', 'Service Preview Features', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServicePreviewFeatures
include('azure-6/Item/General/ServicePreviewFeatures')

' renders the element
ServicePreviewFeatures('ServicePreviewFeatures', 'Service Preview Features', 'an optional tech label', 'an optional description')
@enduml
```

## ServicePreviewFeaturesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreviewFeaturesCard
include('azure-6/Item/General/ServicePreviewFeatures')

' renders the element
ServicePreviewFeaturesCard('ServicePreviewFeaturesCard', 'Service Preview Features Card', 'an optional description')
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

' loads the Item which embeds the element ServicePreviewFeaturesCard
include('azure-6/Item/General/ServicePreviewFeatures')

' renders the element
ServicePreviewFeaturesCard('ServicePreviewFeaturesCard', 'Service Preview Features Card', 'an optional description')
@enduml
```

## ServicePreviewFeaturesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServicePreviewFeaturesGroup
include('azure-6/Item/General/ServicePreviewFeatures')

' renders the element
ServicePreviewFeaturesGroup('ServicePreviewFeaturesGroup', 'Service Preview Features Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServicePreviewFeaturesGroup
include('azure-6/Item/General/ServicePreviewFeatures')

' renders the element
ServicePreviewFeaturesGroup('ServicePreviewFeaturesGroup', 'Service Preview Features Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

