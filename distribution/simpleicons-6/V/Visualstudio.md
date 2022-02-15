# Visualstudio


```text
simpleicons-6/V/Visualstudio
```

```text
include('simpleicons-6/V/Visualstudio')
```



| Illustration | Visualstudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/V/Visualstudio.png) | ![illustration for Visualstudio](../../simpleicons-6/V/Visualstudio.Local.png) |




## Visualstudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Visualstudio
include('simpleicons-6/V/Visualstudio')

' renders the element
Visualstudio('Visualstudio', 'Visualstudio', 'an optional tech label')
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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Visualstudio
include('simpleicons-6/V/Visualstudio')

' renders the element
Visualstudio('Visualstudio', 'Visualstudio', 'an optional tech label')
@enduml
```

