# Wallabag


```text
simpleicons-7/W/Wallabag
```

```text
include('simpleicons-7/W/Wallabag')
```



| Illustration | Wallabag |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/W/Wallabag.png) | ![illustration for Wallabag](../../simpleicons-7/W/Wallabag.Local.png) |




## Wallabag

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Wallabag
include('simpleicons-7/W/Wallabag')

' renders the element
Wallabag('Wallabag', 'Wallabag', 'an optional tech label')
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

' loads the Item which embeds the element Wallabag
include('simpleicons-7/W/Wallabag')

' renders the element
Wallabag('Wallabag', 'Wallabag', 'an optional tech label')
@enduml
```

