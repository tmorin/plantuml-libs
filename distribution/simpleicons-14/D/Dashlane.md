# Dashlane


```text
simpleicons-14/D/Dashlane
```

```text
include('simpleicons-14/D/Dashlane')
```



| Illustration | Dashlane |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dashlane.png) | ![illustration for Dashlane](../../simpleicons-14/D/Dashlane.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DashlaneXs>`
- `<$DashlaneSm>`
- `<$DashlaneMd>`
- `<$DashlaneLg>`





## Dashlane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dashlane
include('simpleicons-14/D/Dashlane')

' renders the element
Dashlane('Dashlane', 'Dashlane', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dashlane
include('simpleicons-14/D/Dashlane')

' renders the element
Dashlane('Dashlane', 'Dashlane', 'an optional tech label', 'an optional description')
@enduml
```

