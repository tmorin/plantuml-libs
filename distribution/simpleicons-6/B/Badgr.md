# Badgr


```text
simpleicons-6/B/Badgr
```

```text
include('simpleicons-6/B/Badgr')
```



| Illustration | Badgr |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Badgr.png) | ![illustration for Badgr](../../simpleicons-6/B/Badgr.Local.png) |




## Badgr

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Badgr
include('simpleicons-6/B/Badgr')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Badgr
include('simpleicons-6/B/Badgr')

' renders the element
Badgr('Badgr', 'Badgr', 'an optional tech label')
@enduml
```

