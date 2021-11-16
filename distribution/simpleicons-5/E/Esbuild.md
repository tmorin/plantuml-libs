# Esbuild


```text
simpleicons-5/E/Esbuild
```

```text
include('simpleicons-5/E/Esbuild')
```



| Illustration | Esbuild |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Esbuild.png) | ![illustration for Esbuild](../../simpleicons-5/E/Esbuild.Local.png) |




## Esbuild

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Esbuild
include('simpleicons-5/E/Esbuild')

' renders the element
Esbuild('Esbuild', 'Esbuild', 'an optional tech label')
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

' loads the Item which embeds the element Esbuild
include('simpleicons-5/E/Esbuild')

' renders the element
Esbuild('Esbuild', 'Esbuild', 'an optional tech label')
@enduml
```

