# Stackoverflow


```text
simpleicons-8/S/Stackoverflow
```

```text
include('simpleicons-8/S/Stackoverflow')
```



| Illustration | Stackoverflow |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Stackoverflow.png) | ![illustration for Stackoverflow](../../simpleicons-8/S/Stackoverflow.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StackoverflowXs>`
- `<$StackoverflowSm>`
- `<$StackoverflowMd>`
- `<$StackoverflowLg>`





## Stackoverflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Stackoverflow
include('simpleicons-8/S/Stackoverflow')

' renders the element
Stackoverflow('Stackoverflow', 'Stackoverflow', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Stackoverflow
include('simpleicons-8/S/Stackoverflow')

' renders the element
Stackoverflow('Stackoverflow', 'Stackoverflow', 'an optional tech label', 'an optional description')
@enduml
```

