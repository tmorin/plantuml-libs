# Star


```text
fontawesome-5/Solid/Star
```

```text
include('fontawesome-5/Solid/Star')
```



| Illustration | Star |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Star.png) | ![illustration for Star](../../fontawesome-5/Solid/Star.Local.png) |




## Star

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Star
include('fontawesome-5/Solid/Star')

' renders the element
Star('Star', 'Star', 'an optional tech label')
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

' loads the Item which embeds the element Star
include('fontawesome-5/Solid/Star')

' renders the element
Star('Star', 'Star', 'an optional tech label')
@enduml
```

