# Opacity


```text
material-4/Action/Opacity
```

```text
include('material-4/Action/Opacity')
```



| Illustration | Opacity |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Opacity.png) | ![illustration for Opacity](../../material-4/Action/Opacity.Local.png) |




## Opacity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Opacity
include('material-4/Action/Opacity')

' renders the element
Opacity('Opacity', 'Opacity', 'an optional tech label')
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

' loads the Item which embeds the element Opacity
include('material-4/Action/Opacity')

' renders the element
Opacity('Opacity', 'Opacity', 'an optional tech label')
@enduml
```

