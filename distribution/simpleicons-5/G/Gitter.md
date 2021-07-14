# Gitter


```text
simpleicons-5/G/Gitter
```

```text
include('simpleicons-5/G/Gitter')
```



| Illustration | Gitter |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/G/Gitter.png) | ![illustration for Gitter](../../simpleicons-5/G/Gitter.Local.png) |




## Gitter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Gitter
include('simpleicons-5/G/Gitter')

' renders the element
Gitter('Gitter', 'Gitter', 'an optional tech label')
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

' loads the Item which embeds the element Gitter
include('simpleicons-5/G/Gitter')

' renders the element
Gitter('Gitter', 'Gitter', 'an optional tech label')
@enduml
```

