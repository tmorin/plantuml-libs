# LocalDrink


```text
material/Maps/LocalDrink
```

```text
include('material/Maps/LocalDrink')
```



| Illustration | LocalDrink |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/LocalDrink.png) | ![illustration for LocalDrink](../../material/Maps/LocalDrink.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LocalDrinkXs>`
- `<$LocalDrinkSm>`
- `<$LocalDrinkMd>`
- `<$LocalDrinkLg>`





## LocalDrink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LocalDrink
include('material/Maps/LocalDrink')

' renders the element
LocalDrink('LocalDrink', 'Local Drink', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LocalDrink
include('material/Maps/LocalDrink')

' renders the element
LocalDrink('LocalDrink', 'Local Drink', 'an optional tech label', 'an optional description')
@enduml
```

