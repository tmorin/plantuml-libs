# PizzaSlice


```text
fontawesome-5/Solid/PizzaSlice
```

```text
include('fontawesome-5/Solid/PizzaSlice')
```



| Illustration | PizzaSlice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PizzaSlice.png) | ![illustration for PizzaSlice](../../fontawesome-5/Solid/PizzaSlice.Local.png) |




## PizzaSlice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PizzaSlice
include('fontawesome-5/Solid/PizzaSlice')

' renders the element
PizzaSlice('PizzaSlice', 'Pizza Slice', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PizzaSlice
include('fontawesome-5/Solid/PizzaSlice')

' renders the element
PizzaSlice('PizzaSlice', 'Pizza Slice', 'an optional tech label')
@enduml
```

