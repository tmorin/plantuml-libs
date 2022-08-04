# Colorize


```text
material-4/Image/Colorize
```

```text
include('material-4/Image/Colorize')
```



| Illustration | Colorize |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/Colorize.png) | ![illustration for Colorize](../../material-4/Image/Colorize.Local.png) |




## Colorize

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Colorize
include('material-4/Image/Colorize')

' renders the element
Colorize('Colorize', 'Colorize', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Colorize
include('material-4/Image/Colorize')

' renders the element
Colorize('Colorize', 'Colorize', 'an optional tech label', 'an optional description')
@enduml
```

