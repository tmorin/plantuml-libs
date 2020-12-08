# Retroarch

```text
simpleicons-4.1/R/Retroarch
```

```text
include('simpleicons-4.1/R/Retroarch')
```

|icon|element|
|---|---|
|![](Retroarch.png)|![](Retroarch.element.png)|



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
' loads the Retroarch element
include('simpleicons-4.1/R/Retroarch')
Retroarch('retroarch', 'Retroarch', 'an optional tech field')
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
' loads the Retroarch element
include('simpleicons-4.1/R/Retroarch')
Retroarch('retroarch', 'Retroarch', 'an optional tech field')
@enduml
```

