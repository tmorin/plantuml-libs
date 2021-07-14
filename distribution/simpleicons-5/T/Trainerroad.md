# Trainerroad


```text
simpleicons-5/T/Trainerroad
```

```text
include('simpleicons-5/T/Trainerroad')
```



| Illustration | Trainerroad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Trainerroad.png) | ![illustration for Trainerroad](../../simpleicons-5/T/Trainerroad.Local.png) |




## Trainerroad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Trainerroad
include('simpleicons-5/T/Trainerroad')

' renders the element
Trainerroad('Trainerroad', 'Trainerroad', 'an optional tech label')
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

' loads the Item which embeds the element Trainerroad
include('simpleicons-5/T/Trainerroad')

' renders the element
Trainerroad('Trainerroad', 'Trainerroad', 'an optional tech label')
@enduml
```

