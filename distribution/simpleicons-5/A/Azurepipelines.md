# Azurepipelines


```text
simpleicons-5/A/Azurepipelines
```

```text
include('simpleicons-5/A/Azurepipelines')
```



| Illustration | Azurepipelines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/A/Azurepipelines.png) | ![illustration for Azurepipelines](../../simpleicons-5/A/Azurepipelines.Local.png) |




## Azurepipelines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Azurepipelines
include('simpleicons-5/A/Azurepipelines')

' renders the element
Azurepipelines('Azurepipelines', 'Azurepipelines', 'an optional tech label')
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

' loads the Item which embeds the element Azurepipelines
include('simpleicons-5/A/Azurepipelines')

' renders the element
Azurepipelines('Azurepipelines', 'Azurepipelines', 'an optional tech label')
@enduml
```

