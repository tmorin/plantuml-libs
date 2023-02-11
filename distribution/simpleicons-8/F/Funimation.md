# Funimation


```text
simpleicons-8/F/Funimation
```

```text
include('simpleicons-8/F/Funimation')
```



| Illustration | Funimation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Funimation.png) | ![illustration for Funimation](../../simpleicons-8/F/Funimation.Local.png) |




## Funimation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Funimation
include('simpleicons-8/F/Funimation')

' renders the element
Funimation('Funimation', 'Funimation', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Funimation
include('simpleicons-8/F/Funimation')

' renders the element
Funimation('Funimation', 'Funimation', 'an optional tech label', 'an optional description')
@enduml
```

