# Esea


```text
simpleicons-6/E/Esea
```

```text
include('simpleicons-6/E/Esea')
```



| Illustration | Esea |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/E/Esea.png) | ![illustration for Esea](../../simpleicons-6/E/Esea.Local.png) |




## Esea

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Esea
include('simpleicons-6/E/Esea')

' renders the element
Esea('Esea', 'Esea', 'an optional tech label')
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

' loads the Item which embeds the element Esea
include('simpleicons-6/E/Esea')

' renders the element
Esea('Esea', 'Esea', 'an optional tech label')
@enduml
```

