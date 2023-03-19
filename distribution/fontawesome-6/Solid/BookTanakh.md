# BookTanakh


```text
fontawesome-6/Solid/BookTanakh
```

```text
include('fontawesome-6/Solid/BookTanakh')
```



| Illustration | BookTanakh |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BookTanakh.png) | ![illustration for BookTanakh](../../fontawesome-6/Solid/BookTanakh.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookTanakhXs>`
- `<$BookTanakhSm>`
- `<$BookTanakhMd>`
- `<$BookTanakhLg>`





## BookTanakh

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookTanakh
include('fontawesome-6/Solid/BookTanakh')

' renders the element
BookTanakh('BookTanakh', 'Book Tanakh', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookTanakh
include('fontawesome-6/Solid/BookTanakh')

' renders the element
BookTanakh('BookTanakh', 'Book Tanakh', 'an optional tech label', 'an optional description')
@enduml
```

