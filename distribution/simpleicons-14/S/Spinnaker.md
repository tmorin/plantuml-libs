# Spinnaker


```text
simpleicons-14/S/Spinnaker
```

```text
include('simpleicons-14/S/Spinnaker')
```



| Illustration | Spinnaker |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Spinnaker.png) | ![illustration for Spinnaker](../../simpleicons-14/S/Spinnaker.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpinnakerXs>`
- `<$SpinnakerSm>`
- `<$SpinnakerMd>`
- `<$SpinnakerLg>`





## Spinnaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Spinnaker
include('simpleicons-14/S/Spinnaker')

' renders the element
Spinnaker('Spinnaker', 'Spinnaker', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Spinnaker
include('simpleicons-14/S/Spinnaker')

' renders the element
Spinnaker('Spinnaker', 'Spinnaker', 'an optional tech label', 'an optional description')
@enduml
```

