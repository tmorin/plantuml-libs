# Disroot


```text
simpleicons-5/D/Disroot
```

```text
include('simpleicons-5/D/Disroot')
```



| Illustration | Disroot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/D/Disroot.png) | ![illustration for Disroot](../../simpleicons-5/D/Disroot.Local.png) |




## Disroot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Disroot
include('simpleicons-5/D/Disroot')

' renders the element
Disroot('Disroot', 'Disroot', 'an optional tech label')
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

' loads the Item which embeds the element Disroot
include('simpleicons-5/D/Disroot')

' renders the element
Disroot('Disroot', 'Disroot', 'an optional tech label')
@enduml
```

