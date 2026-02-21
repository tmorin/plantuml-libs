# DoNotDisturbOn


```text
material/Notification/DoNotDisturbOn
```

```text
include('material/Notification/DoNotDisturbOn')
```



| Illustration | DoNotDisturbOn |
| :---: | :---: |
| ![illustration for Illustration](../../material/Notification/DoNotDisturbOn.png) | ![illustration for DoNotDisturbOn](../../material/Notification/DoNotDisturbOn.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DoNotDisturbOnXs>`
- `<$DoNotDisturbOnSm>`
- `<$DoNotDisturbOnMd>`
- `<$DoNotDisturbOnLg>`





## DoNotDisturbOn

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DoNotDisturbOn
include('material/Notification/DoNotDisturbOn')

' renders the element
DoNotDisturbOn('DoNotDisturbOn', 'Do Not Disturb On', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element DoNotDisturbOn
include('material/Notification/DoNotDisturbOn')

' renders the element
DoNotDisturbOn('DoNotDisturbOn', 'Do Not Disturb On', 'an optional tech label', 'an optional description')
@enduml
```

