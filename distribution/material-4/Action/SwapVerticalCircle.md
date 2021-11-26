# SwapVerticalCircle


```text
material-4/Action/SwapVerticalCircle
```

```text
include('material-4/Action/SwapVerticalCircle')
```



| Illustration | SwapVerticalCircle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SwapVerticalCircle.png) | ![illustration for SwapVerticalCircle](../../material-4/Action/SwapVerticalCircle.Local.png) |




## SwapVerticalCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SwapVerticalCircle
include('material-4/Action/SwapVerticalCircle')

' renders the element
SwapVerticalCircle('SwapVerticalCircle', 'Swap Vertical Circle', 'an optional tech label')
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

' loads the Item which embeds the element SwapVerticalCircle
include('material-4/Action/SwapVerticalCircle')

' renders the element
SwapVerticalCircle('SwapVerticalCircle', 'Swap Vertical Circle', 'an optional tech label')
@enduml
```

