# Trpc


```text
simpleicons-7/T/Trpc
```

```text
include('simpleicons-7/T/Trpc')
```



| Illustration | Trpc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/T/Trpc.png) | ![illustration for Trpc](../../simpleicons-7/T/Trpc.Local.png) |




## Trpc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Trpc
include('simpleicons-7/T/Trpc')

' renders the element
Trpc('Trpc', 'Trpc', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Trpc
include('simpleicons-7/T/Trpc')

' renders the element
Trpc('Trpc', 'Trpc', 'an optional tech label', 'an optional description')
@enduml
```

