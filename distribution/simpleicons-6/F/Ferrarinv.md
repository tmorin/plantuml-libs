# Ferrarinv


```text
simpleicons-6/F/Ferrarinv
```

```text
include('simpleicons-6/F/Ferrarinv')
```



| Illustration | Ferrarinv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Ferrarinv.png) | ![illustration for Ferrarinv](../../simpleicons-6/F/Ferrarinv.Local.png) |




## Ferrarinv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ferrarinv
include('simpleicons-6/F/Ferrarinv')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Ferrarinv
include('simpleicons-6/F/Ferrarinv')

' renders the element
Ferrarinv('Ferrarinv', 'Ferrarinv', 'an optional tech label')
@enduml
```

