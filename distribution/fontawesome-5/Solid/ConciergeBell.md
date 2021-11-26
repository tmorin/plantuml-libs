# ConciergeBell


```text
fontawesome-5/Solid/ConciergeBell
```

```text
include('fontawesome-5/Solid/ConciergeBell')
```



| Illustration | ConciergeBell |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/ConciergeBell.png) | ![illustration for ConciergeBell](../../fontawesome-5/Solid/ConciergeBell.Local.png) |




## ConciergeBell

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element ConciergeBell
include('fontawesome-5/Solid/ConciergeBell')

' renders the element
ConciergeBell('ConciergeBell', 'Concierge Bell', 'an optional tech label')
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

' loads the Item which embeds the element ConciergeBell
include('fontawesome-5/Solid/ConciergeBell')

' renders the element
ConciergeBell('ConciergeBell', 'Concierge Bell', 'an optional tech label')
@enduml
```

