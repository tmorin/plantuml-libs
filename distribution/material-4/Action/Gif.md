# Gif


```text
material-4/Action/Gif
```

```text
include('material-4/Action/Gif')
```



| Illustration | Gif |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Gif.png) | ![illustration for Gif](../../material-4/Action/Gif.Local.png) |




## Gif

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Gif
include('material-4/Action/Gif')

' renders the element
Gif('Gif', 'Gif', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Gif
include('material-4/Action/Gif')

' renders the element
Gif('Gif', 'Gif', 'an optional tech label', 'an optional description')
@enduml
```

