# Opensuse


```text
fontawesome-6/Brands/Opensuse
```

```text
include('fontawesome-6/Brands/Opensuse')
```



| Illustration | Opensuse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Opensuse.png) | ![illustration for Opensuse](../../fontawesome-6/Brands/Opensuse.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OpensuseXs>`
- `<$OpensuseSm>`
- `<$OpensuseMd>`
- `<$OpensuseLg>`





## Opensuse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Opensuse
include('fontawesome-6/Brands/Opensuse')

' renders the element
Opensuse('Opensuse', 'Opensuse', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Opensuse
include('fontawesome-6/Brands/Opensuse')

' renders the element
Opensuse('Opensuse', 'Opensuse', 'an optional tech label', 'an optional description')
@enduml
```

