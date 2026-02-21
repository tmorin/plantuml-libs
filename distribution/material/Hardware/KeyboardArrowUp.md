# KeyboardArrowUp


```text
material/Hardware/KeyboardArrowUp
```

```text
include('material/Hardware/KeyboardArrowUp')
```



| Illustration | KeyboardArrowUp |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/KeyboardArrowUp.png) | ![illustration for KeyboardArrowUp](../../material/Hardware/KeyboardArrowUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeyboardArrowUpXs>`
- `<$KeyboardArrowUpSm>`
- `<$KeyboardArrowUpMd>`
- `<$KeyboardArrowUpLg>`





## KeyboardArrowUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element KeyboardArrowUp
include('material/Hardware/KeyboardArrowUp')

' renders the element
KeyboardArrowUp('KeyboardArrowUp', 'Keyboard Arrow Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KeyboardArrowUp
include('material/Hardware/KeyboardArrowUp')

' renders the element
KeyboardArrowUp('KeyboardArrowUp', 'Keyboard Arrow Up', 'an optional tech label', 'an optional description')
@enduml
```

