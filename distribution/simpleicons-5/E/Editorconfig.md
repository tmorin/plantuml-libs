# Editorconfig


```text
simpleicons-5/E/Editorconfig
```

```text
include('simpleicons-5/E/Editorconfig')
```



| Illustration | Editorconfig |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/E/Editorconfig.png) | ![illustration for Editorconfig](../../simpleicons-5/E/Editorconfig.Local.png) |




## Editorconfig

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Editorconfig
include('simpleicons-5/E/Editorconfig')

' renders the element
Editorconfig('Editorconfig', 'Editorconfig', 'an optional tech label')
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

' loads the Item which embeds the element Editorconfig
include('simpleicons-5/E/Editorconfig')

' renders the element
Editorconfig('Editorconfig', 'Editorconfig', 'an optional tech label')
@enduml
```

