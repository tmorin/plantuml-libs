# BookReader


```text
fontawesome/Solid/BookReader
```

```text
include('fontawesome/Solid/BookReader')
```



| Illustration | BookReader |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BookReader.png) | ![illustration for BookReader](../../fontawesome/Solid/BookReader.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookReaderXs>`
- `<$BookReaderSm>`
- `<$BookReaderMd>`
- `<$BookReaderLg>`





## BookReader

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BookReader
include('fontawesome/Solid/BookReader')

' renders the element
BookReader('BookReader', 'Book Reader', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BookReader
include('fontawesome/Solid/BookReader')

' renders the element
BookReader('BookReader', 'Book Reader', 'an optional tech label', 'an optional description')
@enduml
```

