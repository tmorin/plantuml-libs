# Webcomponents Dot Org

```text
simpleicons-4.1/W/WebcomponentsDotOrg
```

```text
include('simpleicons-4.1/W/WebcomponentsDotOrg')
```

|icon|element|
|---|---|
|![](WebcomponentsDotOrg.png)|![](WebcomponentsDotOrg.element.png)|



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
' loads the WebcomponentsDotOrg element
include('simpleicons-4.1/W/WebcomponentsDotOrg')
WebcomponentsDotOrg('webcomponents_dot_org', 'Webcomponents Dot Org', 'an optional tech field')
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
' loads the WebcomponentsDotOrg element
include('simpleicons-4.1/W/WebcomponentsDotOrg')
WebcomponentsDotOrg('webcomponents_dot_org', 'Webcomponents Dot Org', 'an optional tech field')
@enduml
```

