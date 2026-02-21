# BookOpenReader


```text
fontawesome/Solid/BookOpenReader
```

```text
include('fontawesome/Solid/BookOpenReader')
```



| Illustration | BookOpenReader |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BookOpenReader.png) | ![illustration for BookOpenReader](../../fontawesome/Solid/BookOpenReader.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookOpenReaderXs>`
- `<$BookOpenReaderSm>`
- `<$BookOpenReaderMd>`
- `<$BookOpenReaderLg>`





## BookOpenReader

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookOpenReader
include('fontawesome/Solid/BookOpenReader')

' renders the element
BookOpenReader('BookOpenReader', 'Book Open Reader', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookOpenReader
include('fontawesome/Solid/BookOpenReader')

' renders the element
BookOpenReader('BookOpenReader', 'Book Open Reader', 'an optional tech label', 'an optional description')
@enduml
```

