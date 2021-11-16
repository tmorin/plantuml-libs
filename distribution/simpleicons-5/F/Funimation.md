# Funimation


```text
simpleicons-5/F/Funimation
```

```text
include('simpleicons-5/F/Funimation')
```



| Illustration | Funimation |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Funimation.png) | ![illustration for Funimation](../../simpleicons-5/F/Funimation.Local.png) |




## Funimation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Funimation
include('simpleicons-5/F/Funimation')

' renders the element
Funimation('Funimation', 'Funimation', 'an optional tech label')
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

' loads the Item which embeds the element Funimation
include('simpleicons-5/F/Funimation')

' renders the element
Funimation('Funimation', 'Funimation', 'an optional tech label')
@enduml
```
