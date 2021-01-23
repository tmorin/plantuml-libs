# Coffeescript

```text
simpleicons-4/C/Coffeescript
```

```text
include('simpleicons-4/C/Coffeescript')
```

|icon|element|
|---|---|
|![](Coffeescript.png)|![](Coffeescript.element.png)|



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
' loads the Coffeescript element
include('simpleicons-4/C/Coffeescript')
Coffeescript('coffeescript', 'Coffeescript', 'an optional tech field')
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
' loads the Coffeescript element
include('simpleicons-4/C/Coffeescript')
Coffeescript('coffeescript', 'Coffeescript', 'an optional tech field')
@enduml
```

