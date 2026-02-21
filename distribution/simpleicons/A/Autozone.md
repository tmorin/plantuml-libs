# Autozone


```text
simpleicons/A/Autozone
```

```text
include('simpleicons/A/Autozone')
```



| Illustration | Autozone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/A/Autozone.png) | ![illustration for Autozone](../../simpleicons/A/Autozone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AutozoneXs>`
- `<$AutozoneSm>`
- `<$AutozoneMd>`
- `<$AutozoneLg>`





## Autozone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Autozone
include('simpleicons/A/Autozone')

' renders the element
Autozone('Autozone', 'Autozone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Autozone
include('simpleicons/A/Autozone')

' renders the element
Autozone('Autozone', 'Autozone', 'an optional tech label', 'an optional description')
@enduml
```

