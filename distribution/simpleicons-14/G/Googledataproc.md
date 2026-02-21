# Googledataproc


```text
simpleicons-14/G/Googledataproc
```

```text
include('simpleicons-14/G/Googledataproc')
```



| Illustration | Googledataproc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/G/Googledataproc.png) | ![illustration for Googledataproc](../../simpleicons-14/G/Googledataproc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogledataprocXs>`
- `<$GoogledataprocSm>`
- `<$GoogledataprocMd>`
- `<$GoogledataprocLg>`





## Googledataproc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googledataproc
include('simpleicons-14/G/Googledataproc')

' renders the element
Googledataproc('Googledataproc', 'Googledataproc', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Googledataproc
include('simpleicons-14/G/Googledataproc')

' renders the element
Googledataproc('Googledataproc', 'Googledataproc', 'an optional tech label', 'an optional description')
@enduml
```

