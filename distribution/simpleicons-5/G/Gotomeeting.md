# Gotomeeting


```text
simpleicons-5/G/Gotomeeting
```

```text
include('simpleicons-5/G/Gotomeeting')
```



| Illustration | Gotomeeting |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gotomeeting.png) | ![illustration for Gotomeeting](../../simpleicons-5/G/Gotomeeting.Local.png) |




## Gotomeeting

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gotomeeting
include('simpleicons-5/G/Gotomeeting')

' renders the element
Gotomeeting('Gotomeeting', 'Gotomeeting', 'an optional tech label')
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

' loads the Item which embeds the element Gotomeeting
include('simpleicons-5/G/Gotomeeting')

' renders the element
Gotomeeting('Gotomeeting', 'Gotomeeting', 'an optional tech label')
@enduml
```

