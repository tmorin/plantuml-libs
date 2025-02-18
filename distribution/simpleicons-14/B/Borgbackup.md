# Borgbackup


```text
simpleicons-14/B/Borgbackup
```

```text
include('simpleicons-14/B/Borgbackup')
```



| Illustration | Borgbackup |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Borgbackup.png) | ![illustration for Borgbackup](../../simpleicons-14/B/Borgbackup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BorgbackupXs>`
- `<$BorgbackupSm>`
- `<$BorgbackupMd>`
- `<$BorgbackupLg>`





## Borgbackup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Borgbackup
include('simpleicons-14/B/Borgbackup')

' renders the element
Borgbackup('Borgbackup', 'Borgbackup', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Borgbackup
include('simpleicons-14/B/Borgbackup')

' renders the element
Borgbackup('Borgbackup', 'Borgbackup', 'an optional tech label', 'an optional description')
@enduml
```

