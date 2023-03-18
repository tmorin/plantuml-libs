# SecretBoundary


```text
c4k8s/Boundary/SecretBoundary
```

```text
include('c4k8s/Boundary/SecretBoundary')
```



| SecretBoundary |
| :---: |
| ![illustration for SecretBoundary](../../c4k8s/Boundary/SecretBoundary.Local.png) |




## SecretBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4k8s/bootstrap')

' loads the Item which embeds the element SecretBoundary
include('c4k8s/Boundary/SecretBoundary')

' load the c4model package
include('c4model/bootstrap')
SecretBoundary('SecretBoundary', 'Secret Boundary') {
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

' loads the Item which embeds the element SecretBoundary
include('c4k8s/Boundary/SecretBoundary')

' load the c4model package
include('c4model/bootstrap')
SecretBoundary('SecretBoundary', 'Secret Boundary') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

