# SwapVert


```text
material-4/Action/SwapVert
```

```text
include('material-4/Action/SwapVert')
```



| Illustration | SwapVert |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/SwapVert.png) | ![illustration for SwapVert](../../material-4/Action/SwapVert.Local.png) |




## SwapVert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SwapVert
include('material-4/Action/SwapVert')

' renders the element
SwapVert('SwapVert', 'Swap Vert', 'an optional tech label')
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

' loads the Item which embeds the element SwapVert
include('material-4/Action/SwapVert')

' renders the element
SwapVert('SwapVert', 'Swap Vert', 'an optional tech label')
@enduml
```

