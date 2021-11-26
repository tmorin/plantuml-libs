# Nuke


```text
simpleicons-5/N/Nuke
```

```text
include('simpleicons-5/N/Nuke')
```



| Illustration | Nuke |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/N/Nuke.png) | ![illustration for Nuke](../../simpleicons-5/N/Nuke.Local.png) |




## Nuke

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Nuke
include('simpleicons-5/N/Nuke')

' renders the element
Nuke('Nuke', 'Nuke', 'an optional tech label')
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

' loads the Item which embeds the element Nuke
include('simpleicons-5/N/Nuke')

' renders the element
Nuke('Nuke', 'Nuke', 'an optional tech label')
@enduml
```

