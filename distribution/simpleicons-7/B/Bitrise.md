# Bitrise


```text
simpleicons-7/B/Bitrise
```

```text
include('simpleicons-7/B/Bitrise')
```



| Illustration | Bitrise |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/B/Bitrise.png) | ![illustration for Bitrise](../../simpleicons-7/B/Bitrise.Local.png) |




## Bitrise

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Bitrise
include('simpleicons-7/B/Bitrise')

' renders the element
Bitrise('Bitrise', 'Bitrise', 'an optional tech label')
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

' loads the Item which embeds the element Bitrise
include('simpleicons-7/B/Bitrise')

' renders the element
Bitrise('Bitrise', 'Bitrise', 'an optional tech label')
@enduml
```

