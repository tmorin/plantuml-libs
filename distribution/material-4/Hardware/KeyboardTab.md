# KeyboardTab


```text
material-4/Hardware/KeyboardTab
```

```text
include('material-4/Hardware/KeyboardTab')
```



| Illustration | KeyboardTab |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/KeyboardTab.png) | ![illustration for KeyboardTab](../../material-4/Hardware/KeyboardTab.Local.png) |




## KeyboardTab

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element KeyboardTab
include('material-4/Hardware/KeyboardTab')

' renders the element
KeyboardTab('KeyboardTab', 'Keyboard Tab', 'an optional tech label')
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

' loads the Item which embeds the element KeyboardTab
include('material-4/Hardware/KeyboardTab')

' renders the element
KeyboardTab('KeyboardTab', 'Keyboard Tab', 'an optional tech label')
@enduml
```

