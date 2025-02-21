# Person


```text
c4model/Element/Person
```

```text
include('c4model/Element/Person')
```



| Person |
| :---: |
| ![illustration for Person](../../c4model/Element/Person.Local.png) |







## Person

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('c4model/bootstrap')

' loads the Item which embeds the element Person
include('c4model/Element/Person')

Person('Person', 'Person', 'an optional description label', 'an optional tech label')
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
include('c4model/bootstrap')

' loads the Item which embeds the element Person
include('c4model/Element/Person')

Person('Person', 'Person', 'an optional description label', 'an optional tech label')
@enduml
```

