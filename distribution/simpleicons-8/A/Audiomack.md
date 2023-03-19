# Audiomack


```text
simpleicons-8/A/Audiomack
```

```text
include('simpleicons-8/A/Audiomack')
```



| Illustration | Audiomack |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Audiomack.png) | ![illustration for Audiomack](../../simpleicons-8/A/Audiomack.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AudiomackXs>`
- `<$AudiomackSm>`
- `<$AudiomackMd>`
- `<$AudiomackLg>`





## Audiomack

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Audiomack
include('simpleicons-8/A/Audiomack')

' renders the element
Audiomack('Audiomack', 'Audiomack', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Audiomack
include('simpleicons-8/A/Audiomack')

' renders the element
Audiomack('Audiomack', 'Audiomack', 'an optional tech label', 'an optional description')
@enduml
```

