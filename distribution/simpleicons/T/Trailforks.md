# Trailforks


```text
simpleicons/T/Trailforks
```

```text
include('simpleicons/T/Trailforks')
```



| Illustration | Trailforks |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/T/Trailforks.png) | ![illustration for Trailforks](../../simpleicons/T/Trailforks.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrailforksXs>`
- `<$TrailforksSm>`
- `<$TrailforksMd>`
- `<$TrailforksLg>`





## Trailforks

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trailforks
include('simpleicons/T/Trailforks')

' renders the element
Trailforks('Trailforks', 'Trailforks', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Trailforks
include('simpleicons/T/Trailforks')

' renders the element
Trailforks('Trailforks', 'Trailforks', 'an optional tech label', 'an optional description')
@enduml
```

