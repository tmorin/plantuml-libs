# RightToBracket


```text
fontawesome-6/Solid/RightToBracket
```

```text
include('fontawesome-6/Solid/RightToBracket')
```



| Illustration | RightToBracket |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RightToBracket.png) | ![illustration for RightToBracket](../../fontawesome-6/Solid/RightToBracket.Local.png) |




## RightToBracket

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RightToBracket
include('fontawesome-6/Solid/RightToBracket')

' renders the element
RightToBracket('RightToBracket', 'Right To Bracket', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RightToBracket
include('fontawesome-6/Solid/RightToBracket')

' renders the element
RightToBracket('RightToBracket', 'Right To Bracket', 'an optional tech label', 'an optional description')
@enduml
```

