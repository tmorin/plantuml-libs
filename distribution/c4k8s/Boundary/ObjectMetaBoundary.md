# ObjectMetaBoundary


```text
c4k8s/Boundary/ObjectMetaBoundary
```

```text
include('c4k8s/Boundary/ObjectMetaBoundary')
```



| ObjectMetaBoundary |
| :---: |
| ![illustration for ObjectMetaBoundary](../../c4k8s/Boundary/ObjectMetaBoundary.Local.png) |




## ObjectMetaBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element ObjectMetaBoundary
include('c4k8s/Boundary/ObjectMetaBoundary')

' load the c4model package
include('c4model/bootstrap')
ObjectMetaBoundary('ObjectMetaBoundary', 'Object Meta Boundary') {
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

' loads the Item which embeds the element ObjectMetaBoundary
include('c4k8s/Boundary/ObjectMetaBoundary')

' load the c4model package
include('c4model/bootstrap')
ObjectMetaBoundary('ObjectMetaBoundary', 'Object Meta Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

