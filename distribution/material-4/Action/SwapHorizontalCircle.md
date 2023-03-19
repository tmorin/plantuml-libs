# SwapHorizontalCircle


```text
material-4/Action/SwapHorizontalCircle
```

```text
include('material-4/Action/SwapHorizontalCircle')
```



| Illustration | SwapHorizontalCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SwapHorizontalCircle.png) | ![illustration for SwapHorizontalCircle](../../material-4/Action/SwapHorizontalCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwapHorizontalCircleXs>`
- `<$SwapHorizontalCircleSm>`
- `<$SwapHorizontalCircleMd>`
- `<$SwapHorizontalCircleLg>`





## SwapHorizontalCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SwapHorizontalCircle
include('material-4/Action/SwapHorizontalCircle')

' renders the element
SwapHorizontalCircle('SwapHorizontalCircle', 'Swap Horizontal Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SwapHorizontalCircle
include('material-4/Action/SwapHorizontalCircle')

' renders the element
SwapHorizontalCircle('SwapHorizontalCircle', 'Swap Horizontal Circle', 'an optional tech label', 'an optional description')
@enduml
```

