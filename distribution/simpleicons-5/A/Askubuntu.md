# Askubuntu


```text
simpleicons-5/A/Askubuntu
```

```text
include('simpleicons-5/A/Askubuntu')
```



| Illustration | Askubuntu |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Askubuntu.png) | ![illustration for Askubuntu](../../simpleicons-5/A/Askubuntu.Local.png) |




## Askubuntu

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Askubuntu
include('simpleicons-5/A/Askubuntu')

' renders the element
Askubuntu('Askubuntu', 'Askubuntu', 'an optional tech label')
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

' loads the Item which embeds the element Askubuntu
include('simpleicons-5/A/Askubuntu')

' renders the element
Askubuntu('Askubuntu', 'Askubuntu', 'an optional tech label')
@enduml
```

