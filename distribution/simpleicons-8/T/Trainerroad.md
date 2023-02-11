# Trainerroad


```text
simpleicons-8/T/Trainerroad
```

```text
include('simpleicons-8/T/Trainerroad')
```



| Illustration | Trainerroad |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Trainerroad.png) | ![illustration for Trainerroad](../../simpleicons-8/T/Trainerroad.Local.png) |




## Trainerroad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Trainerroad
include('simpleicons-8/T/Trainerroad')

' renders the element
Trainerroad('Trainerroad', 'Trainerroad', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Trainerroad
include('simpleicons-8/T/Trainerroad')

' renders the element
Trainerroad('Trainerroad', 'Trainerroad', 'an optional tech label', 'an optional description')
@enduml
```

