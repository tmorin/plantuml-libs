# Hasura


```text
simpleicons-7/H/Hasura
```

```text
include('simpleicons-7/H/Hasura')
```



| Illustration | Hasura |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/H/Hasura.png) | ![illustration for Hasura](../../simpleicons-7/H/Hasura.Local.png) |




## Hasura

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Hasura
include('simpleicons-7/H/Hasura')

' renders the element
Hasura('Hasura', 'Hasura', 'an optional tech label')
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

' loads the Item which embeds the element Hasura
include('simpleicons-7/H/Hasura')

' renders the element
Hasura('Hasura', 'Hasura', 'an optional tech label')
@enduml
```

