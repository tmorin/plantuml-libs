# SquareCaretDown


```text
fontawesome-6/Solid/SquareCaretDown
```

```text
include('fontawesome-6/Solid/SquareCaretDown')
```



| Illustration | SquareCaretDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareCaretDown.png) | ![illustration for SquareCaretDown](../../fontawesome-6/Solid/SquareCaretDown.Local.png) |




## SquareCaretDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareCaretDown
include('fontawesome-6/Solid/SquareCaretDown')

' renders the element
SquareCaretDown('SquareCaretDown', 'Square Caret Down', 'an optional tech label')
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

' loads the Item which embeds the element SquareCaretDown
include('fontawesome-6/Solid/SquareCaretDown')

' renders the element
SquareCaretDown('SquareCaretDown', 'Square Caret Down', 'an optional tech label')
@enduml
```

