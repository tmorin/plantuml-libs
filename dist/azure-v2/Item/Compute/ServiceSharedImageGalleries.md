# Service Shared Image Galleries

```text
azure-v2/Item/Compute/ServiceSharedImageGalleries
```

```text
include('azure-v2/Item/Compute/ServiceSharedImageGalleries')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSharedImageGalleries.png)|![](ServiceSharedImageGalleries.card.png)|![](ServiceSharedImageGalleries.element.png)|![](ServiceSharedImageGalleries.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceSharedImageGalleries element
include('azure-v2/Item/Compute/ServiceSharedImageGalleries')
ServiceSharedImageGalleriesCard('service_shared_image_galleries', 'Service Shared Image Galleries', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceSharedImageGalleries element
include('azure-v2/Item/Compute/ServiceSharedImageGalleries')
ServiceSharedImageGalleriesCard('service_shared_image_galleries', 'Service Shared Image Galleries', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceSharedImageGalleries element
include('azure-v2/Item/Compute/ServiceSharedImageGalleries')
ServiceSharedImageGalleries('service_shared_image_galleries', 'Service Shared Image Galleries', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceSharedImageGalleries element
include('azure-v2/Item/Compute/ServiceSharedImageGalleries')
ServiceSharedImageGalleries('service_shared_image_galleries', 'Service Shared Image Galleries', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceSharedImageGalleries element
include('azure-v2/Item/Compute/ServiceSharedImageGalleries')
ServiceSharedImageGalleriesGroup('service_shared_image_galleries', 'Service Shared Image Galleries', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceSharedImageGalleries element
include('azure-v2/Item/Compute/ServiceSharedImageGalleries')
ServiceSharedImageGalleriesGroup('service_shared_image_galleries', 'Service Shared Image Galleries', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

