# LeaseBoundary


```text
c4k8s/Boundary/LeaseBoundary
```

```text
include('c4k8s/Boundary/LeaseBoundary')
```



| LeaseBoundary |
| :---: |
| ![illustration for LeaseBoundary](../../c4k8s/Boundary/LeaseBoundary.Local.png) |




## LeaseBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element LeaseBoundary
include('c4k8s/Boundary/LeaseBoundary')

' load the c4model package
include('c4model/bootstrap')
LeaseBoundary('LeaseBoundary', 'Lease Boundary') {
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

' loads the Item which embeds the element LeaseBoundary
include('c4k8s/Boundary/LeaseBoundary')

' load the c4model package
include('c4model/bootstrap')
LeaseBoundary('LeaseBoundary', 'Lease Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

