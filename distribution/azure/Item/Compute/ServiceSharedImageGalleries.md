# ServiceSharedImageGalleries


```text
azure/Item/Compute/ServiceSharedImageGalleries
```

```text
include('azure/Item/Compute/ServiceSharedImageGalleries')
```



| Illustration | ServiceSharedImageGalleries | ServiceSharedImageGalleriesCard | ServiceSharedImageGalleriesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Compute/ServiceSharedImageGalleries.png) | ![illustration for ServiceSharedImageGalleries](../../../azure/Item/Compute/ServiceSharedImageGalleries.Local.png) | ![illustration for ServiceSharedImageGalleriesCard](../../../azure/Item/Compute/ServiceSharedImageGalleriesCard.Local.png) | ![illustration for ServiceSharedImageGalleriesGroup](../../../azure/Item/Compute/ServiceSharedImageGalleriesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceSharedImageGalleriesXs>`
- `<$ServiceSharedImageGalleriesSm>`
- `<$ServiceSharedImageGalleriesMd>`
- `<$ServiceSharedImageGalleriesLg>`





## ServiceSharedImageGalleries

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSharedImageGalleries
include('azure/Item/Compute/ServiceSharedImageGalleries')

' renders the element
ServiceSharedImageGalleries('ServiceSharedImageGalleries', 'Service Shared Image Galleries', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceSharedImageGalleries
include('azure/Item/Compute/ServiceSharedImageGalleries')

' renders the element
ServiceSharedImageGalleries('ServiceSharedImageGalleries', 'Service Shared Image Galleries', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceSharedImageGalleriesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSharedImageGalleriesCard
include('azure/Item/Compute/ServiceSharedImageGalleries')

' renders the element
ServiceSharedImageGalleriesCard('ServiceSharedImageGalleriesCard', 'Service Shared Image Galleries Card', 'an optional description')
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

' loads the Item which embeds the element ServiceSharedImageGalleriesCard
include('azure/Item/Compute/ServiceSharedImageGalleries')

' renders the element
ServiceSharedImageGalleriesCard('ServiceSharedImageGalleriesCard', 'Service Shared Image Galleries Card', 'an optional description')
@enduml
```

## ServiceSharedImageGalleriesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceSharedImageGalleriesGroup
include('azure/Item/Compute/ServiceSharedImageGalleries')

' renders the element
ServiceSharedImageGalleriesGroup('ServiceSharedImageGalleriesGroup', 'Service Shared Image Galleries Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceSharedImageGalleriesGroup
include('azure/Item/Compute/ServiceSharedImageGalleries')

' renders the element
ServiceSharedImageGalleriesGroup('ServiceSharedImageGalleriesGroup', 'Service Shared Image Galleries Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

