# Litecoin

```text
simpleicons-4.1/L/Litecoin
```

```text
include('simpleicons-4.1/L/Litecoin')
```

|icon|element|
|---|---|
|![](Litecoin.png)|![](Litecoin.element.png)|



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
' loads the Litecoin element
include('simpleicons-4.1/L/Litecoin')
Litecoin('litecoin', 'Litecoin', 'an optional tech field')
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
' loads the Litecoin element
include('simpleicons-4.1/L/Litecoin')
Litecoin('litecoin', 'Litecoin', 'an optional tech field')
@enduml
```

