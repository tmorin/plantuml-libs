# Bento


```text
material-4/Places/Bento
```

```text
include('material-4/Places/Bento')
```



| Illustration | Bento |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/Bento.png) | ![illustration for Bento](../../material-4/Places/Bento.Local.png) |




## Bento

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Bento
include('material-4/Places/Bento')

' renders the element
Bento('Bento', 'Bento', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bento
include('material-4/Places/Bento')

' renders the element
Bento('Bento', 'Bento', 'an optional tech label', 'an optional description')
@enduml
```

