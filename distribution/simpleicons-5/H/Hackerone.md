# Hackerone


```text
simpleicons-5/H/Hackerone
```

```text
include('simpleicons-5/H/Hackerone')
```



| Illustration | Hackerone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hackerone.png) | ![illustration for Hackerone](../../simpleicons-5/H/Hackerone.Local.png) |




## Hackerone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hackerone
include('simpleicons-5/H/Hackerone')

' renders the element
Hackerone('Hackerone', 'Hackerone', 'an optional tech label')
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

' loads the Item which embeds the element Hackerone
include('simpleicons-5/H/Hackerone')

' renders the element
Hackerone('Hackerone', 'Hackerone', 'an optional tech label')
@enduml
```

