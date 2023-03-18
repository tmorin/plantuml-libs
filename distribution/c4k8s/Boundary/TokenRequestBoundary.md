# TokenRequestBoundary


```text
c4k8s/Boundary/TokenRequestBoundary
```

```text
include('c4k8s/Boundary/TokenRequestBoundary')
```



| TokenRequestBoundary |
| :---: |
| ![illustration for TokenRequestBoundary](../../c4k8s/Boundary/TokenRequestBoundary.Local.png) |




## TokenRequestBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element TokenRequestBoundary
include('c4k8s/Boundary/TokenRequestBoundary')

' load the c4model package
include('c4model/bootstrap')
TokenRequestBoundary('TokenRequestBoundary', 'Token Request Boundary') {
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

' loads the Item which embeds the element TokenRequestBoundary
include('c4k8s/Boundary/TokenRequestBoundary')

' load the c4model package
include('c4model/bootstrap')
TokenRequestBoundary('TokenRequestBoundary', 'Token Request Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

