# Goodreads


```text
simpleicons-8/G/Goodreads
```

```text
include('simpleicons-8/G/Goodreads')
```



| Illustration | Goodreads |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/G/Goodreads.png) | ![illustration for Goodreads](../../simpleicons-8/G/Goodreads.Local.png) |




## Goodreads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Goodreads
include('simpleicons-8/G/Goodreads')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Goodreads
include('simpleicons-8/G/Goodreads')

' renders the element
Goodreads('Goodreads', 'Goodreads', 'an optional tech label', 'an optional description')
@enduml
```

