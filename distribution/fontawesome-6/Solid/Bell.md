# Bell


```text
fontawesome-6/Solid/Bell
```

```text
include('fontawesome-6/Solid/Bell')
```



| Illustration | Bell |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Bell.png) | ![illustration for Bell](../../fontawesome-6/Solid/Bell.Local.png) |




## Bell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Bell
include('fontawesome-6/Solid/Bell')

' renders the element
Bell('Bell', 'Bell', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bell
include('fontawesome-6/Solid/Bell')

' renders the element
Bell('Bell', 'Bell', 'an optional tech label', 'an optional description')
@enduml
```

