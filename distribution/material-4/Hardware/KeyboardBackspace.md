# KeyboardBackspace


```text
material-4/Hardware/KeyboardBackspace
```

```text
include('material-4/Hardware/KeyboardBackspace')
```



| Illustration | KeyboardBackspace |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/KeyboardBackspace.png) | ![illustration for KeyboardBackspace](../../material-4/Hardware/KeyboardBackspace.Local.png) |




## KeyboardBackspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element KeyboardBackspace
include('material-4/Hardware/KeyboardBackspace')

' renders the element
KeyboardBackspace('KeyboardBackspace', 'Keyboard Backspace', 'an optional tech label')
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

' loads the Item which embeds the element KeyboardBackspace
include('material-4/Hardware/KeyboardBackspace')

' renders the element
KeyboardBackspace('KeyboardBackspace', 'Keyboard Backspace', 'an optional tech label')
@enduml
```

