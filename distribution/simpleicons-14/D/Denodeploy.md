# Denodeploy


```text
simpleicons-14/D/Denodeploy
```

```text
include('simpleicons-14/D/Denodeploy')
```



| Illustration | Denodeploy |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/D/Denodeploy.png) | ![illustration for Denodeploy](../../simpleicons-14/D/Denodeploy.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DenodeployXs>`
- `<$DenodeploySm>`
- `<$DenodeployMd>`
- `<$DenodeployLg>`





## Denodeploy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Denodeploy
include('simpleicons-14/D/Denodeploy')

' renders the element
Denodeploy('Denodeploy', 'Denodeploy', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Denodeploy
include('simpleicons-14/D/Denodeploy')

' renders the element
Denodeploy('Denodeploy', 'Denodeploy', 'an optional tech label', 'an optional description')
@enduml
```

