# Book


```text
fontawesome/Solid/Book
```

```text
include('fontawesome/Solid/Book')
```



| Illustration | Book |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Book.png) | ![illustration for Book](../../fontawesome/Solid/Book.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookXs>`
- `<$BookSm>`
- `<$BookMd>`
- `<$BookLg>`





## Book

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Book
include('fontawesome/Solid/Book')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Book
include('fontawesome/Solid/Book')

' renders the element
Book('Book', 'Book', 'an optional tech label', 'an optional description')
@enduml
```

