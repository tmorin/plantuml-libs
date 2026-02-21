# Akiflow


```text
simpleicons/A/Akiflow
```

```text
include('simpleicons/A/Akiflow')
```



| Illustration | Akiflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Akiflow.png) | ![illustration for Akiflow](../../simpleicons/A/Akiflow.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Akiflow
include('simpleicons/A/Akiflow')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Akiflow
include('simpleicons/A/Akiflow')

' renders the element
Akiflow('Akiflow', 'Akiflow', 'an optional tech label', 'an optional description')
@enduml
```

