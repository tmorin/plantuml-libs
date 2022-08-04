# SquareXmark


```text
fontawesome-6/Solid/SquareXmark
```

```text
include('fontawesome-6/Solid/SquareXmark')
```



| Illustration | SquareXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquareXmark.png) | ![illustration for SquareXmark](../../fontawesome-6/Solid/SquareXmark.Local.png) |




## SquareXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareXmark
include('fontawesome-6/Solid/SquareXmark')

' renders the element
SquareXmark('SquareXmark', 'Square Xmark', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareXmark
include('fontawesome-6/Solid/SquareXmark')

' renders the element
SquareXmark('SquareXmark', 'Square Xmark', 'an optional tech label', 'an optional description')
@enduml
```

