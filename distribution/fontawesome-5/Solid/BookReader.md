# BookReader


```text
fontawesome-5/Solid/BookReader
```

```text
include('fontawesome-5/Solid/BookReader')
```



| Illustration | BookReader |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/BookReader.png) | ![illustration for BookReader](../../fontawesome-5/Solid/BookReader.Local.png) |




## BookReader

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element BookReader
include('fontawesome-5/Solid/BookReader')

' renders the element
BookReader('BookReader', 'Book Reader', 'an optional tech label')
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

' loads the Item which embeds the element BookReader
include('fontawesome-5/Solid/BookReader')

' renders the element
BookReader('BookReader', 'Book Reader', 'an optional tech label')
@enduml
```

