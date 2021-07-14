# Amd


```text
simpleicons-5/A/Amd
```

```text
include('simpleicons-5/A/Amd')
```



| Illustration | Amd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Amd.png) | ![illustration for Amd](../../simpleicons-5/A/Amd.Local.png) |




## Amd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Amd
include('simpleicons-5/A/Amd')

' renders the element
Amd('Amd', 'Amd', 'an optional tech label')
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

' loads the Item which embeds the element Amd
include('simpleicons-5/A/Amd')

' renders the element
Amd('Amd', 'Amd', 'an optional tech label')
@enduml
```

