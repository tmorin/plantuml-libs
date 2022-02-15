# Swc


```text
simpleicons-6/S/Swc
```

```text
include('simpleicons-6/S/Swc')
```



| Illustration | Swc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/S/Swc.png) | ![illustration for Swc](../../simpleicons-6/S/Swc.Local.png) |




## Swc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Swc
include('simpleicons-6/S/Swc')

' renders the element
Swc('Swc', 'Swc', 'an optional tech label')
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

' loads the Item which embeds the element Swc
include('simpleicons-6/S/Swc')

' renders the element
Swc('Swc', 'Swc', 'an optional tech label')
@enduml
```

