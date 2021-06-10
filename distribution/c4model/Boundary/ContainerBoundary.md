# ContainerBoundary


```text
c4model/Boundary/ContainerBoundary
```

```text
include('c4model/Boundary/ContainerBoundary')
```



| ContainerBoundary |
| :---: |
| ![illustration for ContainerBoundary](../../c4model/Boundary/ContainerBoundary.Local.png) |




## ContainerBoundary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4model/bootstrap')

' loads the Item which embeds the element ContainerBoundary
include('c4model/Boundary/ContainerBoundary')

ContainerBoundary('ContainerBoundary', 'Container Boundary', 'an optional tech label') {
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
include('c4model/bootstrap')

' loads the Item which embeds the element ContainerBoundary
include('c4model/Boundary/ContainerBoundary')

ContainerBoundary('ContainerBoundary', 'Container Boundary', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

