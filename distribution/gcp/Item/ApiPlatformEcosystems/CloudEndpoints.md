# CloudEndpoints


```text
gcp/Item/ApiPlatformEcosystems/CloudEndpoints
```

```text
include('gcp/Item/ApiPlatformEcosystems/CloudEndpoints')
```



| Illustration | CloudEndpoints | CloudEndpointsCard | CloudEndpointsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/ApiPlatformEcosystems/CloudEndpoints.png) | ![illustration for CloudEndpoints](../../../gcp/Item/ApiPlatformEcosystems/CloudEndpoints.Local.png) | ![illustration for CloudEndpointsCard](../../../gcp/Item/ApiPlatformEcosystems/CloudEndpointsCard.Local.png) | ![illustration for CloudEndpointsGroup](../../../gcp/Item/ApiPlatformEcosystems/CloudEndpointsGroup.Local.png) |




## CloudEndpoints

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudEndpoints
include('gcp/Item/ApiPlatformEcosystems/CloudEndpoints')

' renders the element
CloudEndpoints('CloudEndpoints', 'Cloud Endpoints', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudEndpoints
include('gcp/Item/ApiPlatformEcosystems/CloudEndpoints')

' renders the element
CloudEndpoints('CloudEndpoints', 'Cloud Endpoints', 'an optional tech label')
@enduml
```

## CloudEndpointsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudEndpointsCard
include('gcp/Item/ApiPlatformEcosystems/CloudEndpoints')

' renders the element
CloudEndpointsCard('CloudEndpointsCard', 'Cloud Endpoints Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudEndpointsCard
include('gcp/Item/ApiPlatformEcosystems/CloudEndpoints')

' renders the element
CloudEndpointsCard('CloudEndpointsCard', 'Cloud Endpoints Card', 'an optional description')
@enduml
```

## CloudEndpointsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudEndpointsGroup
include('gcp/Item/ApiPlatformEcosystems/CloudEndpoints')

' renders the element
CloudEndpointsGroup('CloudEndpointsGroup', 'Cloud Endpoints Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudEndpointsGroup
include('gcp/Item/ApiPlatformEcosystems/CloudEndpoints')

' renders the element
CloudEndpointsGroup('CloudEndpointsGroup', 'Cloud Endpoints Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

