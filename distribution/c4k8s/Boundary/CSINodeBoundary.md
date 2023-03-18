# CSINodeBoundary


```text
c4k8s/Boundary/CSINodeBoundary
```

```text
include('c4k8s/Boundary/CSINodeBoundary')
```



| CSINodeBoundary |
| :---: |
| ![illustration for CSINodeBoundary](../../c4k8s/Boundary/CSINodeBoundary.Local.png) |




## CSINodeBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element CSINodeBoundary
include('c4k8s/Boundary/CSINodeBoundary')

' load the c4model package
include('c4model/bootstrap')
CSINodeBoundary('CsiNodeBoundary', 'Csi Node Boundary') {
  note as note
  the content of the boundary
  end note
}
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

' loads the Item which embeds the element CSINodeBoundary
include('c4k8s/Boundary/CSINodeBoundary')

' load the c4model package
include('c4model/bootstrap')
CSINodeBoundary('CsiNodeBoundary', 'Csi Node Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

