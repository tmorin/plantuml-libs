# Snapcraft


```text
simpleicons-8/S/Snapcraft
```

```text
include('simpleicons-8/S/Snapcraft')
```



| Illustration | Snapcraft |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Snapcraft.png) | ![illustration for Snapcraft](../../simpleicons-8/S/Snapcraft.Local.png) |




## Snapcraft

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Snapcraft
include('simpleicons-8/S/Snapcraft')

' renders the element
Snapcraft('Snapcraft', 'Snapcraft', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Snapcraft
include('simpleicons-8/S/Snapcraft')

' renders the element
Snapcraft('Snapcraft', 'Snapcraft', 'an optional tech label', 'an optional description')
@enduml
```

