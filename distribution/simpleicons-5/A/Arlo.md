# Arlo


```text
simpleicons-5/A/Arlo
```

```text
include('simpleicons-5/A/Arlo')
```



| Illustration | Arlo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Arlo.png) | ![illustration for Arlo](../../simpleicons-5/A/Arlo.Local.png) |




## Arlo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Arlo
include('simpleicons-5/A/Arlo')

' renders the element
Arlo('Arlo', 'Arlo', 'an optional tech label')
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

' loads the Item which embeds the element Arlo
include('simpleicons-5/A/Arlo')

' renders the element
Arlo('Arlo', 'Arlo', 'an optional tech label')
@enduml
```

