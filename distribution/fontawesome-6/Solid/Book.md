# Book


```text
fontawesome-6/Solid/Book
```

```text
include('fontawesome-6/Solid/Book')
```



| Illustration | Book |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Book.png) | ![illustration for Book](../../fontawesome-6/Solid/Book.Local.png) |




## Book

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Book
include('fontawesome-6/Solid/Book')

' renders the element
Book('Book', 'Book', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Book
include('fontawesome-6/Solid/Book')

' renders the element
Book('Book', 'Book', 'an optional tech label', 'an optional description')
@enduml
```

