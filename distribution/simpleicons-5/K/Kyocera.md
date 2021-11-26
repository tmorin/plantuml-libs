# Kyocera


```text
simpleicons-5/K/Kyocera
```

```text
include('simpleicons-5/K/Kyocera')
```



| Illustration | Kyocera |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/K/Kyocera.png) | ![illustration for Kyocera](../../simpleicons-5/K/Kyocera.Local.png) |




## Kyocera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Kyocera
include('simpleicons-5/K/Kyocera')

' renders the element
Kyocera('Kyocera', 'Kyocera', 'an optional tech label')
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

' loads the Item which embeds the element Kyocera
include('simpleicons-5/K/Kyocera')

' renders the element
Kyocera('Kyocera', 'Kyocera', 'an optional tech label')
@enduml
```

