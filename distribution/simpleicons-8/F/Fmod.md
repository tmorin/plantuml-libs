# Fmod


```text
simpleicons-8/F/Fmod
```

```text
include('simpleicons-8/F/Fmod')
```



| Illustration | Fmod |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fmod.png) | ![illustration for Fmod](../../simpleicons-8/F/Fmod.Local.png) |




## Fmod

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fmod
include('simpleicons-8/F/Fmod')

' renders the element
Fmod('Fmod', 'Fmod', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fmod
include('simpleicons-8/F/Fmod')

' renders the element
Fmod('Fmod', 'Fmod', 'an optional tech label', 'an optional description')
@enduml
```

