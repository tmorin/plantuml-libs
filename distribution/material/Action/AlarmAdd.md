# AlarmAdd


```text
material/Action/AlarmAdd
```

```text
include('material/Action/AlarmAdd')
```



| Illustration | AlarmAdd |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/AlarmAdd.png) | ![illustration for AlarmAdd](../../material/Action/AlarmAdd.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlarmAddXs>`
- `<$AlarmAddSm>`
- `<$AlarmAddMd>`
- `<$AlarmAddLg>`





## AlarmAdd

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element AlarmAdd
include('material/Action/AlarmAdd')

' renders the element
AlarmAdd('AlarmAdd', 'Alarm Add', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AlarmAdd
include('material/Action/AlarmAdd')

' renders the element
AlarmAdd('AlarmAdd', 'Alarm Add', 'an optional tech label', 'an optional description')
@enduml
```

