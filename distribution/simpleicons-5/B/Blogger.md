# Blogger


```text
simpleicons-5/B/Blogger
```

```text
include('simpleicons-5/B/Blogger')
```



| Illustration | Blogger |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Blogger.png) | ![illustration for Blogger](../../simpleicons-5/B/Blogger.Local.png) |




## Blogger

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Blogger
include('simpleicons-5/B/Blogger')

' renders the element
Blogger('Blogger', 'Blogger', 'an optional tech label')
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

' loads the Item which embeds the element Blogger
include('simpleicons-5/B/Blogger')

' renders the element
Blogger('Blogger', 'Blogger', 'an optional tech label')
@enduml
```

