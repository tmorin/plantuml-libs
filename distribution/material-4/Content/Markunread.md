# Markunread


```text
material-4/Content/Markunread
```

```text
include('material-4/Content/Markunread')
```



| Illustration | Markunread |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/Markunread.png) | ![illustration for Markunread](../../material-4/Content/Markunread.Local.png) |




## Markunread

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Markunread
include('material-4/Content/Markunread')

' renders the element
Markunread('Markunread', 'Markunread', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Markunread
include('material-4/Content/Markunread')

' renders the element
Markunread('Markunread', 'Markunread', 'an optional tech label', 'an optional description')
@enduml
```

