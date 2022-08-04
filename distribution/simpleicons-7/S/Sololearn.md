# Sololearn


```text
simpleicons-7/S/Sololearn
```

```text
include('simpleicons-7/S/Sololearn')
```



| Illustration | Sololearn |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Sololearn.png) | ![illustration for Sololearn](../../simpleicons-7/S/Sololearn.Local.png) |




## Sololearn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Sololearn
include('simpleicons-7/S/Sololearn')

' renders the element
Sololearn('Sololearn', 'Sololearn', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Sololearn
include('simpleicons-7/S/Sololearn')

' renders the element
Sololearn('Sololearn', 'Sololearn', 'an optional tech label', 'an optional description')
@enduml
```

