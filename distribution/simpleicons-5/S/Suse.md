# Suse


```text
simpleicons-5/S/Suse
```

```text
include('simpleicons-5/S/Suse')
```



| Illustration | Suse |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Suse.png) | ![illustration for Suse](../../simpleicons-5/S/Suse.Local.png) |




## Suse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Suse
include('simpleicons-5/S/Suse')

' renders the element
Suse('Suse', 'Suse', 'an optional tech label')
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

' loads the Item which embeds the element Suse
include('simpleicons-5/S/Suse')

' renders the element
Suse('Suse', 'Suse', 'an optional tech label')
@enduml
```

