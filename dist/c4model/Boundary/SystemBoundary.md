# System

```text
c4model/Boundary/SystemBoundary
```

```text
include('c4model/Boundary/SystemBoundary')
```

|element|
|---|
|![](SystemBoundary.element.local.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the c4model bootstrap
include('c4model/bootstrap')
' loads the SystemBoundary element
include('c4model/Boundary/SystemBoundary')
SystemBoundary('system_boundary', 'System', 'an optional tech field') {
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the c4model bootstrap
include('c4model/bootstrap')
' loads the SystemBoundary element
include('c4model/Boundary/SystemBoundary')
SystemBoundary('system_boundary', 'System', 'an optional tech field') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

