# Hasura


```text
simpleicons/H/Hasura
```

```text
include('simpleicons/H/Hasura')
```



| Illustration | Hasura |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hasura.png) | ![illustration for Hasura](../../simpleicons/H/Hasura.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HasuraXs>`
- `<$HasuraSm>`
- `<$HasuraMd>`
- `<$HasuraLg>`





## Hasura

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hasura
include('simpleicons/H/Hasura')

' renders the element
Hasura('Hasura', 'Hasura', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hasura
include('simpleicons/H/Hasura')

' renders the element
Hasura('Hasura', 'Hasura', 'an optional tech label', 'an optional description')
@enduml
```

