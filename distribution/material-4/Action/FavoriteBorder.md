# FavoriteBorder


```text
material-4/Action/FavoriteBorder
```

```text
include('material-4/Action/FavoriteBorder')
```



| Illustration | FavoriteBorder |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/FavoriteBorder.png) | ![illustration for FavoriteBorder](../../material-4/Action/FavoriteBorder.Local.png) |




## FavoriteBorder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FavoriteBorder
include('material-4/Action/FavoriteBorder')

' renders the element
FavoriteBorder('FavoriteBorder', 'Favorite Border', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element FavoriteBorder
include('material-4/Action/FavoriteBorder')

' renders the element
FavoriteBorder('FavoriteBorder', 'Favorite Border', 'an optional tech label')
@enduml
```

