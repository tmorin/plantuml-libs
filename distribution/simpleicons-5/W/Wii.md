# Wii


```text
simpleicons-5/W/Wii
```

```text
include('simpleicons-5/W/Wii')
```



| Illustration | Wii |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/W/Wii.png) | ![illustration for Wii](../../simpleicons-5/W/Wii.Local.png) |




## Wii

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Wii
include('simpleicons-5/W/Wii')

' renders the element
Wii('Wii', 'Wii', 'an optional tech label')
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

' loads the Item which embeds the element Wii
include('simpleicons-5/W/Wii')

' renders the element
Wii('Wii', 'Wii', 'an optional tech label')
@enduml
```

