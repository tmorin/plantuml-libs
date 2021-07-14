# Backspace


```text
material-4/Content/Backspace
```

```text
include('material-4/Content/Backspace')
```



| Illustration | Backspace |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Backspace.png) | ![illustration for Backspace](../../material-4/Content/Backspace.Local.png) |




## Backspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Backspace
include('material-4/Content/Backspace')

' renders the element
Backspace('Backspace', 'Backspace', 'an optional tech label')
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

' loads the Item which embeds the element Backspace
include('material-4/Content/Backspace')

' renders the element
Backspace('Backspace', 'Backspace', 'an optional tech label')
@enduml
```

