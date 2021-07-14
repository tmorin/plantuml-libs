# Book


```text
material-4/Action/Book
```

```text
include('material-4/Action/Book')
```



| Illustration | Book |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/Book.png) | ![illustration for Book](../../material-4/Action/Book.Local.png) |




## Book

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Book
include('material-4/Action/Book')

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
include('material-4/bootstrap')

' loads the Item which embeds the element Book
include('material-4/Action/Book')

' renders the element
Book('Book', 'Book', 'an optional tech label')
@enduml
```

