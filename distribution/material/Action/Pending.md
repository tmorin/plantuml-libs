# Pending


```text
material/Action/Pending
```

```text
include('material/Action/Pending')
```



| Illustration | Pending |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/Pending.png) | ![illustration for Pending](../../material/Action/Pending.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PendingXs>`
- `<$PendingSm>`
- `<$PendingMd>`
- `<$PendingLg>`





## Pending

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Pending
include('material/Action/Pending')

' renders the element
Pending('Pending', 'Pending', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Pending
include('material/Action/Pending')

' renders the element
Pending('Pending', 'Pending', 'an optional tech label', 'an optional description')
@enduml
```

