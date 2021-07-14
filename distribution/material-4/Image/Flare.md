# Flare


```text
material-4/Image/Flare
```

```text
include('material-4/Image/Flare')
```



| Illustration | Flare |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Flare.png) | ![illustration for Flare](../../material-4/Image/Flare.Local.png) |




## Flare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Flare
include('material-4/Image/Flare')

' renders the element
Flare('Flare', 'Flare', 'an optional tech label')
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

' loads the Item which embeds the element Flare
include('material-4/Image/Flare')

' renders the element
Flare('Flare', 'Flare', 'an optional tech label')
@enduml
```

