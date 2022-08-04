# Vexxhost


```text
simpleicons-7/V/Vexxhost
```

```text
include('simpleicons-7/V/Vexxhost')
```



| Illustration | Vexxhost |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/V/Vexxhost.png) | ![illustration for Vexxhost](../../simpleicons-7/V/Vexxhost.Local.png) |




## Vexxhost

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Vexxhost
include('simpleicons-7/V/Vexxhost')

' renders the element
Vexxhost('Vexxhost', 'Vexxhost', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Vexxhost
include('simpleicons-7/V/Vexxhost')

' renders the element
Vexxhost('Vexxhost', 'Vexxhost', 'an optional tech label', 'an optional description')
@enduml
```

