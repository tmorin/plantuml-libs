# A1 Password

```text
simpleicons-4/A/A1Password
```

```text
include('simpleicons-4/A/A1Password')
```

|icon|element|
|---|---|
|![](A1Password.png)|![](A1Password.element.png)|



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
' loads the A1Password element
include('simpleicons-4/A/A1Password')
A1Password('a_1_password', 'A1 Password', 'an optional tech field')
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
' loads the A1Password element
include('simpleicons-4/A/A1Password')
A1Password('a_1_password', 'A1 Password', 'an optional tech field')
@enduml
```

