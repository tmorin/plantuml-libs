# Octopusdeploy


```text
simpleicons-8/O/Octopusdeploy
```

```text
include('simpleicons-8/O/Octopusdeploy')
```



| Illustration | Octopusdeploy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/O/Octopusdeploy.png) | ![illustration for Octopusdeploy](../../simpleicons-8/O/Octopusdeploy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OctopusdeployXs>`
- `<$OctopusdeploySm>`
- `<$OctopusdeployMd>`
- `<$OctopusdeployLg>`





## Octopusdeploy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Octopusdeploy
include('simpleicons-8/O/Octopusdeploy')

' renders the element
Octopusdeploy('Octopusdeploy', 'Octopusdeploy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Octopusdeploy
include('simpleicons-8/O/Octopusdeploy')

' renders the element
Octopusdeploy('Octopusdeploy', 'Octopusdeploy', 'an optional tech label', 'an optional description')
@enduml
```

