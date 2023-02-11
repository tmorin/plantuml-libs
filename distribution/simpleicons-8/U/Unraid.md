# Unraid


```text
simpleicons-8/U/Unraid
```

```text
include('simpleicons-8/U/Unraid')
```



| Illustration | Unraid |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/U/Unraid.png) | ![illustration for Unraid](../../simpleicons-8/U/Unraid.Local.png) |




## Unraid

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Unraid
include('simpleicons-8/U/Unraid')

' renders the element
Unraid('Unraid', 'Unraid', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Unraid
include('simpleicons-8/U/Unraid')

' renders the element
Unraid('Unraid', 'Unraid', 'an optional tech label', 'an optional description')
@enduml
```

