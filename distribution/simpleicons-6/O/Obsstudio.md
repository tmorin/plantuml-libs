# Obsstudio


```text
simpleicons-6/O/Obsstudio
```

```text
include('simpleicons-6/O/Obsstudio')
```



| Illustration | Obsstudio |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/O/Obsstudio.png) | ![illustration for Obsstudio](../../simpleicons-6/O/Obsstudio.Local.png) |




## Obsstudio

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Obsstudio
include('simpleicons-6/O/Obsstudio')

' renders the element
Obsstudio('Obsstudio', 'Obsstudio', 'an optional tech label')
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

' loads the Item which embeds the element Obsstudio
include('simpleicons-6/O/Obsstudio')

' renders the element
Obsstudio('Obsstudio', 'Obsstudio', 'an optional tech label')
@enduml
```

