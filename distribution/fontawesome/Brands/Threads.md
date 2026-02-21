# Threads


```text
fontawesome/Brands/Threads
```

```text
include('fontawesome/Brands/Threads')
```



| Illustration | Threads |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Threads.png) | ![illustration for Threads](../../fontawesome/Brands/Threads.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Threads
include('fontawesome/Brands/Threads')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Threads
include('fontawesome/Brands/Threads')

' renders the element
Threads('Threads', 'Threads', 'an optional tech label', 'an optional description')
@enduml
```

