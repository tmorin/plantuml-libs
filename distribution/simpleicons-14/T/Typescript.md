# Typescript


```text
simpleicons-14/T/Typescript
```

```text
include('simpleicons-14/T/Typescript')
```



| Illustration | Typescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Typescript.png) | ![illustration for Typescript](../../simpleicons-14/T/Typescript.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TypescriptXs>`
- `<$TypescriptSm>`
- `<$TypescriptMd>`
- `<$TypescriptLg>`





## Typescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Typescript
include('simpleicons-14/T/Typescript')

' renders the element
Typescript('Typescript', 'Typescript', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Typescript
include('simpleicons-14/T/Typescript')

' renders the element
Typescript('Typescript', 'Typescript', 'an optional tech label', 'an optional description')
@enduml
```

