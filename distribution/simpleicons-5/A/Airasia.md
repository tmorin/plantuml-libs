# Airasia


```text
simpleicons-5/A/Airasia
```

```text
include('simpleicons-5/A/Airasia')
```



| Illustration | Airasia |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Airasia.png) | ![illustration for Airasia](../../simpleicons-5/A/Airasia.Local.png) |




## Airasia

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Airasia
include('simpleicons-5/A/Airasia')

' renders the element
Airasia('Airasia', 'Airasia', 'an optional tech label')
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

' loads the Item which embeds the element Airasia
include('simpleicons-5/A/Airasia')

' renders the element
Airasia('Airasia', 'Airasia', 'an optional tech label')
@enduml
```

