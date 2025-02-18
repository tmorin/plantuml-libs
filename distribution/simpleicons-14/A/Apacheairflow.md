# Apacheairflow


```text
simpleicons-14/A/Apacheairflow
```

```text
include('simpleicons-14/A/Apacheairflow')
```



| Illustration | Apacheairflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/A/Apacheairflow.png) | ![illustration for Apacheairflow](../../simpleicons-14/A/Apacheairflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ApacheairflowXs>`
- `<$ApacheairflowSm>`
- `<$ApacheairflowMd>`
- `<$ApacheairflowLg>`





## Apacheairflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Apacheairflow
include('simpleicons-14/A/Apacheairflow')

' renders the element
Apacheairflow('Apacheairflow', 'Apacheairflow', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Apacheairflow
include('simpleicons-14/A/Apacheairflow')

' renders the element
Apacheairflow('Apacheairflow', 'Apacheairflow', 'an optional tech label', 'an optional description')
@enduml
```

