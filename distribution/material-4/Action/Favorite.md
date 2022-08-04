# Favorite


```text
material-4/Action/Favorite
```

```text
include('material-4/Action/Favorite')
```



| Illustration | Favorite |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Favorite.png) | ![illustration for Favorite](../../material-4/Action/Favorite.Local.png) |




## Favorite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Favorite
include('material-4/Action/Favorite')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Favorite
include('material-4/Action/Favorite')

' renders the element
Favorite('Favorite', 'Favorite', 'an optional tech label', 'an optional description')
@enduml
```

