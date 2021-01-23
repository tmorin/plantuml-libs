# Prettier

```text
simpleicons-4/P/Prettier
```

```text
include('simpleicons-4/P/Prettier')
```

|icon|element|
|---|---|
|![](Prettier.png)|![](Prettier.element.png)|



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
' loads the Prettier element
include('simpleicons-4/P/Prettier')
Prettier('prettier', 'Prettier', 'an optional tech field')
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
' loads the Prettier element
include('simpleicons-4/P/Prettier')
Prettier('prettier', 'Prettier', 'an optional tech field')
@enduml
```

