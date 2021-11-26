# Book


```text
fontawesome-5/Solid/Book
```

```text
include('fontawesome-5/Solid/Book')
```



| Illustration | Book |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Book.png) | ![illustration for Book](../../fontawesome-5/Solid/Book.Local.png) |




## Book

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Book
include('fontawesome-5/Solid/Book')

' renders the element
Book('Book', 'Book', 'an optional tech label')
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

' loads the Item which embeds the element Book
include('fontawesome-5/Solid/Book')

' renders the element
Book('Book', 'Book', 'an optional tech label')
@enduml
```

