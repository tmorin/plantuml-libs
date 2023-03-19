# BookBible


```text
fontawesome-6/Solid/BookBible
```

```text
include('fontawesome-6/Solid/BookBible')
```



| Illustration | BookBible |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BookBible.png) | ![illustration for BookBible](../../fontawesome-6/Solid/BookBible.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookBible
include('fontawesome-6/Solid/BookBible')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookBible
include('fontawesome-6/Solid/BookBible')

' renders the element
BookBible('BookBible', 'Book Bible', 'an optional tech label', 'an optional description')
@enduml
```

