# Fugacloud


```text
simpleicons/F/Fugacloud
```

```text
include('simpleicons/F/Fugacloud')
```



| Illustration | Fugacloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/F/Fugacloud.png) | ![illustration for Fugacloud](../../simpleicons/F/Fugacloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FugacloudXs>`
- `<$FugacloudSm>`
- `<$FugacloudMd>`
- `<$FugacloudLg>`





## Fugacloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Fugacloud
include('simpleicons/F/Fugacloud')

' renders the element
Fugacloud('Fugacloud', 'Fugacloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fugacloud
include('simpleicons/F/Fugacloud')

' renders the element
Fugacloud('Fugacloud', 'Fugacloud', 'an optional tech label', 'an optional description')
@enduml
```

