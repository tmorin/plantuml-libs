# Beatport


```text
simpleicons-6/B/Beatport
```

```text
include('simpleicons-6/B/Beatport')
```



| Illustration | Beatport |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/B/Beatport.png) | ![illustration for Beatport](../../simpleicons-6/B/Beatport.Local.png) |




## Beatport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Beatport
include('simpleicons-6/B/Beatport')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Beatport
include('simpleicons-6/B/Beatport')

' renders the element
Beatport('Beatport', 'Beatport', 'an optional tech label')
@enduml
```

