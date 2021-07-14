# Looks


```text
material-4/Image/Looks
```

```text
include('material-4/Image/Looks')
```



| Illustration | Looks |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Looks.png) | ![illustration for Looks](../../material-4/Image/Looks.Local.png) |




## Looks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Looks
include('material-4/Image/Looks')

' renders the element
Looks('Looks', 'Looks', 'an optional tech label')
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

' loads the Item which embeds the element Looks
include('material-4/Image/Looks')

' renders the element
Looks('Looks', 'Looks', 'an optional tech label')
@enduml
```

