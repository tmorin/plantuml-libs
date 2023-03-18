# ResourceClassBoundary


```text
c4k8s/Boundary/ResourceClassBoundary
```

```text
include('c4k8s/Boundary/ResourceClassBoundary')
```



| ResourceClassBoundary |
| :---: |
| ![illustration for ResourceClassBoundary](../../c4k8s/Boundary/ResourceClassBoundary.Local.png) |




## ResourceClassBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element ResourceClassBoundary
include('c4k8s/Boundary/ResourceClassBoundary')

' load the c4model package
include('c4model/bootstrap')
ResourceClassBoundary('ResourceClassBoundary', 'Resource Class Boundary') {
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

' loads the Item which embeds the element ResourceClassBoundary
include('c4k8s/Boundary/ResourceClassBoundary')

' load the c4model package
include('c4model/bootstrap')
ResourceClassBoundary('ResourceClassBoundary', 'Resource Class Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

