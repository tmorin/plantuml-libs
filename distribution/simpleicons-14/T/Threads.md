# Threads


```text
simpleicons-14/T/Threads
```

```text
include('simpleicons-14/T/Threads')
```



| Illustration | Threads |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Threads.png) | ![illustration for Threads](../../simpleicons-14/T/Threads.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ThreadsXs>`
- `<$ThreadsSm>`
- `<$ThreadsMd>`
- `<$ThreadsLg>`





## Threads

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Threads
include('simpleicons-14/T/Threads')

' renders the element
Threads('Threads', 'Threads', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Threads
include('simpleicons-14/T/Threads')

' renders the element
Threads('Threads', 'Threads', 'an optional tech label', 'an optional description')
@enduml
```

