# SquareCaretUp


```text
fontawesome-6/Solid/SquareCaretUp
```

```text
include('fontawesome-6/Solid/SquareCaretUp')
```



| Illustration | SquareCaretUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareCaretUp.png) | ![illustration for SquareCaretUp](../../fontawesome-6/Solid/SquareCaretUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SquareCaretUpXs>`
- `<$SquareCaretUpSm>`
- `<$SquareCaretUpMd>`
- `<$SquareCaretUpLg>`





## SquareCaretUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareCaretUp
include('fontawesome-6/Solid/SquareCaretUp')

' renders the element
SquareCaretUp('SquareCaretUp', 'Square Caret Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareCaretUp
include('fontawesome-6/Solid/SquareCaretUp')

' renders the element
SquareCaretUp('SquareCaretUp', 'Square Caret Up', 'an optional tech label', 'an optional description')
@enduml
```

