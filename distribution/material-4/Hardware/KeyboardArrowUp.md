# KeyboardArrowUp


```text
material-4/Hardware/KeyboardArrowUp
```

```text
include('material-4/Hardware/KeyboardArrowUp')
```



| Illustration | KeyboardArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/KeyboardArrowUp.png) | ![illustration for KeyboardArrowUp](../../material-4/Hardware/KeyboardArrowUp.Local.png) |




## KeyboardArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element KeyboardArrowUp
include('material-4/Hardware/KeyboardArrowUp')

' renders the element
KeyboardArrowUp('KeyboardArrowUp', 'Keyboard Arrow Up', 'an optional tech label')
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

' loads the Item which embeds the element KeyboardArrowUp
include('material-4/Hardware/KeyboardArrowUp')

' renders the element
KeyboardArrowUp('KeyboardArrowUp', 'Keyboard Arrow Up', 'an optional tech label')
@enduml
```

