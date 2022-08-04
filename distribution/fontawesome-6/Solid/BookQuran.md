# BookQuran


```text
fontawesome-6/Solid/BookQuran
```

```text
include('fontawesome-6/Solid/BookQuran')
```



| Illustration | BookQuran |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BookQuran.png) | ![illustration for BookQuran](../../fontawesome-6/Solid/BookQuran.Local.png) |




## BookQuran

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookQuran
include('fontawesome-6/Solid/BookQuran')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BookQuran
include('fontawesome-6/Solid/BookQuran')

' renders the element
BookQuran('BookQuran', 'Book Quran', 'an optional tech label', 'an optional description')
@enduml
```

