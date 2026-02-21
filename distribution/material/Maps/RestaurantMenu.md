# RestaurantMenu


```text
material/Maps/RestaurantMenu
```

```text
include('material/Maps/RestaurantMenu')
```



| Illustration | RestaurantMenu |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/RestaurantMenu.png) | ![illustration for RestaurantMenu](../../material/Maps/RestaurantMenu.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RestaurantMenuXs>`
- `<$RestaurantMenuSm>`
- `<$RestaurantMenuMd>`
- `<$RestaurantMenuLg>`





## RestaurantMenu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element RestaurantMenu
include('material/Maps/RestaurantMenu')

' renders the element
RestaurantMenu('RestaurantMenu', 'Restaurant Menu', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RestaurantMenu
include('material/Maps/RestaurantMenu')

' renders the element
RestaurantMenu('RestaurantMenu', 'Restaurant Menu', 'an optional tech label', 'an optional description')
@enduml
```

