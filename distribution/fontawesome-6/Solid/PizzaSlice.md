# PizzaSlice


```text
fontawesome-6/Solid/PizzaSlice
```

```text
include('fontawesome-6/Solid/PizzaSlice')
```



| Illustration | PizzaSlice |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PizzaSlice.png) | ![illustration for PizzaSlice](../../fontawesome-6/Solid/PizzaSlice.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PizzaSlice
include('fontawesome-6/Solid/PizzaSlice')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PizzaSlice
include('fontawesome-6/Solid/PizzaSlice')

' renders the element
PizzaSlice('PizzaSlice', 'Pizza Slice', 'an optional tech label', 'an optional description')
@enduml
```

