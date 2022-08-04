# ArrowsLeftRight


```text
fontawesome-6/Solid/ArrowsLeftRight
```

```text
include('fontawesome-6/Solid/ArrowsLeftRight')
```



| Illustration | ArrowsLeftRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowsLeftRight.png) | ![illustration for ArrowsLeftRight](../../fontawesome-6/Solid/ArrowsLeftRight.Local.png) |




## ArrowsLeftRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowsLeftRight
include('fontawesome-6/Solid/ArrowsLeftRight')

' renders the element
ArrowsLeftRight('ArrowsLeftRight', 'Arrows Left Right', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowsLeftRight
include('fontawesome-6/Solid/ArrowsLeftRight')

' renders the element
ArrowsLeftRight('ArrowsLeftRight', 'Arrows Left Right', 'an optional tech label', 'an optional description')
@enduml
```

