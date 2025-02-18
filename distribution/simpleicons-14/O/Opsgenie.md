# Opsgenie


```text
simpleicons-14/O/Opsgenie
```

```text
include('simpleicons-14/O/Opsgenie')
```



| Illustration | Opsgenie |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/O/Opsgenie.png) | ![illustration for Opsgenie](../../simpleicons-14/O/Opsgenie.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpsgenieXs>`
- `<$OpsgenieSm>`
- `<$OpsgenieMd>`
- `<$OpsgenieLg>`





## Opsgenie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Opsgenie
include('simpleicons-14/O/Opsgenie')

' renders the element
Opsgenie('Opsgenie', 'Opsgenie', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opsgenie
include('simpleicons-14/O/Opsgenie')

' renders the element
Opsgenie('Opsgenie', 'Opsgenie', 'an optional tech label', 'an optional description')
@enduml
```

