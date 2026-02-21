# Akiflow


```text
simpleicons-14/A/Akiflow
```

```text
include('simpleicons-14/A/Akiflow')
```



| Illustration | Akiflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Akiflow.png) | ![illustration for Akiflow](../../simpleicons-14/A/Akiflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AkiflowXs>`
- `<$AkiflowSm>`
- `<$AkiflowMd>`
- `<$AkiflowLg>`





## Akiflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Akiflow
include('simpleicons-14/A/Akiflow')

' renders the element
Akiflow('Akiflow', 'Akiflow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Akiflow
include('simpleicons-14/A/Akiflow')

' renders the element
Akiflow('Akiflow', 'Akiflow', 'an optional tech label', 'an optional description')
@enduml
```

