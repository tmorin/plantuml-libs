# Devrant


```text
simpleicons-5/D/Devrant
```

```text
include('simpleicons-5/D/Devrant')
```



| Illustration | Devrant |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Devrant.png) | ![illustration for Devrant](../../simpleicons-5/D/Devrant.Local.png) |




## Devrant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Devrant
include('simpleicons-5/D/Devrant')

' renders the element
Devrant('Devrant', 'Devrant', 'an optional tech label')
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

' loads the Item which embeds the element Devrant
include('simpleicons-5/D/Devrant')

' renders the element
Devrant('Devrant', 'Devrant', 'an optional tech label')
@enduml
```

