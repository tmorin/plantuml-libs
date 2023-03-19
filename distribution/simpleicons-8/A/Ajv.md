# Ajv


```text
simpleicons-8/A/Ajv
```

```text
include('simpleicons-8/A/Ajv')
```



| Illustration | Ajv |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/A/Ajv.png) | ![illustration for Ajv](../../simpleicons-8/A/Ajv.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AjvXs>`
- `<$AjvSm>`
- `<$AjvMd>`
- `<$AjvLg>`





## Ajv

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ajv
include('simpleicons-8/A/Ajv')

' renders the element
Ajv('Ajv', 'Ajv', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Ajv
include('simpleicons-8/A/Ajv')

' renders the element
Ajv('Ajv', 'Ajv', 'an optional tech label', 'an optional description')
@enduml
```

