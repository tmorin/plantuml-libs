# Gnubash


```text
simpleicons-5/G/Gnubash
```

```text
include('simpleicons-5/G/Gnubash')
```



| Illustration | Gnubash |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gnubash.png) | ![illustration for Gnubash](../../simpleicons-5/G/Gnubash.Local.png) |




## Gnubash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gnubash
include('simpleicons-5/G/Gnubash')

' renders the element
Gnubash('Gnubash', 'Gnubash', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gnubash
include('simpleicons-5/G/Gnubash')

' renders the element
Gnubash('Gnubash', 'Gnubash', 'an optional tech label')
@enduml
```

