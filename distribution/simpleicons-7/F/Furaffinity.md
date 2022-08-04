# Furaffinity


```text
simpleicons-7/F/Furaffinity
```

```text
include('simpleicons-7/F/Furaffinity')
```



| Illustration | Furaffinity |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/F/Furaffinity.png) | ![illustration for Furaffinity](../../simpleicons-7/F/Furaffinity.Local.png) |




## Furaffinity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Furaffinity
include('simpleicons-7/F/Furaffinity')

' renders the element
Furaffinity('Furaffinity', 'Furaffinity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Furaffinity
include('simpleicons-7/F/Furaffinity')

' renders the element
Furaffinity('Furaffinity', 'Furaffinity', 'an optional tech label', 'an optional description')
@enduml
```

