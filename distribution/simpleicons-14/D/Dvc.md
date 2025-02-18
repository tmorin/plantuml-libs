# Dvc


```text
simpleicons-14/D/Dvc
```

```text
include('simpleicons-14/D/Dvc')
```



| Illustration | Dvc |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Dvc.png) | ![illustration for Dvc](../../simpleicons-14/D/Dvc.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dvc
include('simpleicons-14/D/Dvc')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Dvc
include('simpleicons-14/D/Dvc')

' renders the element
Dvc('Dvc', 'Dvc', 'an optional tech label', 'an optional description')
@enduml
```

