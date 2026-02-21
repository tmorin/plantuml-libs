# BookBible


```text
fontawesome/Solid/BookBible
```

```text
include('fontawesome/Solid/BookBible')
```



| Illustration | BookBible |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BookBible.png) | ![illustration for BookBible](../../fontawesome/Solid/BookBible.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookBibleXs>`
- `<$BookBibleSm>`
- `<$BookBibleMd>`
- `<$BookBibleLg>`





## BookBible

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookBible
include('fontawesome/Solid/BookBible')

' renders the element
BookBible('BookBible', 'Book Bible', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookBible
include('fontawesome/Solid/BookBible')

' renders the element
BookBible('BookBible', 'Book Bible', 'an optional tech label', 'an optional description')
@enduml
```

