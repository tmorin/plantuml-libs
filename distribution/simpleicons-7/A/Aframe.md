# Aframe


```text
simpleicons-7/A/Aframe
```

```text
include('simpleicons-7/A/Aframe')
```



| Illustration | Aframe |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Aframe.png) | ![illustration for Aframe](../../simpleicons-7/A/Aframe.Local.png) |




## Aframe

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Aframe
include('simpleicons-7/A/Aframe')

' renders the element
Aframe('Aframe', 'Aframe', 'an optional tech label')
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

' loads the Item which embeds the element Aframe
include('simpleicons-7/A/Aframe')

' renders the element
Aframe('Aframe', 'Aframe', 'an optional tech label')
@enduml
```

