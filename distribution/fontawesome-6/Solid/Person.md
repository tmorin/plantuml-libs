# Person


```text
fontawesome-6/Solid/Person
```

```text
include('fontawesome-6/Solid/Person')
```



| Illustration | Person |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Person.png) | ![illustration for Person](../../fontawesome-6/Solid/Person.Local.png) |




## Person

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Person
include('fontawesome-6/Solid/Person')

' renders the element
Person('Person', 'Person', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Person
include('fontawesome-6/Solid/Person')

' renders the element
Person('Person', 'Person', 'an optional tech label', 'an optional description')
@enduml
```

