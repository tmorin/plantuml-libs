# Lerna


```text
simpleicons-7/L/Lerna
```

```text
include('simpleicons-7/L/Lerna')
```



| Illustration | Lerna |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/L/Lerna.png) | ![illustration for Lerna](../../simpleicons-7/L/Lerna.Local.png) |




## Lerna

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Lerna
include('simpleicons-7/L/Lerna')

' renders the element
Lerna('Lerna', 'Lerna', 'an optional tech label')
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

' loads the Item which embeds the element Lerna
include('simpleicons-7/L/Lerna')

' renders the element
Lerna('Lerna', 'Lerna', 'an optional tech label')
@enduml
```

