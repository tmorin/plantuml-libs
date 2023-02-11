# Fantom


```text
simpleicons-8/F/Fantom
```

```text
include('simpleicons-8/F/Fantom')
```



| Illustration | Fantom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fantom.png) | ![illustration for Fantom](../../simpleicons-8/F/Fantom.Local.png) |




## Fantom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fantom
include('simpleicons-8/F/Fantom')

' renders the element
Fantom('Fantom', 'Fantom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fantom
include('simpleicons-8/F/Fantom')

' renders the element
Fantom('Fantom', 'Fantom', 'an optional tech label', 'an optional description')
@enduml
```

