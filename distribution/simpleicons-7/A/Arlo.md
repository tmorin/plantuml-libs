# Arlo


```text
simpleicons-7/A/Arlo
```

```text
include('simpleicons-7/A/Arlo')
```



| Illustration | Arlo |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Arlo.png) | ![illustration for Arlo](../../simpleicons-7/A/Arlo.Local.png) |




## Arlo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Arlo
include('simpleicons-7/A/Arlo')

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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Arlo
include('simpleicons-7/A/Arlo')

' renders the element
Arlo('Arlo', 'Arlo', 'an optional tech label')
@enduml
```

