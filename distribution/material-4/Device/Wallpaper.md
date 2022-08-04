# Wallpaper


```text
material-4/Device/Wallpaper
```

```text
include('material-4/Device/Wallpaper')
```



| Illustration | Wallpaper |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Device/Wallpaper.png) | ![illustration for Wallpaper](../../material-4/Device/Wallpaper.Local.png) |




## Wallpaper

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Wallpaper
include('material-4/Device/Wallpaper')

' renders the element
Wallpaper('Wallpaper', 'Wallpaper', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Wallpaper
include('material-4/Device/Wallpaper')

' renders the element
Wallpaper('Wallpaper', 'Wallpaper', 'an optional tech label', 'an optional description')
@enduml
```

