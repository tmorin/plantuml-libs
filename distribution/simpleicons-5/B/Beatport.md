# Beatport


```text
simpleicons-5/B/Beatport
```

```text
include('simpleicons-5/B/Beatport')
```



| Illustration | Beatport |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/B/Beatport.png) | ![illustration for Beatport](../../simpleicons-5/B/Beatport.Local.png) |




## Beatport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Beatport
include('simpleicons-5/B/Beatport')

' renders the element
Beatport('Beatport', 'Beatport', 'an optional tech label')
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

' loads the Item which embeds the element Beatport
include('simpleicons-5/B/Beatport')

' renders the element
Beatport('Beatport', 'Beatport', 'an optional tech label')
@enduml
```

