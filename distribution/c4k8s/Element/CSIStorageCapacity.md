# CSIStorageCapacity


```text
c4k8s/Element/CSIStorageCapacity
```

```text
include('c4k8s/Element/CSIStorageCapacity')
```



| CSIStorageCapacity |
| :---: |
| ![illustration for CSIStorageCapacity](../../c4k8s/Element/CSIStorageCapacity.Local.png) |




## CSIStorageCapacity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element CSIStorageCapacity
include('c4k8s/Element/CSIStorageCapacity')

' load the c4model package
include('c4model/bootstrap')
CSIStorageCapacity('CsiStorageCapacity', 'Csi Storage Capacity', 'an optional description label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element CSIStorageCapacity
include('c4k8s/Element/CSIStorageCapacity')

' load the c4model package
include('c4model/bootstrap')
CSIStorageCapacity('CsiStorageCapacity', 'Csi Storage Capacity', 'an optional description label')
@enduml
```

