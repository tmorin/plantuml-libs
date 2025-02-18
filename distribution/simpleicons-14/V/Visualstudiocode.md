# Visualstudiocode


```text
simpleicons-14/V/Visualstudiocode
```

```text
include('simpleicons-14/V/Visualstudiocode')
```



| Illustration | Visualstudiocode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/V/Visualstudiocode.png) | ![illustration for Visualstudiocode](../../simpleicons-14/V/Visualstudiocode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VisualstudiocodeXs>`
- `<$VisualstudiocodeSm>`
- `<$VisualstudiocodeMd>`
- `<$VisualstudiocodeLg>`





## Visualstudiocode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Visualstudiocode
include('simpleicons-14/V/Visualstudiocode')

' renders the element
Visualstudiocode('Visualstudiocode', 'Visualstudiocode', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Visualstudiocode
include('simpleicons-14/V/Visualstudiocode')

' renders the element
Visualstudiocode('Visualstudiocode', 'Visualstudiocode', 'an optional tech label', 'an optional description')
@enduml
```

