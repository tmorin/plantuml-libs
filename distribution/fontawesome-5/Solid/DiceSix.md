# DiceSix


```text
fontawesome-5/Solid/DiceSix
```

```text
include('fontawesome-5/Solid/DiceSix')
```



| Illustration | DiceSix |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DiceSix.png) | ![illustration for DiceSix](../../fontawesome-5/Solid/DiceSix.Local.png) |




## DiceSix

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DiceSix
include('fontawesome-5/Solid/DiceSix')

' renders the element
DiceSix('DiceSix', 'Dice Six', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DiceSix
include('fontawesome-5/Solid/DiceSix')

' renders the element
DiceSix('DiceSix', 'Dice Six', 'an optional tech label')
@enduml
```

