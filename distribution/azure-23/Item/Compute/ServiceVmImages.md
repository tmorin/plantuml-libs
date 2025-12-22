# ServiceVmImages


```text
azure-23/Item/Compute/ServiceVmImages
```

```text
include('azure-23/Item/Compute/ServiceVmImages')
```



| Illustration | ServiceVmImages | ServiceVmImagesCard | ServiceVmImagesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-23/Item/Compute/ServiceVmImages.png) | ![illustration for ServiceVmImages](../../../azure-23/Item/Compute/ServiceVmImages.Local.png) | ![illustration for ServiceVmImagesCard](../../../azure-23/Item/Compute/ServiceVmImagesCard.Local.png) | ![illustration for ServiceVmImagesGroup](../../../azure-23/Item/Compute/ServiceVmImagesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceVmImagesXs>`
- `<$ServiceVmImagesSm>`
- `<$ServiceVmImagesMd>`
- `<$ServiceVmImagesLg>`





## ServiceVmImages

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceVmImages
include('azure-23/Item/Compute/ServiceVmImages')

' renders the element
ServiceVmImages('ServiceVmImages', 'Service Vm Images', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceVmImages
include('azure-23/Item/Compute/ServiceVmImages')

' renders the element
ServiceVmImages('ServiceVmImages', 'Service Vm Images', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceVmImagesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceVmImagesCard
include('azure-23/Item/Compute/ServiceVmImages')

' renders the element
ServiceVmImagesCard('ServiceVmImagesCard', 'Service Vm Images Card', 'an optional description')
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

' loads the Item which embeds the element ServiceVmImagesCard
include('azure-23/Item/Compute/ServiceVmImages')

' renders the element
ServiceVmImagesCard('ServiceVmImagesCard', 'Service Vm Images Card', 'an optional description')
@enduml
```

## ServiceVmImagesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceVmImagesGroup
include('azure-23/Item/Compute/ServiceVmImages')

' renders the element
ServiceVmImagesGroup('ServiceVmImagesGroup', 'Service Vm Images Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceVmImagesGroup
include('azure-23/Item/Compute/ServiceVmImages')

' renders the element
ServiceVmImagesGroup('ServiceVmImagesGroup', 'Service Vm Images Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

