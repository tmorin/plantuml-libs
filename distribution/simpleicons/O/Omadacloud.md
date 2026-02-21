# Omadacloud


```text
simpleicons/O/Omadacloud
```

```text
include('simpleicons/O/Omadacloud')
```



| Illustration | Omadacloud |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/O/Omadacloud.png) | ![illustration for Omadacloud](../../simpleicons/O/Omadacloud.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OmadacloudXs>`
- `<$OmadacloudSm>`
- `<$OmadacloudMd>`
- `<$OmadacloudLg>`





## Omadacloud

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Omadacloud
include('simpleicons/O/Omadacloud')

' renders the element
Omadacloud('Omadacloud', 'Omadacloud', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Omadacloud
include('simpleicons/O/Omadacloud')

' renders the element
Omadacloud('Omadacloud', 'Omadacloud', 'an optional tech label', 'an optional description')
@enduml
```

