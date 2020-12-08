# Html5

```text
simpleicons-4.1/H/Html5
```

```text
include('simpleicons-4.1/H/Html5')
```

|icon|element|
|---|---|
|![](Html5.png)|![](Html5.element.png)|



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
' loads the Html5 element
include('simpleicons-4.1/H/Html5')
Html5('html_5', 'Html5', 'an optional tech field')
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
' loads the Html5 element
include('simpleicons-4.1/H/Html5')
Html5('html_5', 'Html5', 'an optional tech field')
@enduml
```

