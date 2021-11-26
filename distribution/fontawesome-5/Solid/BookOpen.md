# BookOpen


```text
fontawesome-5/Solid/BookOpen
```

```text
include('fontawesome-5/Solid/BookOpen')
```



| Illustration | BookOpen |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BookOpen.png) | ![illustration for BookOpen](../../fontawesome-5/Solid/BookOpen.Local.png) |




## BookOpen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BookOpen
include('fontawesome-5/Solid/BookOpen')

' renders the element
BookOpen('BookOpen', 'Book Open', 'an optional tech label')
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

' loads the Item which embeds the element BookOpen
include('fontawesome-5/Solid/BookOpen')

' renders the element
BookOpen('BookOpen', 'Book Open', 'an optional tech label')
@enduml
```

