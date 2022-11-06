# Stackblitz


```text
simpleicons-7/S/Stackblitz
```

```text
include('simpleicons-7/S/Stackblitz')
```



| Illustration | Stackblitz |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Stackblitz.png) | ![illustration for Stackblitz](../../simpleicons-7/S/Stackblitz.Local.png) |




## Stackblitz

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Stackblitz
include('simpleicons-7/S/Stackblitz')

' renders the element
Stackblitz('Stackblitz', 'Stackblitz', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Stackblitz
include('simpleicons-7/S/Stackblitz')

' renders the element
Stackblitz('Stackblitz', 'Stackblitz', 'an optional tech label', 'an optional description')
@enduml
```

