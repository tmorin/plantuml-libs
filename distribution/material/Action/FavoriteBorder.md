# FavoriteBorder


```text
material/Action/FavoriteBorder
```

```text
include('material/Action/FavoriteBorder')
```



| Illustration | FavoriteBorder |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/FavoriteBorder.png) | ![illustration for FavoriteBorder](../../material/Action/FavoriteBorder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FavoriteBorderXs>`
- `<$FavoriteBorderSm>`
- `<$FavoriteBorderMd>`
- `<$FavoriteBorderLg>`





## FavoriteBorder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FavoriteBorder
include('material/Action/FavoriteBorder')

' renders the element
FavoriteBorder('FavoriteBorder', 'Favorite Border', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FavoriteBorder
include('material/Action/FavoriteBorder')

' renders the element
FavoriteBorder('FavoriteBorder', 'Favorite Border', 'an optional tech label', 'an optional description')
@enduml
```

