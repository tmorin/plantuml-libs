# Foxtel


```text
simpleicons-5/F/Foxtel
```

```text
include('simpleicons-5/F/Foxtel')
```



| Illustration | Foxtel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/F/Foxtel.png) | ![illustration for Foxtel](../../simpleicons-5/F/Foxtel.Local.png) |




## Foxtel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Foxtel
include('simpleicons-5/F/Foxtel')

' renders the element
Foxtel('Foxtel', 'Foxtel', 'an optional tech label')
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

' loads the Item which embeds the element Foxtel
include('simpleicons-5/F/Foxtel')

' renders the element
Foxtel('Foxtel', 'Foxtel', 'an optional tech label')
@enduml
```

