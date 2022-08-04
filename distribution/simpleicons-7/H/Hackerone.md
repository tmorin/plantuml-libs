# Hackerone


```text
simpleicons-7/H/Hackerone
```

```text
include('simpleicons-7/H/Hackerone')
```



| Illustration | Hackerone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Hackerone.png) | ![illustration for Hackerone](../../simpleicons-7/H/Hackerone.Local.png) |




## Hackerone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Hackerone
include('simpleicons-7/H/Hackerone')

' renders the element
Hackerone('Hackerone', 'Hackerone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hackerone
include('simpleicons-7/H/Hackerone')

' renders the element
Hackerone('Hackerone', 'Hackerone', 'an optional tech label', 'an optional description')
@enduml
```

