# FlashOff


```text
material-4/Image/FlashOff
```

```text
include('material-4/Image/FlashOff')
```



| Illustration | FlashOff |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/FlashOff.png) | ![illustration for FlashOff](../../material-4/Image/FlashOff.Local.png) |




## FlashOff

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FlashOff
include('material-4/Image/FlashOff')

' renders the element
FlashOff('FlashOff', 'Flash Off', 'an optional tech label')
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

' loads the Item which embeds the element FlashOff
include('material-4/Image/FlashOff')

' renders the element
FlashOff('FlashOff', 'Flash Off', 'an optional tech label')
@enduml
```

