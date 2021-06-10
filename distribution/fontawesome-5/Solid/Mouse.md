# Mouse


```text
fontawesome-5/Solid/Mouse
```

```text
include('fontawesome-5/Solid/Mouse')
```



| Illustration | Mouse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Mouse.png) | ![illustration for Mouse](../../fontawesome-5/Solid/Mouse.Local.png) |




## Mouse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Mouse
include('fontawesome-5/Solid/Mouse')

' renders the element
Mouse('Mouse', 'Mouse', 'an optional tech label')
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

' loads the Item which embeds the element Mouse
include('fontawesome-5/Solid/Mouse')

' renders the element
Mouse('Mouse', 'Mouse', 'an optional tech label')
@enduml
```

