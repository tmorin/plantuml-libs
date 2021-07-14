# Statamic


```text
simpleicons-5/S/Statamic
```

```text
include('simpleicons-5/S/Statamic')
```



| Illustration | Statamic |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Statamic.png) | ![illustration for Statamic](../../simpleicons-5/S/Statamic.Local.png) |




## Statamic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Statamic
include('simpleicons-5/S/Statamic')

' renders the element
Statamic('Statamic', 'Statamic', 'an optional tech label')
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

' loads the Item which embeds the element Statamic
include('simpleicons-5/S/Statamic')

' renders the element
Statamic('Statamic', 'Statamic', 'an optional tech label')
@enduml
```

