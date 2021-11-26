# Dehaze


```text
material-4/Image/Dehaze
```

```text
include('material-4/Image/Dehaze')
```



| Illustration | Dehaze |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Dehaze.png) | ![illustration for Dehaze](../../material-4/Image/Dehaze.Local.png) |




## Dehaze

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Dehaze
include('material-4/Image/Dehaze')

' renders the element
Dehaze('Dehaze', 'Dehaze', 'an optional tech label')
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

' loads the Item which embeds the element Dehaze
include('material-4/Image/Dehaze')

' renders the element
Dehaze('Dehaze', 'Dehaze', 'an optional tech label')
@enduml
```

