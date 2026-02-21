# LibraryBooks


```text
material/Av/LibraryBooks
```

```text
include('material/Av/LibraryBooks')
```



| Illustration | LibraryBooks |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/LibraryBooks.png) | ![illustration for LibraryBooks](../../material/Av/LibraryBooks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LibraryBooksXs>`
- `<$LibraryBooksSm>`
- `<$LibraryBooksMd>`
- `<$LibraryBooksLg>`





## LibraryBooks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element LibraryBooks
include('material/Av/LibraryBooks')

' renders the element
LibraryBooks('LibraryBooks', 'Library Books', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element LibraryBooks
include('material/Av/LibraryBooks')

' renders the element
LibraryBooks('LibraryBooks', 'Library Books', 'an optional tech label', 'an optional description')
@enduml
```

