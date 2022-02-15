# Clyp


```text
simpleicons-6/C/Clyp
```

```text
include('simpleicons-6/C/Clyp')
```



| Illustration | Clyp |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/C/Clyp.png) | ![illustration for Clyp](../../simpleicons-6/C/Clyp.Local.png) |




## Clyp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Clyp
include('simpleicons-6/C/Clyp')

' renders the element
Clyp('Clyp', 'Clyp', 'an optional tech label')
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

' loads the Item which embeds the element Clyp
include('simpleicons-6/C/Clyp')

' renders the element
Clyp('Clyp', 'Clyp', 'an optional tech label')
@enduml
```

