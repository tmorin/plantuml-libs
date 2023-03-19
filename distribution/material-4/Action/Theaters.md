# Theaters


```text
material-4/Action/Theaters
```

```text
include('material-4/Action/Theaters')
```



| Illustration | Theaters |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Theaters.png) | ![illustration for Theaters](../../material-4/Action/Theaters.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TheatersXs>`
- `<$TheatersSm>`
- `<$TheatersMd>`
- `<$TheatersLg>`





## Theaters

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Theaters
include('material-4/Action/Theaters')

' renders the element
Theaters('Theaters', 'Theaters', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Theaters
include('material-4/Action/Theaters')

' renders the element
Theaters('Theaters', 'Theaters', 'an optional tech label', 'an optional description')
@enduml
```

