# Auth0

```text
simpleicons-4/A/Auth0
```

```text
include('simpleicons-4/A/Auth0')
```

|icon|element|
|---|---|
|![](Auth0.png)|![](Auth0.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Auth0 element
include('simpleicons-4/A/Auth0')
Auth0('auth_0', 'Auth0', 'an optional tech field')
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
' loads the simpleicons-4 bootstrap
include('simpleicons-4/bootstrap')
' loads the Auth0 element
include('simpleicons-4/A/Auth0')
Auth0('auth_0', 'Auth0', 'an optional tech field')
@enduml
```

