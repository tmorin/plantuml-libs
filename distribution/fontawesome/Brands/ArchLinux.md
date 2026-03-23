# ArchLinux


```text
fontawesome/Brands/ArchLinux
```

```text
include('fontawesome/Brands/ArchLinux')
```



| Illustration | ArchLinux |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Brands/ArchLinux.png) | ![illustration for ArchLinux](../../fontawesome/Brands/ArchLinux.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArchLinuxXs>`
- `<$ArchLinuxSm>`
- `<$ArchLinuxMd>`
- `<$ArchLinuxLg>`





## ArchLinux

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArchLinux
include('fontawesome/Brands/ArchLinux')

' renders the element
ArchLinux('ArchLinux', 'Arch Linux', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArchLinux
include('fontawesome/Brands/ArchLinux')

' renders the element
ArchLinux('ArchLinux', 'Arch Linux', 'an optional tech label', 'an optional description')
@enduml
```

