# Amazonsqs


```text
simpleicons-7/A/Amazonsqs
```

```text
include('simpleicons-7/A/Amazonsqs')
```



| Illustration | Amazonsqs |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Amazonsqs.png) | ![illustration for Amazonsqs](../../simpleicons-7/A/Amazonsqs.Local.png) |




## Amazonsqs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amazonsqs
include('simpleicons-7/A/Amazonsqs')

' renders the element
Amazonsqs('Amazonsqs', 'Amazonsqs', 'an optional tech label')
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

' loads the Item which embeds the element Amazonsqs
include('simpleicons-7/A/Amazonsqs')

' renders the element
Amazonsqs('Amazonsqs', 'Amazonsqs', 'an optional tech label')
@enduml
```

