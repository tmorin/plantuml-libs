# Fathom


```text
simpleicons-8/F/Fathom
```

```text
include('simpleicons-8/F/Fathom')
```



| Illustration | Fathom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/F/Fathom.png) | ![illustration for Fathom](../../simpleicons-8/F/Fathom.Local.png) |




## Fathom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Fathom
include('simpleicons-8/F/Fathom')

' renders the element
Fathom('Fathom', 'Fathom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fathom
include('simpleicons-8/F/Fathom')

' renders the element
Fathom('Fathom', 'Fathom', 'an optional tech label', 'an optional description')
@enduml
```

