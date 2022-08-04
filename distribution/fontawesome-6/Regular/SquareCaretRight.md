# SquareCaretRight


```text
fontawesome-6/Regular/SquareCaretRight
```

```text
include('fontawesome-6/Regular/SquareCaretRight')
```



| Illustration | SquareCaretRight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/SquareCaretRight.png) | ![illustration for SquareCaretRight](../../fontawesome-6/Regular/SquareCaretRight.Local.png) |




## SquareCaretRight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareCaretRight
include('fontawesome-6/Regular/SquareCaretRight')

' renders the element
SquareCaretRight('SquareCaretRight', 'Square Caret Right', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareCaretRight
include('fontawesome-6/Regular/SquareCaretRight')

' renders the element
SquareCaretRight('SquareCaretRight', 'Square Caret Right', 'an optional tech label', 'an optional description')
@enduml
```

