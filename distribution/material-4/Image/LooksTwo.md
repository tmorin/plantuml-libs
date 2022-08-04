# LooksTwo


```text
material-4/Image/LooksTwo
```

```text
include('material-4/Image/LooksTwo')
```



| Illustration | LooksTwo |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/LooksTwo.png) | ![illustration for LooksTwo](../../material-4/Image/LooksTwo.Local.png) |




## LooksTwo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LooksTwo
include('material-4/Image/LooksTwo')

' renders the element
LooksTwo('LooksTwo', 'Looks Two', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element LooksTwo
include('material-4/Image/LooksTwo')

' renders the element
LooksTwo('LooksTwo', 'Looks Two', 'an optional tech label', 'an optional description')
@enduml
```

