# Poll


```text
fontawesome-5/Solid/Poll
```

```text
include('fontawesome-5/Solid/Poll')
```



| Illustration | Poll |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Poll.png) | ![illustration for Poll](../../fontawesome-5/Solid/Poll.Local.png) |




## Poll

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Poll
include('fontawesome-5/Solid/Poll')

' renders the element
Poll('Poll', 'Poll', 'an optional tech label')
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

' loads the Item which embeds the element Poll
include('fontawesome-5/Solid/Poll')

' renders the element
Poll('Poll', 'Poll', 'an optional tech label')
@enduml
```

