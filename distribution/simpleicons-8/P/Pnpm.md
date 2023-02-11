# Pnpm


```text
simpleicons-8/P/Pnpm
```

```text
include('simpleicons-8/P/Pnpm')
```



| Illustration | Pnpm |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/P/Pnpm.png) | ![illustration for Pnpm](../../simpleicons-8/P/Pnpm.Local.png) |




## Pnpm

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Pnpm
include('simpleicons-8/P/Pnpm')

' renders the element
Pnpm('Pnpm', 'Pnpm', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pnpm
include('simpleicons-8/P/Pnpm')

' renders the element
Pnpm('Pnpm', 'Pnpm', 'an optional tech label', 'an optional description')
@enduml
```

