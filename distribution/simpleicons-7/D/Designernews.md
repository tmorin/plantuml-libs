# Designernews


```text
simpleicons-7/D/Designernews
```

```text
include('simpleicons-7/D/Designernews')
```



| Illustration | Designernews |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/D/Designernews.png) | ![illustration for Designernews](../../simpleicons-7/D/Designernews.Local.png) |




## Designernews

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Designernews
include('simpleicons-7/D/Designernews')

' renders the element
Designernews('Designernews', 'Designernews', 'an optional tech label')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Designernews
include('simpleicons-7/D/Designernews')

' renders the element
Designernews('Designernews', 'Designernews', 'an optional tech label')
@enduml
```

