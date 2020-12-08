# Ember Dot Js

```text
simpleicons-4.1/E/EmberDotJs
```

```text
include('simpleicons-4.1/E/EmberDotJs')
```

|icon|element|
|---|---|
|![](EmberDotJs.png)|![](EmberDotJs.element.png)|



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
' loads the EmberDotJs element
include('simpleicons-4.1/E/EmberDotJs')
EmberDotJs('ember_dot_js', 'Ember Dot Js', 'an optional tech field')
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
' loads the EmberDotJs element
include('simpleicons-4.1/E/EmberDotJs')
EmberDotJs('ember_dot_js', 'Ember Dot Js', 'an optional tech field')
@enduml
```

