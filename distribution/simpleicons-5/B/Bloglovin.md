# Bloglovin


```text
simpleicons-5/B/Bloglovin
```

```text
include('simpleicons-5/B/Bloglovin')
```



| Illustration | Bloglovin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Bloglovin.png) | ![illustration for Bloglovin](../../simpleicons-5/B/Bloglovin.Local.png) |




## Bloglovin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Bloglovin
include('simpleicons-5/B/Bloglovin')

' renders the element
Bloglovin('Bloglovin', 'Bloglovin', 'an optional tech label')
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

' loads the Item which embeds the element Bloglovin
include('simpleicons-5/B/Bloglovin')

' renders the element
Bloglovin('Bloglovin', 'Bloglovin', 'an optional tech label')
@enduml
```

