# Azurepipelines


```text
simpleicons-6/A/Azurepipelines
```

```text
include('simpleicons-6/A/Azurepipelines')
```



| Illustration | Azurepipelines |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-6/A/Azurepipelines.png) | ![illustration for Azurepipelines](../../simpleicons-6/A/Azurepipelines.Local.png) |




## Azurepipelines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Azurepipelines
include('simpleicons-6/A/Azurepipelines')

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
include('simpleicons-6/bootstrap')

' loads the Item which embeds the element Azurepipelines
include('simpleicons-6/A/Azurepipelines')

' renders the element
Azurepipelines('Azurepipelines', 'Azurepipelines', 'an optional tech label')
@enduml
```

