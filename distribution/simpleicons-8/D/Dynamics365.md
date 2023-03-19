# Dynamics365


```text
simpleicons-8/D/Dynamics365
```

```text
include('simpleicons-8/D/Dynamics365')
```



| Illustration | Dynamics365 |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/D/Dynamics365.png) | ![illustration for Dynamics365](../../simpleicons-8/D/Dynamics365.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$Dynamics365Xs>`
- `<$Dynamics365Sm>`
- `<$Dynamics365Md>`
- `<$Dynamics365Lg>`





## Dynamics365

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Dynamics365
include('simpleicons-8/D/Dynamics365')

' renders the element
Dynamics365('Dynamics365', 'Dynamics365', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dynamics365
include('simpleicons-8/D/Dynamics365')

' renders the element
Dynamics365('Dynamics365', 'Dynamics365', 'an optional tech label', 'an optional description')
@enduml
```

