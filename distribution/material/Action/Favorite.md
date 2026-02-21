# Favorite


```text
material/Action/Favorite
```

```text
include('material/Action/Favorite')
```



| Illustration | Favorite |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Favorite.png) | ![illustration for Favorite](../../material/Action/Favorite.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FavoriteXs>`
- `<$FavoriteSm>`
- `<$FavoriteMd>`
- `<$FavoriteLg>`





## Favorite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Favorite
include('material/Action/Favorite')

' renders the element
Favorite('Favorite', 'Favorite', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Favorite
include('material/Action/Favorite')

' renders the element
Favorite('Favorite', 'Favorite', 'an optional tech label', 'an optional description')
@enduml
```

