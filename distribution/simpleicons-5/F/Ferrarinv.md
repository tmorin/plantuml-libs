# Ferrarinv


```text
simpleicons-5/F/Ferrarinv
```

```text
include('simpleicons-5/F/Ferrarinv')
```



| Illustration | Ferrarinv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Ferrarinv.png) | ![illustration for Ferrarinv](../../simpleicons-5/F/Ferrarinv.Local.png) |




## Ferrarinv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ferrarinv
include('simpleicons-5/F/Ferrarinv')

' renders the element
Ferrarinv('Ferrarinv', 'Ferrarinv', 'an optional tech label')
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

' loads the Item which embeds the element Ferrarinv
include('simpleicons-5/F/Ferrarinv')

' renders the element
Ferrarinv('Ferrarinv', 'Ferrarinv', 'an optional tech label')
@enduml
```

