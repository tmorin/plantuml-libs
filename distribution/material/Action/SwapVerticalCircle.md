# SwapVerticalCircle


```text
material/Action/SwapVerticalCircle
```

```text
include('material/Action/SwapVerticalCircle')
```



| Illustration | SwapVerticalCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/SwapVerticalCircle.png) | ![illustration for SwapVerticalCircle](../../material/Action/SwapVerticalCircle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SwapVerticalCircleXs>`
- `<$SwapVerticalCircleSm>`
- `<$SwapVerticalCircleMd>`
- `<$SwapVerticalCircleLg>`





## SwapVerticalCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SwapVerticalCircle
include('material/Action/SwapVerticalCircle')

' renders the element
SwapVerticalCircle('SwapVerticalCircle', 'Swap Vertical Circle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SwapVerticalCircle
include('material/Action/SwapVerticalCircle')

' renders the element
SwapVerticalCircle('SwapVerticalCircle', 'Swap Vertical Circle', 'an optional tech label', 'an optional description')
@enduml
```

