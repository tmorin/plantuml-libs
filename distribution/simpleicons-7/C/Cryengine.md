# Cryengine


```text
simpleicons-7/C/Cryengine
```

```text
include('simpleicons-7/C/Cryengine')
```



| Illustration | Cryengine |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/C/Cryengine.png) | ![illustration for Cryengine](../../simpleicons-7/C/Cryengine.Local.png) |




## Cryengine

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Cryengine
include('simpleicons-7/C/Cryengine')

' renders the element
Cryengine('Cryengine', 'Cryengine', 'an optional tech label')
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

' loads the Item which embeds the element Cryengine
include('simpleicons-7/C/Cryengine')

' renders the element
Cryengine('Cryengine', 'Cryengine', 'an optional tech label')
@enduml
```

