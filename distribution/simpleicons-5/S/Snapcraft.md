# Snapcraft


```text
simpleicons-5/S/Snapcraft
```

```text
include('simpleicons-5/S/Snapcraft')
```



| Illustration | Snapcraft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Snapcraft.png) | ![illustration for Snapcraft](../../simpleicons-5/S/Snapcraft.Local.png) |




## Snapcraft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Snapcraft
include('simpleicons-5/S/Snapcraft')

' renders the element
Snapcraft('Snapcraft', 'Snapcraft', 'an optional tech label')
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

' loads the Item which embeds the element Snapcraft
include('simpleicons-5/S/Snapcraft')

' renders the element
Snapcraft('Snapcraft', 'Snapcraft', 'an optional tech label')
@enduml
```

