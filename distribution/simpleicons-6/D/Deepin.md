# Deepin


```text
simpleicons-6/D/Deepin
```

```text
include('simpleicons-6/D/Deepin')
```



| Illustration | Deepin |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Deepin.png) | ![illustration for Deepin](../../simpleicons-6/D/Deepin.Local.png) |




## Deepin

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Deepin
include('simpleicons-6/D/Deepin')

' renders the element
Deepin('Deepin', 'Deepin', 'an optional tech label')
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

' loads the Item which embeds the element Deepin
include('simpleicons-6/D/Deepin')

' renders the element
Deepin('Deepin', 'Deepin', 'an optional tech label')
@enduml
```

