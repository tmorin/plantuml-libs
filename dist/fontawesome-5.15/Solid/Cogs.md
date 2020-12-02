# Cogs

```text
fontawesome-5.15/Solid/Cogs
```

```text
include('fontawesome-5.15/Solid/Cogs')
```

|icon|element|
|---|---|
|![](Cogs.png)|![](Cogs.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the Cogs element
include('fontawesome-5.15/Solid/Cogs')
Cogs('cogs', 'Cogs', 'an optional tech field')
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
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the Cogs element
include('fontawesome-5.15/Solid/Cogs')
Cogs('cogs', 'Cogs', 'an optional tech field')
@enduml
```

