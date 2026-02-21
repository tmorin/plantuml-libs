# PizzaSlice


```text
fontawesome/Solid/PizzaSlice
```

```text
include('fontawesome/Solid/PizzaSlice')
```



| Illustration | PizzaSlice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/PizzaSlice.png) | ![illustration for PizzaSlice](../../fontawesome/Solid/PizzaSlice.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PizzaSliceXs>`
- `<$PizzaSliceSm>`
- `<$PizzaSliceMd>`
- `<$PizzaSliceLg>`





## PizzaSlice

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element PizzaSlice
include('fontawesome/Solid/PizzaSlice')

' renders the element
PizzaSlice('PizzaSlice', 'Pizza Slice', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element PizzaSlice
include('fontawesome/Solid/PizzaSlice')

' renders the element
PizzaSlice('PizzaSlice', 'Pizza Slice', 'an optional tech label', 'an optional description')
@enduml
```

