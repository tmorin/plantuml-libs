# Adguard


```text
simpleicons-5/A/Adguard
```

```text
include('simpleicons-5/A/Adguard')
```



| Illustration | Adguard |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Adguard.png) | ![illustration for Adguard](../../simpleicons-5/A/Adguard.Local.png) |




## Adguard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Adguard
include('simpleicons-5/A/Adguard')

' renders the element
Adguard('Adguard', 'Adguard', 'an optional tech label')
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

' loads the Item which embeds the element Adguard
include('simpleicons-5/A/Adguard')

' renders the element
Adguard('Adguard', 'Adguard', 'an optional tech label')
@enduml
```

