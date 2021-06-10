# CheckSquare


```text
fontawesome-5/Solid/CheckSquare
```

```text
include('fontawesome-5/Solid/CheckSquare')
```



| Illustration | CheckSquare |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CheckSquare.png) | ![illustration for CheckSquare](../../fontawesome-5/Solid/CheckSquare.Local.png) |




## CheckSquare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CheckSquare
include('fontawesome-5/Solid/CheckSquare')

' renders the element
CheckSquare('CheckSquare', 'Check Square', 'an optional tech label')
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

' loads the Item which embeds the element CheckSquare
include('fontawesome-5/Solid/CheckSquare')

' renders the element
CheckSquare('CheckSquare', 'Check Square', 'an optional tech label')
@enduml
```

