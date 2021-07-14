# _1001Tracklists


```text
simpleicons-5/_/_1001Tracklists
```

```text
include('simpleicons-5/_/_1001Tracklists')
```



| Illustration | _1001Tracklists |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/_/_1001Tracklists.png) | ![illustration for _1001Tracklists](../../simpleicons-5/_/_1001Tracklists.Local.png) |




## _1001Tracklists

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element _1001Tracklists
include('simpleicons-5/_/_1001Tracklists')

' renders the element
_1001Tracklists('1001tracklists', '1001tracklists', 'an optional tech label')
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

' loads the Item which embeds the element _1001Tracklists
include('simpleicons-5/_/_1001Tracklists')

' renders the element
_1001Tracklists('1001tracklists', '1001tracklists', 'an optional tech label')
@enduml
```

