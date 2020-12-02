# Cocktail

```text
fontawesome-5.15/Solid/Cocktail
```

```text
include('fontawesome-5.15/Solid/Cocktail')
```

|icon|element|
|---|---|
|![](Cocktail.png)|![](Cocktail.element.png)|



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
' loads the Cocktail element
include('fontawesome-5.15/Solid/Cocktail')
Cocktail('cocktail', 'Cocktail', 'an optional tech field')
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
' loads the Cocktail element
include('fontawesome-5.15/Solid/Cocktail')
Cocktail('cocktail', 'Cocktail', 'an optional tech field')
@enduml
```

