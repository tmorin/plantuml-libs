# Artifacthub


```text
simpleicons-7/A/Artifacthub
```

```text
include('simpleicons-7/A/Artifacthub')
```



| Illustration | Artifacthub |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Artifacthub.png) | ![illustration for Artifacthub](../../simpleicons-7/A/Artifacthub.Local.png) |




## Artifacthub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Artifacthub
include('simpleicons-7/A/Artifacthub')

' renders the element
Artifacthub('Artifacthub', 'Artifacthub', 'an optional tech label')
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

' loads the Item which embeds the element Artifacthub
include('simpleicons-7/A/Artifacthub')

' renders the element
Artifacthub('Artifacthub', 'Artifacthub', 'an optional tech label')
@enduml
```

