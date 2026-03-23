# ServiceFeaturePreviews


```text
azure/Item/General/ServiceFeaturePreviews
```

```text
include('azure/Item/General/ServiceFeaturePreviews')
```



| Illustration | ServiceFeaturePreviews | ServiceFeaturePreviewsCard | ServiceFeaturePreviewsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/General/ServiceFeaturePreviews.png) | ![illustration for ServiceFeaturePreviews](../../../azure/Item/General/ServiceFeaturePreviews.Local.png) | ![illustration for ServiceFeaturePreviewsCard](../../../azure/Item/General/ServiceFeaturePreviewsCard.Local.png) | ![illustration for ServiceFeaturePreviewsGroup](../../../azure/Item/General/ServiceFeaturePreviewsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceFeaturePreviewsXs>`
- `<$ServiceFeaturePreviewsSm>`
- `<$ServiceFeaturePreviewsMd>`
- `<$ServiceFeaturePreviewsLg>`





## ServiceFeaturePreviews

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFeaturePreviews
include('azure/Item/General/ServiceFeaturePreviews')

' renders the element
ServiceFeaturePreviews('ServiceFeaturePreviews', 'Service Feature Previews', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceFeaturePreviews
include('azure/Item/General/ServiceFeaturePreviews')

' renders the element
ServiceFeaturePreviews('ServiceFeaturePreviews', 'Service Feature Previews', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceFeaturePreviewsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFeaturePreviewsCard
include('azure/Item/General/ServiceFeaturePreviews')

' renders the element
ServiceFeaturePreviewsCard('ServiceFeaturePreviewsCard', 'Service Feature Previews Card', 'an optional description')
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

' loads the Item which embeds the element ServiceFeaturePreviewsCard
include('azure/Item/General/ServiceFeaturePreviews')

' renders the element
ServiceFeaturePreviewsCard('ServiceFeaturePreviewsCard', 'Service Feature Previews Card', 'an optional description')
@enduml
```

## ServiceFeaturePreviewsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceFeaturePreviewsGroup
include('azure/Item/General/ServiceFeaturePreviews')

' renders the element
ServiceFeaturePreviewsGroup('ServiceFeaturePreviewsGroup', 'Service Feature Previews Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceFeaturePreviewsGroup
include('azure/Item/General/ServiceFeaturePreviews')

' renders the element
ServiceFeaturePreviewsGroup('ServiceFeaturePreviewsGroup', 'Service Feature Previews Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

