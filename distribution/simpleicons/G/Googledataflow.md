# Googledataflow


```text
simpleicons/G/Googledataflow
```

```text
include('simpleicons/G/Googledataflow')
```



| Illustration | Googledataflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/G/Googledataflow.png) | ![illustration for Googledataflow](../../simpleicons/G/Googledataflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GoogledataflowXs>`
- `<$GoogledataflowSm>`
- `<$GoogledataflowMd>`
- `<$GoogledataflowLg>`





## Googledataflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Googledataflow
include('simpleicons/G/Googledataflow')

' renders the element
Googledataflow('Googledataflow', 'Googledataflow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Googledataflow
include('simpleicons/G/Googledataflow')

' renders the element
Googledataflow('Googledataflow', 'Googledataflow', 'an optional tech label', 'an optional description')
@enduml
```

