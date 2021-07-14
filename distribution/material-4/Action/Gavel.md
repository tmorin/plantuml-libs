# Gavel


```text
material-4/Action/Gavel
```

```text
include('material-4/Action/Gavel')
```



| Illustration | Gavel |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Gavel.png) | ![illustration for Gavel](../../material-4/Action/Gavel.Local.png) |




## Gavel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Gavel
include('material-4/Action/Gavel')

' renders the element
Gavel('Gavel', 'Gavel', 'an optional tech label')
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

' loads the Item which embeds the element Gavel
include('material-4/Action/Gavel')

' renders the element
Gavel('Gavel', 'Gavel', 'an optional tech label')
@enduml
```

