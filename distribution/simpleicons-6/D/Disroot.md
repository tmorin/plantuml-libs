# Disroot


```text
simpleicons-6/D/Disroot
```

```text
include('simpleicons-6/D/Disroot')
```



| Illustration | Disroot |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/D/Disroot.png) | ![illustration for Disroot](../../simpleicons-6/D/Disroot.Local.png) |




## Disroot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Disroot
include('simpleicons-6/D/Disroot')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Disroot
include('simpleicons-6/D/Disroot')

' renders the element
Disroot('Disroot', 'Disroot', 'an optional tech label')
@enduml
```

