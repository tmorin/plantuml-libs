# Fmod


```text
simpleicons-5/F/Fmod
```

```text
include('simpleicons-5/F/Fmod')
```



| Illustration | Fmod |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Fmod.png) | ![illustration for Fmod](../../simpleicons-5/F/Fmod.Local.png) |




## Fmod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Fmod
include('simpleicons-5/F/Fmod')

' renders the element
Fmod('Fmod', 'Fmod', 'an optional tech label')
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

' loads the Item which embeds the element Fmod
include('simpleicons-5/F/Fmod')

' renders the element
Fmod('Fmod', 'Fmod', 'an optional tech label')
@enduml
```

