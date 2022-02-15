# SquarePhone


```text
fontawesome-6/Solid/SquarePhone
```

```text
include('fontawesome-6/Solid/SquarePhone')
```



| Illustration | SquarePhone |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/SquarePhone.png) | ![illustration for SquarePhone](../../fontawesome-6/Solid/SquarePhone.Local.png) |




## SquarePhone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquarePhone
include('fontawesome-6/Solid/SquarePhone')

' renders the element
SquarePhone('SquarePhone', 'Square Phone', 'an optional tech label')
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

' loads the Item which embeds the element SquarePhone
include('fontawesome-6/Solid/SquarePhone')

' renders the element
SquarePhone('SquarePhone', 'Square Phone', 'an optional tech label')
@enduml
```

