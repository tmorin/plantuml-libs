# KeyboardArrowRight


```text
material-4/Hardware/KeyboardArrowRight
```

```text
include('material-4/Hardware/KeyboardArrowRight')
```



| Illustration | KeyboardArrowRight |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/KeyboardArrowRight.png) | ![illustration for KeyboardArrowRight](../../material-4/Hardware/KeyboardArrowRight.Local.png) |




## KeyboardArrowRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element KeyboardArrowRight
include('material-4/Hardware/KeyboardArrowRight')

' renders the element
KeyboardArrowRight('KeyboardArrowRight', 'Keyboard Arrow Right', 'an optional tech label')
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

' loads the Item which embeds the element KeyboardArrowRight
include('material-4/Hardware/KeyboardArrowRight')

' renders the element
KeyboardArrowRight('KeyboardArrowRight', 'Keyboard Arrow Right', 'an optional tech label')
@enduml
```

