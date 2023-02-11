# Qzone


```text
simpleicons-8/Q/Qzone
```

```text
include('simpleicons-8/Q/Qzone')
```



| Illustration | Qzone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/Q/Qzone.png) | ![illustration for Qzone](../../simpleicons-8/Q/Qzone.Local.png) |




## Qzone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Qzone
include('simpleicons-8/Q/Qzone')

' renders the element
Qzone('Qzone', 'Qzone', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Qzone
include('simpleicons-8/Q/Qzone')

' renders the element
Qzone('Qzone', 'Qzone', 'an optional tech label', 'an optional description')
@enduml
```

