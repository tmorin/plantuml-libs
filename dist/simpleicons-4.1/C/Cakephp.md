# Cakephp

```text
simpleicons-4.1/C/Cakephp
```

```text
include('simpleicons-4.1/C/Cakephp')
```

|icon|element|
|---|---|
|![](Cakephp.png)|![](Cakephp.element.png)|



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
' loads the Cakephp element
include('simpleicons-4.1/C/Cakephp')
Cakephp('cakephp', 'Cakephp', 'an optional tech field')
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
' loads the Cakephp element
include('simpleicons-4.1/C/Cakephp')
Cakephp('cakephp', 'Cakephp', 'an optional tech field')
@enduml
```

