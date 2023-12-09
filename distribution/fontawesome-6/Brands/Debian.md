# Debian


```text
fontawesome-6/Brands/Debian
```

```text
include('fontawesome-6/Brands/Debian')
```



| Illustration | Debian |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Debian.png) | ![illustration for Debian](../../fontawesome-6/Brands/Debian.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DebianXs>`
- `<$DebianSm>`
- `<$DebianMd>`
- `<$DebianLg>`





## Debian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Debian
include('fontawesome-6/Brands/Debian')

' renders the element
Debian('Debian', 'Debian', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Debian
include('fontawesome-6/Brands/Debian')

' renders the element
Debian('Debian', 'Debian', 'an optional tech label', 'an optional description')
@enduml
```

