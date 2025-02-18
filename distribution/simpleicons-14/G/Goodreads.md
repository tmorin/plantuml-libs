# Goodreads


```text
simpleicons-14/G/Goodreads
```

```text
include('simpleicons-14/G/Goodreads')
```



| Illustration | Goodreads |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Goodreads.png) | ![illustration for Goodreads](../../simpleicons-14/G/Goodreads.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoodreadsXs>`
- `<$GoodreadsSm>`
- `<$GoodreadsMd>`
- `<$GoodreadsLg>`





## Goodreads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Goodreads
include('simpleicons-14/G/Goodreads')

' renders the element
Goodreads('Goodreads', 'Goodreads', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Goodreads
include('simpleicons-14/G/Goodreads')

' renders the element
Goodreads('Goodreads', 'Goodreads', 'an optional tech label', 'an optional description')
@enduml
```

