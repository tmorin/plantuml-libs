# KeyboardReturn


```text
material/Hardware/KeyboardReturn
```

```text
include('material/Hardware/KeyboardReturn')
```



| Illustration | KeyboardReturn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/KeyboardReturn.png) | ![illustration for KeyboardReturn](../../material/Hardware/KeyboardReturn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$KeyboardReturnXs>`
- `<$KeyboardReturnSm>`
- `<$KeyboardReturnMd>`
- `<$KeyboardReturnLg>`





## KeyboardReturn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element KeyboardReturn
include('material/Hardware/KeyboardReturn')

' renders the element
KeyboardReturn('KeyboardReturn', 'Keyboard Return', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element KeyboardReturn
include('material/Hardware/KeyboardReturn')

' renders the element
KeyboardReturn('KeyboardReturn', 'Keyboard Return', 'an optional tech label', 'an optional description')
@enduml
```

