# Wizards Of The Coast

```text
fontawesome-5.15/Brands/WizardsOfTheCoast
```

```text
include('fontawesome-5.15/Brands/WizardsOfTheCoast')
```

|icon|element|
|---|---|
|![](WizardsOfTheCoast.png)|![](WizardsOfTheCoast.element.png)|



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
' loads the WizardsOfTheCoast element
include('fontawesome-5.15/Brands/WizardsOfTheCoast')
WizardsOfTheCoast('wizards_of_the_coast', 'Wizards Of The Coast', 'an optional tech field')
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
' loads the WizardsOfTheCoast element
include('fontawesome-5.15/Brands/WizardsOfTheCoast')
WizardsOfTheCoast('wizards_of_the_coast', 'Wizards Of The Coast', 'an optional tech field')
@enduml
```

