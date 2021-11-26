# Badgr


```text
simpleicons-5/B/Badgr
```

```text
include('simpleicons-5/B/Badgr')
```



| Illustration | Badgr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Badgr.png) | ![illustration for Badgr](../../simpleicons-5/B/Badgr.Local.png) |




## Badgr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Badgr
include('simpleicons-5/B/Badgr')

' renders the element
Badgr('Badgr', 'Badgr', 'an optional tech label')
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

' loads the Item which embeds the element Badgr
include('simpleicons-5/B/Badgr')

' renders the element
Badgr('Badgr', 'Badgr', 'an optional tech label')
@enduml
```

