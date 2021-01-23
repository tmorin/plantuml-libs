# Mastercomfig

```text
simpleicons-4/M/Mastercomfig
```

```text
include('simpleicons-4/M/Mastercomfig')
```

|icon|element|
|---|---|
|![](Mastercomfig.png)|![](Mastercomfig.element.png)|



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
' loads the Mastercomfig element
include('simpleicons-4/M/Mastercomfig')
Mastercomfig('mastercomfig', 'Mastercomfig', 'an optional tech field')
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
' loads the Mastercomfig element
include('simpleicons-4/M/Mastercomfig')
Mastercomfig('mastercomfig', 'Mastercomfig', 'an optional tech field')
@enduml
```

