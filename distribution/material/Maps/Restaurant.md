# Restaurant


```text
material/Maps/Restaurant
```

```text
include('material/Maps/Restaurant')
```



| Illustration | Restaurant |
| :---: | :---: |
| ![illustration for Illustration](../../material/Maps/Restaurant.png) | ![illustration for Restaurant](../../material/Maps/Restaurant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RestaurantXs>`
- `<$RestaurantSm>`
- `<$RestaurantMd>`
- `<$RestaurantLg>`





## Restaurant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Restaurant
include('material/Maps/Restaurant')

' renders the element
Restaurant('Restaurant', 'Restaurant', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Restaurant
include('material/Maps/Restaurant')

' renders the element
Restaurant('Restaurant', 'Restaurant', 'an optional tech label', 'an optional description')
@enduml
```

