# Headspace


```text
simpleicons-6/H/Headspace
```

```text
include('simpleicons-6/H/Headspace')
```



| Illustration | Headspace |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/H/Headspace.png) | ![illustration for Headspace](../../simpleicons-6/H/Headspace.Local.png) |




## Headspace

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Headspace
include('simpleicons-6/H/Headspace')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Headspace
include('simpleicons-6/H/Headspace')

' renders the element
Headspace('Headspace', 'Headspace', 'an optional tech label')
@enduml
```

