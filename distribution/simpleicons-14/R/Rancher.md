# Rancher


```text
simpleicons-14/R/Rancher
```

```text
include('simpleicons-14/R/Rancher')
```



| Illustration | Rancher |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/R/Rancher.png) | ![illustration for Rancher](../../simpleicons-14/R/Rancher.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RancherXs>`
- `<$RancherSm>`
- `<$RancherMd>`
- `<$RancherLg>`





## Rancher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Rancher
include('simpleicons-14/R/Rancher')

' renders the element
Rancher('Rancher', 'Rancher', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Rancher
include('simpleicons-14/R/Rancher')

' renders the element
Rancher('Rancher', 'Rancher', 'an optional tech label', 'an optional description')
@enduml
```

