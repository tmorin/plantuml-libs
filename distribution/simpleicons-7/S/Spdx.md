# Spdx


```text
simpleicons-7/S/Spdx
```

```text
include('simpleicons-7/S/Spdx')
```



| Illustration | Spdx |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Spdx.png) | ![illustration for Spdx](../../simpleicons-7/S/Spdx.Local.png) |




## Spdx

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Spdx
include('simpleicons-7/S/Spdx')

' renders the element
Spdx('Spdx', 'Spdx', 'an optional tech label')
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

' loads the Item which embeds the element Spdx
include('simpleicons-7/S/Spdx')

' renders the element
Spdx('Spdx', 'Spdx', 'an optional tech label')
@enduml
```

