# Bolt


```text
fontawesome-5/Solid/Bolt
```

```text
include('fontawesome-5/Solid/Bolt')
```



| Illustration | Bolt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Bolt.png) | ![illustration for Bolt](../../fontawesome-5/Solid/Bolt.Local.png) |




## Bolt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bolt
include('fontawesome-5/Solid/Bolt')

' renders the element
Bolt('Bolt', 'Bolt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Bolt
include('fontawesome-5/Solid/Bolt')

' renders the element
Bolt('Bolt', 'Bolt', 'an optional tech label')
@enduml
```

