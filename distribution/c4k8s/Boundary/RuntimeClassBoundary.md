# RuntimeClassBoundary


```text
c4k8s/Boundary/RuntimeClassBoundary
```

```text
include('c4k8s/Boundary/RuntimeClassBoundary')
```



| RuntimeClassBoundary |
| :---: |
| ![illustration for RuntimeClassBoundary](../../c4k8s/Boundary/RuntimeClassBoundary.Local.png) |




## RuntimeClassBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element RuntimeClassBoundary
include('c4k8s/Boundary/RuntimeClassBoundary')

' load the c4model package
include('c4model/bootstrap')
RuntimeClassBoundary('RuntimeClassBoundary', 'Runtime Class Boundary') {
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

' loads the Item which embeds the element RuntimeClassBoundary
include('c4k8s/Boundary/RuntimeClassBoundary')

' load the c4model package
include('c4model/bootstrap')
RuntimeClassBoundary('RuntimeClassBoundary', 'Runtime Class Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

