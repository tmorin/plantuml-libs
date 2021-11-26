# KeyboardArrowLeft


```text
material-4/Hardware/KeyboardArrowLeft
```

```text
include('material-4/Hardware/KeyboardArrowLeft')
```



| Illustration | KeyboardArrowLeft |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/KeyboardArrowLeft.png) | ![illustration for KeyboardArrowLeft](../../material-4/Hardware/KeyboardArrowLeft.Local.png) |




## KeyboardArrowLeft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element KeyboardArrowLeft
include('material-4/Hardware/KeyboardArrowLeft')

' renders the element
KeyboardArrowLeft('KeyboardArrowLeft', 'Keyboard Arrow Left', 'an optional tech label')
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

' loads the Item which embeds the element KeyboardArrowLeft
include('material-4/Hardware/KeyboardArrowLeft')

' renders the element
KeyboardArrowLeft('KeyboardArrowLeft', 'Keyboard Arrow Left', 'an optional tech label')
@enduml
```

