# Headspace


```text
simpleicons-5/H/Headspace
```

```text
include('simpleicons-5/H/Headspace')
```



| Illustration | Headspace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Headspace.png) | ![illustration for Headspace](../../simpleicons-5/H/Headspace.Local.png) |




## Headspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Headspace
include('simpleicons-5/H/Headspace')

' renders the element
Headspace('Headspace', 'Headspace', 'an optional tech label')
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

' loads the Item which embeds the element Headspace
include('simpleicons-5/H/Headspace')

' renders the element
Headspace('Headspace', 'Headspace', 'an optional tech label')
@enduml
```

