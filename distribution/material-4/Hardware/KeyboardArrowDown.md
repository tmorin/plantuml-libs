# KeyboardArrowDown


```text
material-4/Hardware/KeyboardArrowDown
```

```text
include('material-4/Hardware/KeyboardArrowDown')
```



| Illustration | KeyboardArrowDown |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/KeyboardArrowDown.png) | ![illustration for KeyboardArrowDown](../../material-4/Hardware/KeyboardArrowDown.Local.png) |




## KeyboardArrowDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element KeyboardArrowDown
include('material-4/Hardware/KeyboardArrowDown')

' renders the element
KeyboardArrowDown('KeyboardArrowDown', 'Keyboard Arrow Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KeyboardArrowDown
include('material-4/Hardware/KeyboardArrowDown')

' renders the element
KeyboardArrowDown('KeyboardArrowDown', 'Keyboard Arrow Down', 'an optional tech label', 'an optional description')
@enduml
```

