# DiceFive


```text
fontawesome-5/Solid/DiceFive
```

```text
include('fontawesome-5/Solid/DiceFive')
```



| Illustration | DiceFive |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/DiceFive.png) | ![illustration for DiceFive](../../fontawesome-5/Solid/DiceFive.Local.png) |




## DiceFive

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element DiceFive
include('fontawesome-5/Solid/DiceFive')

' renders the element
DiceFive('DiceFive', 'Dice Five', 'an optional tech label')
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

' loads the Item which embeds the element DiceFive
include('fontawesome-5/Solid/DiceFive')

' renders the element
DiceFive('DiceFive', 'Dice Five', 'an optional tech label')
@enduml
```

