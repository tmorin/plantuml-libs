# Sublimetext


```text
simpleicons-5/S/Sublimetext
```

```text
include('simpleicons-5/S/Sublimetext')
```



| Illustration | Sublimetext |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Sublimetext.png) | ![illustration for Sublimetext](../../simpleicons-5/S/Sublimetext.Local.png) |




## Sublimetext

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Sublimetext
include('simpleicons-5/S/Sublimetext')

' renders the element
Sublimetext('Sublimetext', 'Sublimetext', 'an optional tech label')
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

' loads the Item which embeds the element Sublimetext
include('simpleicons-5/S/Sublimetext')

' renders the element
Sublimetext('Sublimetext', 'Sublimetext', 'an optional tech label')
@enduml
```

