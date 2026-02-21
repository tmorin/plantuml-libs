# Octopusdeploy


```text
simpleicons/O/Octopusdeploy
```

```text
include('simpleicons/O/Octopusdeploy')
```



| Illustration | Octopusdeploy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Octopusdeploy.png) | ![illustration for Octopusdeploy](../../simpleicons/O/Octopusdeploy.Local.png) |



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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Octopusdeploy
include('simpleicons/O/Octopusdeploy')

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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Octopusdeploy
include('simpleicons/O/Octopusdeploy')

' renders the element
Octopusdeploy('Octopusdeploy', 'Octopusdeploy', 'an optional tech label', 'an optional description')
@enduml
```

