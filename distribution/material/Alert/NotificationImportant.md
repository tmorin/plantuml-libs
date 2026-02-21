# NotificationImportant


```text
material/Alert/NotificationImportant
```

```text
include('material/Alert/NotificationImportant')
```



| Illustration | NotificationImportant |
| :---: | :---: |
| ![illustration for Illustration](../../material/Alert/NotificationImportant.png) | ![illustration for NotificationImportant](../../material/Alert/NotificationImportant.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$NotificationImportantXs>`
- `<$NotificationImportantSm>`
- `<$NotificationImportantMd>`
- `<$NotificationImportantLg>`





## NotificationImportant

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element NotificationImportant
include('material/Alert/NotificationImportant')

' renders the element
NotificationImportant('NotificationImportant', 'Notification Important', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element NotificationImportant
include('material/Alert/NotificationImportant')

' renders the element
NotificationImportant('NotificationImportant', 'Notification Important', 'an optional tech label', 'an optional description')
@enduml
```

