# KeyboardHide


```text
material/Hardware/KeyboardHide
```

```text
include('material/Hardware/KeyboardHide')
```



| Illustration | KeyboardHide |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/KeyboardHide.png) | ![illustration for KeyboardHide](../../material/Hardware/KeyboardHide.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeyboardHideXs>`
- `<$KeyboardHideSm>`
- `<$KeyboardHideMd>`
- `<$KeyboardHideLg>`





## KeyboardHide

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element KeyboardHide
include('material/Hardware/KeyboardHide')

' renders the element
KeyboardHide('KeyboardHide', 'Keyboard Hide', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element KeyboardHide
include('material/Hardware/KeyboardHide')

' renders the element
KeyboardHide('KeyboardHide', 'Keyboard Hide', 'an optional tech label', 'an optional description')
@enduml
```

