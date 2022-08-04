# Amd


```text
simpleicons-7/A/Amd
```

```text
include('simpleicons-7/A/Amd')
```



| Illustration | Amd |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/A/Amd.png) | ![illustration for Amd](../../simpleicons-7/A/Amd.Local.png) |




## Amd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Amd
include('simpleicons-7/A/Amd')

' renders the element
Amd('Amd', 'Amd', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Amd
include('simpleicons-7/A/Amd')

' renders the element
Amd('Amd', 'Amd', 'an optional tech label', 'an optional description')
@enduml
```

