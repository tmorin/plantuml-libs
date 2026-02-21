# Datastax


```text
simpleicons/D/Datastax
```

```text
include('simpleicons/D/Datastax')
```



| Illustration | Datastax |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Datastax.png) | ![illustration for Datastax](../../simpleicons/D/Datastax.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DatastaxXs>`
- `<$DatastaxSm>`
- `<$DatastaxMd>`
- `<$DatastaxLg>`





## Datastax

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Datastax
include('simpleicons/D/Datastax')

' renders the element
Datastax('Datastax', 'Datastax', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Datastax
include('simpleicons/D/Datastax')

' renders the element
Datastax('Datastax', 'Datastax', 'an optional tech label', 'an optional description')
@enduml
```

