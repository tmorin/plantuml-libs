# Foxtel


```text
simpleicons-6/F/Foxtel
```

```text
include('simpleicons-6/F/Foxtel')
```



| Illustration | Foxtel |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/F/Foxtel.png) | ![illustration for Foxtel](../../simpleicons-6/F/Foxtel.Local.png) |




## Foxtel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Foxtel
include('simpleicons-6/F/Foxtel')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Foxtel
include('simpleicons-6/F/Foxtel')

' renders the element
Foxtel('Foxtel', 'Foxtel', 'an optional tech label')
@enduml
```

