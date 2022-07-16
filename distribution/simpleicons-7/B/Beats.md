# Beats


```text
simpleicons-7/B/Beats
```

```text
include('simpleicons-7/B/Beats')
```



| Illustration | Beats |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Beats.png) | ![illustration for Beats](../../simpleicons-7/B/Beats.Local.png) |




## Beats

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Beats
include('simpleicons-7/B/Beats')

' renders the element
Beats('Beats', 'Beats', 'an optional tech label')
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

' loads the Item which embeds the element Beats
include('simpleicons-7/B/Beats')

' renders the element
Beats('Beats', 'Beats', 'an optional tech label')
@enduml
```

