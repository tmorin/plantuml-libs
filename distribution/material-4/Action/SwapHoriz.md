# SwapHoriz


```text
material-4/Action/SwapHoriz
```

```text
include('material-4/Action/SwapHoriz')
```



| Illustration | SwapHoriz |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SwapHoriz.png) | ![illustration for SwapHoriz](../../material-4/Action/SwapHoriz.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwapHorizXs>`
- `<$SwapHorizSm>`
- `<$SwapHorizMd>`
- `<$SwapHorizLg>`





## SwapHoriz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SwapHoriz
include('material-4/Action/SwapHoriz')

' renders the element
SwapHoriz('SwapHoriz', 'Swap Horiz', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SwapHoriz
include('material-4/Action/SwapHoriz')

' renders the element
SwapHoriz('SwapHoriz', 'Swap Horiz', 'an optional tech label', 'an optional description')
@enduml
```

