# Airfrance


```text
simpleicons-5/A/Airfrance
```

```text
include('simpleicons-5/A/Airfrance')
```



| Illustration | Airfrance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Airfrance.png) | ![illustration for Airfrance](../../simpleicons-5/A/Airfrance.Local.png) |




## Airfrance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Airfrance
include('simpleicons-5/A/Airfrance')

' renders the element
Airfrance('Airfrance', 'Airfrance', 'an optional tech label')
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

' loads the Item which embeds the element Airfrance
include('simpleicons-5/A/Airfrance')

' renders the element
Airfrance('Airfrance', 'Airfrance', 'an optional tech label')
@enduml
```

