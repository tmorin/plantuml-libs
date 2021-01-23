# Virtual Private Cloud

```text
gcp/Item/Networking/VirtualPrivateCloud
```

```text
include('gcp/Item/Networking/VirtualPrivateCloud')
```

|icon|card|element|group|
|---|---|---|---|
|![](VirtualPrivateCloud.png)|![](VirtualPrivateCloud.card.png)|![](VirtualPrivateCloud.element.png)|![](VirtualPrivateCloud.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the VirtualPrivateCloud element
include('gcp/Item/Networking/VirtualPrivateCloud')
VirtualPrivateCloudCard('virtual_private_cloud', 'Virtual Private Cloud', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the VirtualPrivateCloud element
include('gcp/Item/Networking/VirtualPrivateCloud')
VirtualPrivateCloudCard('virtual_private_cloud', 'Virtual Private Cloud', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the VirtualPrivateCloud element
include('gcp/Item/Networking/VirtualPrivateCloud')
VirtualPrivateCloud('virtual_private_cloud', 'Virtual Private Cloud', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the VirtualPrivateCloud element
include('gcp/Item/Networking/VirtualPrivateCloud')
VirtualPrivateCloud('virtual_private_cloud', 'Virtual Private Cloud', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the VirtualPrivateCloud element
include('gcp/Item/Networking/VirtualPrivateCloud')
VirtualPrivateCloudGroup('virtual_private_cloud', 'Virtual Private Cloud', 'an optional tech field'){
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the VirtualPrivateCloud element
include('gcp/Item/Networking/VirtualPrivateCloud')
VirtualPrivateCloudGroup('virtual_private_cloud', 'Virtual Private Cloud', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

