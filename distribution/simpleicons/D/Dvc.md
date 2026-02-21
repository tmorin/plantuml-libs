# Dvc


```text
simpleicons/D/Dvc
```

```text
include('simpleicons/D/Dvc')
```



| Illustration | Dvc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Dvc.png) | ![illustration for Dvc](../../simpleicons/D/Dvc.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DvcXs>`
- `<$DvcSm>`
- `<$DvcMd>`
- `<$DvcLg>`





## Dvc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Dvc
include('simpleicons/D/Dvc')

' renders the element
Dvc('Dvc', 'Dvc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Dvc
include('simpleicons/D/Dvc')

' renders the element
Dvc('Dvc', 'Dvc', 'an optional tech label', 'an optional description')
@enduml
```

