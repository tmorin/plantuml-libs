# KeyboardArrowDown


```text
material/Hardware/KeyboardArrowDown
```

```text
include('material/Hardware/KeyboardArrowDown')
```



| Illustration | KeyboardArrowDown |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/KeyboardArrowDown.png) | ![illustration for KeyboardArrowDown](../../material/Hardware/KeyboardArrowDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeyboardArrowDownXs>`
- `<$KeyboardArrowDownSm>`
- `<$KeyboardArrowDownMd>`
- `<$KeyboardArrowDownLg>`





## KeyboardArrowDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element KeyboardArrowDown
include('material/Hardware/KeyboardArrowDown')

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
include('material/bootstrap')

' loads the Item which embeds the element KeyboardArrowDown
include('material/Hardware/KeyboardArrowDown')

' renders the element
KeyboardArrowDown('KeyboardArrowDown', 'Keyboard Arrow Down', 'an optional tech label', 'an optional description')
@enduml
```

