# Appveyor


```text
simpleicons-5/A/Appveyor
```

```text
include('simpleicons-5/A/Appveyor')
```



| Illustration | Appveyor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Appveyor.png) | ![illustration for Appveyor](../../simpleicons-5/A/Appveyor.Local.png) |




## Appveyor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Appveyor
include('simpleicons-5/A/Appveyor')

' renders the element
Appveyor('Appveyor', 'Appveyor', 'an optional tech label')
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

' loads the Item which embeds the element Appveyor
include('simpleicons-5/A/Appveyor')

' renders the element
Appveyor('Appveyor', 'Appveyor', 'an optional tech label')
@enduml
```

