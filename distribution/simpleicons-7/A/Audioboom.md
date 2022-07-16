# Audioboom


```text
simpleicons-7/A/Audioboom
```

```text
include('simpleicons-7/A/Audioboom')
```



| Illustration | Audioboom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Audioboom.png) | ![illustration for Audioboom](../../simpleicons-7/A/Audioboom.Local.png) |




## Audioboom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Audioboom
include('simpleicons-7/A/Audioboom')

' renders the element
Audioboom('Audioboom', 'Audioboom', 'an optional tech label')
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

' loads the Item which embeds the element Audioboom
include('simpleicons-7/A/Audioboom')

' renders the element
Audioboom('Audioboom', 'Audioboom', 'an optional tech label')
@enduml
```

