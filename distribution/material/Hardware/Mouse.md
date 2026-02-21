# Mouse


```text
material/Hardware/Mouse
```

```text
include('material/Hardware/Mouse')
```



| Illustration | Mouse |
| :---: | :---: |
| ![illustration for Illustration](../../material/Hardware/Mouse.png) | ![illustration for Mouse](../../material/Hardware/Mouse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MouseXs>`
- `<$MouseSm>`
- `<$MouseMd>`
- `<$MouseLg>`





## Mouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Mouse
include('material/Hardware/Mouse')

' renders the element
Mouse('Mouse', 'Mouse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Mouse
include('material/Hardware/Mouse')

' renders the element
Mouse('Mouse', 'Mouse', 'an optional tech label', 'an optional description')
@enduml
```

