# Nuke


```text
simpleicons-7/N/Nuke
```

```text
include('simpleicons-7/N/Nuke')
```



| Illustration | Nuke |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/N/Nuke.png) | ![illustration for Nuke](../../simpleicons-7/N/Nuke.Local.png) |




## Nuke

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Nuke
include('simpleicons-7/N/Nuke')

' renders the element
Nuke('Nuke', 'Nuke', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Nuke
include('simpleicons-7/N/Nuke')

' renders the element
Nuke('Nuke', 'Nuke', 'an optional tech label', 'an optional description')
@enduml
```

