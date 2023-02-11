# SquareSteam


```text
fontawesome-6/Brands/SquareSteam
```

```text
include('fontawesome-6/Brands/SquareSteam')
```



| Illustration | SquareSteam |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/SquareSteam.png) | ![illustration for SquareSteam](../../fontawesome-6/Brands/SquareSteam.Local.png) |




## SquareSteam

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element SquareSteam
include('fontawesome-6/Brands/SquareSteam')

' renders the element
SquareSteam('SquareSteam', 'Square Steam', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SquareSteam
include('fontawesome-6/Brands/SquareSteam')

' renders the element
SquareSteam('SquareSteam', 'Square Steam', 'an optional tech label', 'an optional description')
@enduml
```

