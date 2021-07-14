# Typescript


```text
simpleicons-5/T/Typescript
```

```text
include('simpleicons-5/T/Typescript')
```



| Illustration | Typescript |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Typescript.png) | ![illustration for Typescript](../../simpleicons-5/T/Typescript.Local.png) |




## Typescript

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Typescript
include('simpleicons-5/T/Typescript')

' renders the element
Typescript('Typescript', 'Typescript', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Typescript
include('simpleicons-5/T/Typescript')

' renders the element
Typescript('Typescript', 'Typescript', 'an optional tech label')
@enduml
```

