# Bloglovin


```text
simpleicons-8/B/Bloglovin
```

```text
include('simpleicons-8/B/Bloglovin')
```



| Illustration | Bloglovin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/B/Bloglovin.png) | ![illustration for Bloglovin](../../simpleicons-8/B/Bloglovin.Local.png) |




## Bloglovin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Bloglovin
include('simpleicons-8/B/Bloglovin')

' renders the element
Bloglovin('Bloglovin', 'Bloglovin', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bloglovin
include('simpleicons-8/B/Bloglovin')

' renders the element
Bloglovin('Bloglovin', 'Bloglovin', 'an optional tech label', 'an optional description')
@enduml
```

