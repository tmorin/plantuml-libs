# Moscowmetro

```text
simpleicons-4.1/M/Moscowmetro
```

```text
include('simpleicons-4.1/M/Moscowmetro')
```

|icon|element|
|---|---|
|![](Moscowmetro.png)|![](Moscowmetro.element.png)|



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
' loads the Moscowmetro element
include('simpleicons-4.1/M/Moscowmetro')
Moscowmetro('moscowmetro', 'Moscowmetro', 'an optional tech field')
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
' loads the Moscowmetro element
include('simpleicons-4.1/M/Moscowmetro')
Moscowmetro('moscowmetro', 'Moscowmetro', 'an optional tech field')
@enduml
```

