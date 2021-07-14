# Sololearn


```text
simpleicons-5/S/Sololearn
```

```text
include('simpleicons-5/S/Sololearn')
```



| Illustration | Sololearn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sololearn.png) | ![illustration for Sololearn](../../simpleicons-5/S/Sololearn.Local.png) |




## Sololearn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sololearn
include('simpleicons-5/S/Sololearn')

' renders the element
Sololearn('Sololearn', 'Sololearn', 'an optional tech label')
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

' loads the Item which embeds the element Sololearn
include('simpleicons-5/S/Sololearn')

' renders the element
Sololearn('Sololearn', 'Sololearn', 'an optional tech label')
@enduml
```

