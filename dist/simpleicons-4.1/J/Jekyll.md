# Jekyll

```text
simpleicons-4.1/J/Jekyll
```

```text
include('simpleicons-4.1/J/Jekyll')
```

|icon|element|
|---|---|
|![](Jekyll.png)|![](Jekyll.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Jekyll element
include('simpleicons-4.1/J/Jekyll')
Jekyll('jekyll', 'Jekyll', 'an optional tech field')
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
' loads the simpleicons-4.1 bootstrap
include('simpleicons-4.1/bootstrap')
' loads the Jekyll element
include('simpleicons-4.1/J/Jekyll')
Jekyll('jekyll', 'Jekyll', 'an optional tech field')
@enduml
```

