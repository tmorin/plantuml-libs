# DropletSlash


```text
fontawesome-6/Solid/DropletSlash
```

```text
include('fontawesome-6/Solid/DropletSlash')
```



| Illustration | DropletSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DropletSlash.png) | ![illustration for DropletSlash](../../fontawesome-6/Solid/DropletSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DropletSlashXs>`
- `<$DropletSlashSm>`
- `<$DropletSlashMd>`
- `<$DropletSlashLg>`





## DropletSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DropletSlash
include('fontawesome-6/Solid/DropletSlash')

' renders the element
DropletSlash('DropletSlash', 'Droplet Slash', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DropletSlash
include('fontawesome-6/Solid/DropletSlash')

' renders the element
DropletSlash('DropletSlash', 'Droplet Slash', 'an optional tech label', 'an optional description')
@enduml
```

