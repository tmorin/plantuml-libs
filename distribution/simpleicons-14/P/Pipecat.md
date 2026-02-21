# Pipecat


```text
simpleicons-14/P/Pipecat
```

```text
include('simpleicons-14/P/Pipecat')
```



| Illustration | Pipecat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Pipecat.png) | ![illustration for Pipecat](../../simpleicons-14/P/Pipecat.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PipecatXs>`
- `<$PipecatSm>`
- `<$PipecatMd>`
- `<$PipecatLg>`





## Pipecat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Pipecat
include('simpleicons-14/P/Pipecat')

' renders the element
Pipecat('Pipecat', 'Pipecat', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pipecat
include('simpleicons-14/P/Pipecat')

' renders the element
Pipecat('Pipecat', 'Pipecat', 'an optional tech label', 'an optional description')
@enduml
```

