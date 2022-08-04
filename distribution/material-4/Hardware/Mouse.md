# Mouse


```text
material-4/Hardware/Mouse
```

```text
include('material-4/Hardware/Mouse')
```



| Illustration | Mouse |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Mouse.png) | ![illustration for Mouse](../../material-4/Hardware/Mouse.Local.png) |




## Mouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Mouse
include('material-4/Hardware/Mouse')

' renders the element
Mouse('Mouse', 'Mouse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mouse
include('material-4/Hardware/Mouse')

' renders the element
Mouse('Mouse', 'Mouse', 'an optional tech label', 'an optional description')
@enduml
```

