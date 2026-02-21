# KeyboardCapslock


```text
material/Hardware/KeyboardCapslock
```

```text
include('material/Hardware/KeyboardCapslock')
```



| Illustration | KeyboardCapslock |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/KeyboardCapslock.png) | ![illustration for KeyboardCapslock](../../material/Hardware/KeyboardCapslock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeyboardCapslockXs>`
- `<$KeyboardCapslockSm>`
- `<$KeyboardCapslockMd>`
- `<$KeyboardCapslockLg>`





## KeyboardCapslock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element KeyboardCapslock
include('material/Hardware/KeyboardCapslock')

' renders the element
KeyboardCapslock('KeyboardCapslock', 'Keyboard Capslock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KeyboardCapslock
include('material/Hardware/KeyboardCapslock')

' renders the element
KeyboardCapslock('KeyboardCapslock', 'Keyboard Capslock', 'an optional tech label', 'an optional description')
@enduml
```

