# Mega


```text
simpleicons-7/M/Mega
```

```text
include('simpleicons-7/M/Mega')
```



| Illustration | Mega |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/M/Mega.png) | ![illustration for Mega](../../simpleicons-7/M/Mega.Local.png) |




## Mega

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Mega
include('simpleicons-7/M/Mega')

' renders the element
Mega('Mega', 'Mega', 'an optional tech label')
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

' loads the Item which embeds the element Mega
include('simpleicons-7/M/Mega')

' renders the element
Mega('Mega', 'Mega', 'an optional tech label')
@enduml
```

