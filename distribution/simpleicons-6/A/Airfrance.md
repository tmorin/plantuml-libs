# Airfrance


```text
simpleicons-6/A/Airfrance
```

```text
include('simpleicons-6/A/Airfrance')
```



| Illustration | Airfrance |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Airfrance.png) | ![illustration for Airfrance](../../simpleicons-6/A/Airfrance.Local.png) |




## Airfrance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Airfrance
include('simpleicons-6/A/Airfrance')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Airfrance
include('simpleicons-6/A/Airfrance')

' renders the element
Airfrance('Airfrance', 'Airfrance', 'an optional tech label')
@enduml
```

