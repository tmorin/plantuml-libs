# Conventionalcommits


```text
simpleicons-8/C/Conventionalcommits
```

```text
include('simpleicons-8/C/Conventionalcommits')
```



| Illustration | Conventionalcommits |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/C/Conventionalcommits.png) | ![illustration for Conventionalcommits](../../simpleicons-8/C/Conventionalcommits.Local.png) |




## Conventionalcommits

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Conventionalcommits
include('simpleicons-8/C/Conventionalcommits')

' renders the element
Conventionalcommits('Conventionalcommits', 'Conventionalcommits', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Conventionalcommits
include('simpleicons-8/C/Conventionalcommits')

' renders the element
Conventionalcommits('Conventionalcommits', 'Conventionalcommits', 'an optional tech label', 'an optional description')
@enduml
```

