# Oculus


```text
simpleicons/O/Oculus
```

```text
include('simpleicons/O/Oculus')
```



| Illustration | Oculus |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Oculus.png) | ![illustration for Oculus](../../simpleicons/O/Oculus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OculusXs>`
- `<$OculusSm>`
- `<$OculusMd>`
- `<$OculusLg>`





## Oculus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Oculus
include('simpleicons/O/Oculus')

' renders the element
Oculus('Oculus', 'Oculus', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Oculus
include('simpleicons/O/Oculus')

' renders the element
Oculus('Oculus', 'Oculus', 'an optional tech label', 'an optional description')
@enduml
```

