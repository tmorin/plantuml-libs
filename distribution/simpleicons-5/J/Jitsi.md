# Jitsi


```text
simpleicons-5/J/Jitsi
```

```text
include('simpleicons-5/J/Jitsi')
```



| Illustration | Jitsi |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/J/Jitsi.png) | ![illustration for Jitsi](../../simpleicons-5/J/Jitsi.Local.png) |




## Jitsi

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Jitsi
include('simpleicons-5/J/Jitsi')

' renders the element
Jitsi('Jitsi', 'Jitsi', 'an optional tech label')
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

' loads the Item which embeds the element Jitsi
include('simpleicons-5/J/Jitsi')

' renders the element
Jitsi('Jitsi', 'Jitsi', 'an optional tech label')
@enduml
```

