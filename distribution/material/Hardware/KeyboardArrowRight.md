# KeyboardArrowRight


```text
material/Hardware/KeyboardArrowRight
```

```text
include('material/Hardware/KeyboardArrowRight')
```



| Illustration | KeyboardArrowRight |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/KeyboardArrowRight.png) | ![illustration for KeyboardArrowRight](../../material/Hardware/KeyboardArrowRight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeyboardArrowRightXs>`
- `<$KeyboardArrowRightSm>`
- `<$KeyboardArrowRightMd>`
- `<$KeyboardArrowRightLg>`





## KeyboardArrowRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element KeyboardArrowRight
include('material/Hardware/KeyboardArrowRight')

' renders the element
KeyboardArrowRight('KeyboardArrowRight', 'Keyboard Arrow Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KeyboardArrowRight
include('material/Hardware/KeyboardArrowRight')

' renders the element
KeyboardArrowRight('KeyboardArrowRight', 'Keyboard Arrow Right', 'an optional tech label', 'an optional description')
@enduml
```

