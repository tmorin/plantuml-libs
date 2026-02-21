# BookQuran


```text
fontawesome/Solid/BookQuran
```

```text
include('fontawesome/Solid/BookQuran')
```



| Illustration | BookQuran |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BookQuran.png) | ![illustration for BookQuran](../../fontawesome/Solid/BookQuran.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookQuranXs>`
- `<$BookQuranSm>`
- `<$BookQuranMd>`
- `<$BookQuranLg>`





## BookQuran

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookQuran
include('fontawesome/Solid/BookQuran')

' renders the element
BookQuran('BookQuran', 'Book Quran', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookQuran
include('fontawesome/Solid/BookQuran')

' renders the element
BookQuran('BookQuran', 'Book Quran', 'an optional tech label', 'an optional description')
@enduml
```

