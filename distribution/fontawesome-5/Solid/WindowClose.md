# WindowClose


```text
fontawesome-5/Solid/WindowClose
```

```text
include('fontawesome-5/Solid/WindowClose')
```



| Illustration | WindowClose |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/WindowClose.png) | ![illustration for WindowClose](../../fontawesome-5/Solid/WindowClose.Local.png) |




## WindowClose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element WindowClose
include('fontawesome-5/Solid/WindowClose')

' renders the element
WindowClose('WindowClose', 'Window Close', 'an optional tech label')
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

' loads the Item which embeds the element WindowClose
include('fontawesome-5/Solid/WindowClose')

' renders the element
WindowClose('WindowClose', 'Window Close', 'an optional tech label')
@enduml
```

