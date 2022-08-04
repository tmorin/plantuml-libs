# House


```text
fontawesome-6/Solid/House
```

```text
include('fontawesome-6/Solid/House')
```



| Illustration | House |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/House.png) | ![illustration for House](../../fontawesome-6/Solid/House.Local.png) |




## House

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element House
include('fontawesome-6/Solid/House')

' renders the element
House('House', 'House', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element House
include('fontawesome-6/Solid/House')

' renders the element
House('House', 'House', 'an optional tech label', 'an optional description')
@enduml
```

