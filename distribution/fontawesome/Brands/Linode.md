# Linode


```text
fontawesome/Brands/Linode
```

```text
include('fontawesome/Brands/Linode')
```



| Illustration | Linode |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/Linode.png) | ![illustration for Linode](../../fontawesome/Brands/Linode.Local.png) |



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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Linode
include('fontawesome/Brands/Linode')

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
include('fontawesome/bootstrap')

' loads the Item which embeds the element Linode
include('fontawesome/Brands/Linode')

' renders the element
Linode('Linode', 'Linode', 'an optional tech label', 'an optional description')
@enduml
```

