# NoDrinks


```text
material/Places/NoDrinks
```

```text
include('material/Places/NoDrinks')
```



| Illustration | NoDrinks |
| :---: | :---: |
| ![illustration for Illustration](../../material/Places/NoDrinks.png) | ![illustration for NoDrinks](../../material/Places/NoDrinks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NoDrinksXs>`
- `<$NoDrinksSm>`
- `<$NoDrinksMd>`
- `<$NoDrinksLg>`





## NoDrinks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NoDrinks
include('material/Places/NoDrinks')

' renders the element
NoDrinks('NoDrinks', 'No Drinks', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element NoDrinks
include('material/Places/NoDrinks')

' renders the element
NoDrinks('NoDrinks', 'No Drinks', 'an optional tech label', 'an optional description')
@enduml
```

