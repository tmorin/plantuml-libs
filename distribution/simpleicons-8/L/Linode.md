# Linode


```text
simpleicons-8/L/Linode
```

```text
include('simpleicons-8/L/Linode')
```



| Illustration | Linode |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/L/Linode.png) | ![illustration for Linode](../../simpleicons-8/L/Linode.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LinodeXs>`
- `<$LinodeSm>`
- `<$LinodeMd>`
- `<$LinodeLg>`





## Linode

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Linode
include('simpleicons-8/L/Linode')

' renders the element
Linode('Linode', 'Linode', 'an optional tech label', 'an optional description')
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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Linode
include('simpleicons-8/L/Linode')

' renders the element
Linode('Linode', 'Linode', 'an optional tech label', 'an optional description')
@enduml
```

